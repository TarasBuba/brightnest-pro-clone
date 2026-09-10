import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from '../model/shema';
import { submitContactForm } from '../api/submit-contact';
import type { ContactFormSchema } from '../model/shema';

export function useContactForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<'success' | 'error' | null>(null);

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onTouched',
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
