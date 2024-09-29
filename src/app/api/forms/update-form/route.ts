import { NextResponse } from 'next/server';

import { TApiResponse, TMessageResponse } from '@/app/api/types';
import { updateFormByIdService } from '@/slices/clubs/uhs-forms/services/uhsFormServices';
import { TUHSForm } from '@/slices/clubs/uhs-forms/types/uhsForm';

export async function PATCH(req: Request) {
  const { searchParams } = new URL(req.url);
  const formId = searchParams.get('formId');
  const { formStatus } = await req.json();

  if (!formId) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Form ID is required' },
      { status: 400 },
    );
  }
  if (
    !formStatus ||
    !['pending', 'approved', 'rejected'].includes(formStatus)
  ) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Invalid form status' },
      { status: 400 },
    );
  }
  try {
    const updatedForm = await updateFormByIdService(formId, formStatus);
    if (!updatedForm) {
      return NextResponse.json<TMessageResponse>(
        { message: 'Form not found or update failed' },
        { status: 404 },
      );
    }
    return NextResponse.json<TApiResponse<TUHSForm>>(
      { data: updatedForm, message: 'Successfully updated form' },
      { status: 200 },
    );
  } catch (error) {
    /* eslint-disable no-console */
    console.error('API error:', error);
    return NextResponse.json<TMessageResponse>(
      { message: 'Failed to update form' },
      { status: 500 },
    );
  }
}
