import type { ContactFormSchema } from '../model/schema';

export async function submitContactForm(data: ContactFormSchema): Promise<boolean> {
  const accessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
    'YOUR_ACCESS_KEY_HERE';

  const formData = new FormData();
  formData.append('access_key', accessKey);
  formData.append('first_name', data.firstName);
  formData.append('last_name', data.lastName);
  formData.append('name', `${data.firstName} ${data.lastName}`.trim());
  formData.append('email', data.email);
  formData.append('phone', data.phone);
  formData.append('service', data.service);
  if (data.message) {
    formData.append('message', data.message);
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const json = await res.json().catch(() => null);
    return res.ok && json?.success !== false;
  } catch {
    return false;
  }
}
