import { NextResponse } from 'next/server';

import { deleteFormByIdService } from '@/lib/services/formServices';
import { TApiResponse, UHSForm } from '@/lib/types';

import { TMessageResponse } from '@/app/api/types';

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
    return NextResponse.json<TApiResponse<UHSForm>>(
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
