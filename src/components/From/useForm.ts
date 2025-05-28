import { useState } from 'react';

export const useForm = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formFields;

    if (!name || !email || !message) {
      setErrorMessage('Preencha todos os campos antes de enviar.');
      setStatus('error');
      return;
    }

    if (!isEmailValid(email)) {
      setErrorMessage('Por favor, insira um e-mail válido.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      if (!res.ok) {
        throw new Error('Erro ao enviar e-mail.');
      }

      setFormFields({ name: '', email: '', message: '' });
      setStatus('success');

      setTimeout(() => {
        setStatus('idle');
      }, 1500);
    } catch (err) {
      setErrorMessage('Erro ao enviar mensagem. Tente novamente mais tarde.');
      setStatus('error');
    }
  };

  return {
    status,
    errorMessage,
    formFields,
    setFormFields,
    handleSubmit
  };
};
