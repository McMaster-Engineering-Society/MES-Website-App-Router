import { NextResponse } from 'next/server';

import { getAllFormsService } from '@/lib/services/formServices';

import { TApiResponse, TMessageResponse } from '@/app/api/types';

import { UHSForm } from '@/types/uhsForm';

export async function GET() {
  const allFormsList = await getAllFormsService();

  if (!allFormsList) {
    return NextResponse.json<TMessageResponse>({
      message: 'List of all forms not found',
    });
  }

  return NextResponse.json<TApiResponse<UHSForm[]>>({ data: allFormsList });
}