import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

import {
  createDocumentService,
  getAllDocumentsService,
} from '@/lib/services/documentServices';
import { TDocument } from '@/lib/types';

import { TApiResponse, TMessageResponse } from '@/app/api/types';

export async function GET() {
  const allDocumentsList = await getAllDocumentsService();

  if (!allDocumentsList)
    return NextResponse.json<TMessageResponse>({
      message: 'list of all documents not found',
    });
  return NextResponse.json<TApiResponse<TDocument[]>>({
    data: allDocumentsList,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newDocument = await createDocumentService(body);

  if (!newDocument)
    return NextResponse.json<TMessageResponse>({
      message: 'new document not created',
    });
  return NextResponse.json<TApiResponse<TDocument>>({ data: newDocument });
}
