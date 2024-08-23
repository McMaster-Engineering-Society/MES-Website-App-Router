import { NextResponse } from 'next/server';

import { getAllFormsService } from '@/lib/services/formServices';

import { TApiResponse, TMessageResponse, UHSForm } from '@/app/api/types';

export async function GET() {
  const allFormsList = await getAllFormsService();

  if (!allFormsList) {
    return NextResponse.json<TMessageResponse>({
      message: 'List of all forms not found',
    });
  }

  return NextResponse.json<TApiResponse<UHSForm[]>>({ data: allFormsList });
}
