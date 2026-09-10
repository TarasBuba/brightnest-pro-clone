import type { ContactFormSchema } from '../model/shema';

export async function submitContactForm(data: ContactFormSchema) {
  const formData = new FormData();
  formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '');

  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('phone', data.phone);
  formData.append('service', data.service);
  if (data.message) formData.append('message', data.message);

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  });

  return res.ok;
}
