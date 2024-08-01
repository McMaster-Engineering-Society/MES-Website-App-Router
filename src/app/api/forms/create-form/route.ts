import { NextResponse } from 'next/server';

import { createFormService } from '@/lib/services/formServices';
import { TApiResponse } from '@/lib/types';

import { TMessageResponse } from '@/app/api/types';

import { UHSForm } from '@/types/uhsForm';

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
        { message: 'Form not created' },
        { status: 404 },
      );
    }
    return NextResponse.json<TApiResponse<UHSForm>>(
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
