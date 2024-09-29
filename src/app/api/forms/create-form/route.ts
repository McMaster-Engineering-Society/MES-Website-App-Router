import { NextResponse } from 'next/server';

import { TApiResponse, TMessageResponse } from '@/app/api/types';
import { createFormService } from '@/slices/clubs/uhs-forms/services/uhsFormServices';
import { TUHSForm } from '@/slices/clubs/uhs-forms/types/uhsForm';

export async function POST(req: Request) {
  const form = await req.json();

  if (!form) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Form information is required' },
      { status: 400 },
    );
  }

  try {
    const newForm = await createFormService(form);
    if (!newForm) {
      return NextResponse.json<TMessageResponse>(
        { message: 'Form not created. Check Form status.' },
        { status: 404 },
      );
    }
    return NextResponse.json<TApiResponse<TUHSForm>>(
      { data: newForm, message: 'Successfully created form' },
      { status: 200 },
    );
  } catch (error) {
    /* eslint-disable no-console */
    console.error('API error:', error);
    return NextResponse.json<TMessageResponse>(
      { message: 'Failed to create form' },
      { status: 500 },
    );
  }
}
