import { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { isServiceId } from '@/src/entities/service/model';
import { contactFormSchema, type ContactFormSchema } from '../model/schema';
import { submitContactForm } from '../api/submit-contact';

const SERVICE_PARAM_MAP: Record<string, 'Handyman' | 'Painting'> = {
  handyman: 'Handyman',
  painting: 'Painting',
};

export function useContactForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<'success' | 'error' | null>(null);

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onTouched',
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const rawService = new URLSearchParams(window.location.search).get('service');
    if (isServiceId(rawService)) {
      const mapped = SERVICE_PARAM_MAP[rawService];
      if (mapped) {
        form.setValue('service', mapped, { shouldValidate: false });
      }
    }
  }, [form]);

  async function onSubmit(data: ContactFormSchema) {
    startTransition(async () => {
      try {
        const success = await submitContactForm(data);
        if (success) {
          setResult('success');
          form.reset();
        } else {
          setResult('error');
        }
      } catch {
        setResult('error');
      }
    });
  }

  return { form, isPending, result, onSubmit };
}
