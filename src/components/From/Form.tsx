'use client';

import { Input } from '../Input';
import { useForm } from './useForm';

export const Form = () => {
  const { formFields, status, errorMessage, setFormFields, handleSubmit } =
    useForm();

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="w-full flex flex-wrap gap-8 max-md:flex-col max-md:gap-4">
        <div className="w-full flex gap-6 max-md:flex-wrap">
          <div className="flex w-full gap-3 flex-col">
            <label htmlFor="name" className="text-3xl">
              Nome
            </label>
            <Input
              type="text"
              value={formFields.name}
              onChange={(e) =>
                setFormFields({ ...formFields, name: e.target.value })
              }
              name="name"
              placeholder="Seu nome"
            />
          </div>
          <div className="flex w-full gap-3 flex-col">
            <label htmlFor="email" className="text-3xl">
              Email
            </label>
            <Input
              type="email"
              value={formFields.email}
              onChange={(e) =>
                setFormFields({ ...formFields, email: e.target.value })
              }
              name="email"
              placeholder="email@email.com"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <label htmlFor="message" className="text-3xl">
            Sua mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formFields.message}
            onChange={(e) =>
              setFormFields({ ...formFields, message: e.target.value })
            }
            cols={30}
            rows={5}
            placeholder="Olá Matheus..."
            className="w-full flex-grow bg-transparent border-2 border-white font-light rounded-lg px-4 py-3"
          />
        </div>
      </div>

      <div className="h-5">
        {status === 'error' && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}

        {status === 'success' && (
          <p className="text-green-500 text-sm">
            Mensagem enviada com sucesso!
          </p>
        )}
      </div>

      <div className="w-full flex justify-end">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-8 py-2 border-2 border-gray-color bg-transparent rounded-md text-xl text-gray-color duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-color hover:text-background-color focus:bg-gray-color focus:text-background-color max-md:w-full"
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </form>
  );
};
