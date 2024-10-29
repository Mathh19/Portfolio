'use client';

import { useState } from 'react';

import emailjs from '@emailjs/browser';

import { Input } from './Input';

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_PLUBIC_KEY;

export const Form = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [sended, setSended] = useState(false);

  const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formFields.name === '' ||
      formFields.email === '' ||
      formFields.message === ''
    ) {
      alert(
        'Ops! Parece que um dos campos estão vazios :( por favor verifique e preencha o campo vazio.'
      );
      return;
    }

    const template = {
      from_name: formFields.name,
      email: formFields.email,
      message: formFields.message
    };

    setLoading(true);
    emailjs
      .send(serviceId as string, templateId as string, template, publicKey)
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
          setFormFields({
            name: '',
            email: '',
            message: ''
          });
          setLoading(false);
          setSended(true);
          setTimeout(() => {
            setSended(false);
          }, 1000);
        },
        function (error) {
          console.log('FAILED...', error);
          setLoading(false);
          setSended(false);
        }
      );
  };

  return (
    <form
      onSubmit={handleSendEmail}
      className="w-full max-w-[1670px] space-y-4"
    >
      <div className="w-full flex gap-8 max-md:flex-col max-md:gap-4">
        <div className="w-full flex flex-col gap-4">
          <Input
            type="text"
            value={formFields.name}
            onChange={(e) =>
              setFormFields({ ...formFields, name: e.target.value })
            }
            name="name"
            label="Nome"
            placeholder="Seu nome"
          />
          <Input
            type="email"
            value={formFields.email}
            onChange={(e) =>
              setFormFields({ ...formFields, email: e.target.value })
            }
            name="email"
            label="Email"
            placeholder="example@example.com"
          />
        </div>
        <div className="w-full flex flex-col text-3xl gap-2.5">
          <label htmlFor="message">Sua mensagem</label>
          <textarea
            id="message"
            name="message"
            value={formFields.message}
            onChange={(e) =>
              setFormFields({ ...formFields, message: e.target.value })
            }
            cols={30}
            rows={5}
            placeholder="Digite sua messagem"
            className="w-full max-h-[158px] bg-transparent border-2 border-white font-light rounded-lg px-4 py-1.5"
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-2 border-2 border-white bg-transparent rounded-md text-xl duration-200 ease-in-out disabled:bg-zinc-600 disabled:text-white disabled:border-zinc-600 hover:bg-white hover:text-background-color focus:bg-white focus:text-background-color max-md:w-full"
        >
          {sended && 'Enviado'}
          {!loading && !sended && 'Enviar'}
          {loading && !sended && '...'}
        </button>
      </div>
    </form>
  );
};
