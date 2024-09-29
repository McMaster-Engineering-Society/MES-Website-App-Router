import { NextResponse } from 'next/server';

import { TApiResponse, TMessageResponse } from '@/app/api/types';
import { deleteFormByIdService } from '@/slices/clubs/uhs-forms/services/uhsFormServices';
import { TUHSForm } from '@/slices/clubs/uhs-forms/types/uhsForm';

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const formId = searchParams.get('formId');

  if (!formId) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Form ID is required' },
      { status: 400 },
    );
  }

  try {
    const form = await deleteFormByIdService(formId);
    if (!form) {
      return NextResponse.json<TMessageResponse>(
        { message: 'Form not found' },
        { status: 404 },
      );
    }
    return NextResponse.json<TApiResponse<TUHSForm>>(
      { data: form, message: 'Successfully deleted form' },
      { status: 200 },
    );
  } catch (error) {
    /* eslint-disable no-console */
    console.error('API error:', error);
    return NextResponse.json<TMessageResponse>(
      { message: 'Failed to delete form' },
      { status: 500 },
    );
  }
}
