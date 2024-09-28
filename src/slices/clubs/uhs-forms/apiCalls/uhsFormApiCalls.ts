import { TUHSFormData } from '@/slices/clubs/uhs-forms/types/uhsForm';

export async function submitUHSForm(data: TUHSFormData): Promise<void> {
  const response = await fetch('/api/forms/create-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    // eslint-disable-next-line no-console
    console.log(errorResponse.message || 'Form submission failed');
  }
}