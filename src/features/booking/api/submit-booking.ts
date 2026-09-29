import type { BookingFormData } from '../model/booking-schema';

export type SubmitBookingResult = {
  success: boolean;
  message: string;
};

export async function submitBookingForm(
  data: BookingFormData,
  botcheck?: string,
): Promise<SubmitBookingResult> {
  const accessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
    'YOUR_ACCESS_KEY_HERE';

  // Honeypot spam check: if filled, silently succeed without sending
  if (botcheck) {
    return {
      success: true,
      message: 'Thank you! Your request has been received.',
    };
  }

  const payload = {
    access_key: accessKey,
    subject: `New Service Request: ${data.service} - ${data.firstName} ${data.lastName}`,
    from_name: 'BrightNest Pro Website',
    first_name: data.firstName,
    last_name: data.lastName,
    name: `${data.firstName} ${data.lastName}`.trim(),
    phone: data.phone,
    email: data.email,
    service: data.service,
    message: data.message || 'No additional project details provided.',
  };

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const json = (await response.json().catch(() => null)) as {
      success?: boolean;
      message?: string;
    } | null;

    if (response.ok && json?.success !== false) {
      return {
        success: true,
        message:
          json?.message ||
          'Thank you! Your request has been submitted. Our Edmonton team will reach out within 15 minutes during business hours.',
      };
    }

    return {
      success: false,
      message:
        json?.message ||
        'Could not submit your request at this time. Please call us directly at (780) 984-0190.',
    };
  } catch {
    return {
      success: false,
      message:
        'A network connection error occurred. Please check your internet or call us directly at (780) 984-0190.',
    };
  }
}
