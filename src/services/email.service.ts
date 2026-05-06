import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const NAME_MAX = 100;
const MESSAGE_MAX = 2000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

type ValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

export function validateContactPayload(raw: unknown): ValidationResult {
  if (typeof raw !== 'object' || raw === null) {
    return { ok: false, error: 'Requisição inválida.' };
  }

  const { name, email, message } = raw as Record<string, unknown>;

  if (typeof name !== 'string' || !name.trim())
    return { ok: false, error: 'Nome é obrigatório.' };
  if (typeof email !== 'string' || !EMAIL_REGEX.test(email))
    return { ok: false, error: 'E-mail inválido.' };
  if (typeof message !== 'string' || !message.trim())
    return { ok: false, error: 'Mensagem é obrigatória.' };
  if (name.length > NAME_MAX) return { ok: false, error: 'Nome muito longo.' };
  if (message.length > MESSAGE_MAX)
    return { ok: false, error: 'Mensagem muito longa.' };

  return {
    ok: true,
    data: { name: name.trim(), email: email.trim(), message: message.trim() }
  };
}

export async function sendContactEmail({
  name,
  email,
  message
}: ContactPayload): Promise<void> {
  const { error } = await resend.emails.send({
    from: 'Contato via Portfolio <onboarding@resend.dev>',
    to: [process.env.CONTACT_EMAIL!],
    subject: `Nova mensagem de ${name}`,
    text: `De: ${email}\n\n${message}`
  });

  if (error) throw error;
}
