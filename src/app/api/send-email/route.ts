import { NextResponse } from 'next/server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: `Recrutador ${name} <onboarding@resend.dev>`,
      to: ['eumathfreitas@gmail.com'],
      subject: `Nova mensagem de ${name}`,
      text: `Email de: ${email}\n\n${message}`
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar email.' },
      { status: 500 }
    );
  }
}
