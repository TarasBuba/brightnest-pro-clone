import type { ContactFormSchema } from '../model/schema';

export async function submitContactForm(data: ContactFormSchema): Promise<boolean> {
  const accessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'f26e82a7-28c9-4921-a2e3-4762a175ea81';

  if (!accessKey) {
    console.error('Web3Forms access key is missing');
    return false;
  }

  const formData = new FormData();
  formData.append('access_key', accessKey);
  formData.append('first_name', data.firstName);
  formData.append('last_name', data.lastName);
  formData.append('name', `${data.firstName} ${data.lastName}`.trim());
  formData.append('email', data.email);
  formData.append('phone', data.phone);
  formData.append('service', data.service);
  
  // Honeypot field for bot protection
  if (data.botcheck) {
    return false; // A real user wouldn't check this
  }
  formData.append('botcheck', '');

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
      return false; // Failed to parse JSON, assume failure
    }
    
    return res.ok && json.success === true;
  } catch (error) {
    console.error('Failed to submit form', error);
    return false;
  }
}
