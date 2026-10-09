import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { contactFormSchema, type ContactFormSchema } from '../model/schema';
import { submitContactForm } from '../api/submit-contact';

export function useContactForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<'success' | 'error' | null>(null);
  
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get('service');
  const initialService = serviceFromUrl === 'handyman' ? 'Handyman' : serviceFromUrl === 'painting' ? 'Painting' : undefined;

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onTouched',
    defaultValues: {
      service: initialService,
    }
  });

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
