import type { ContactFormSchema } from '../model/schema';

export async function submitContactForm(data: ContactFormSchema): Promise<boolean> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  if (!accessKey) {
    console.error('Web3Forms access key is missing. Please set NEXT_PUBLIC_WEB3FORMS_KEY in your environment variables.');
    return false;
  }

  const formData = new FormData();
  formData.append('access_key', accessKey);
  formData.append('first_name', data.firstName);
  formData.append('last_name', data.lastName);
  formData.append('name', `${data.firstName} ${data.lastName}`.trim());
  formData.append('email', data.email);
  formData.append('replyto', data.email);
  formData.append('phone', data.phone);
  formData.append('service', data.service);
  formData.append('subject', `New Quote Request: ${data.service} - ${data.firstName} ${data.lastName}`);
  
  // Honeypot field for bot protection (if checked, reject immediately)
  if (data.botcheck) {
    return false;
  }

  if (data.message) {
    formData.append('message', data.message);
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    let json;
    try {
      json = await res.json();
    } catch {
      return false;
    }
    
    if (!res.ok || json.success !== true) {
      console.error('Web3Forms submission error:', json?.message || res.statusText);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Failed to submit form', error);
    return false;
  }
}
