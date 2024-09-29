import { NextResponse } from 'next/server';

import { TApiResponse, TMessageResponse } from '@/app/api/types';
import { getAllFormsService } from '@/slices/clubs/uhs-forms/services/uhsFormServices';
import { TUHSForm } from '@/slices/clubs/uhs-forms/types/uhsForm';

export async function GET() {
  const allFormsList = await getAllFormsService();

  if (!allFormsList) {
    return NextResponse.json<TMessageResponse>({
      message: 'List of all forms not found',
    });
  }

  return NextResponse.json<TApiResponse<TUHSForm[]>>({ data: allFormsList });
}
