import { NextResponse } from 'next/server';

import {
  sendContactEmail,
  validateContactPayload
} from '@services/email.service';

export const maxDuration = 5;

export async function POST(req: Request) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Requisição inválida.' },
      { status: 400 }
    );
  }

  const validation = validateContactPayload(body);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 422 });
  }

  try {
    await sendContactEmail(validation.data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar email.' },
      { status: 500 }
    );
  }
}
