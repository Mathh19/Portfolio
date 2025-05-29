'use client';

import { Input } from '../Input';
import { useForm } from './useForm';

export const Form = () => {
  const { formFields, status, errorMessage, setFormFields, handleSubmit } =
    useForm();

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="w-full flex gap-8 max-md:flex-col max-md:gap-4">
        <div className="w-full flex flex-col gap-6">
          <div className="flex gap-2.5 flex-col">
            <label htmlFor="name" className="text-3xl">
              Sua nome
            </label>
            <Input
              type="text"
              value={formFields.name}
              onChange={(e) =>
                setFormFields({ ...formFields, name: e.target.value })
              }
              name="name"
              placeholder="nome"
            />
          </div>
          <div className="flex gap-2.5 flex-col">
            <label htmlFor="email" className="text-3xl">
              Seu email
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
        <div className="w-full flex flex-col gap-2.5">
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
            placeholder="Digite sua mensagem"
            className="w-full flex-grow bg-transparent border-2 border-white font-light rounded-lg px-4 py-1.5"
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
          className="px-8 py-2 border-2 border-white bg-transparent rounded-md text-xl duration-200 ease-in-out disabled:bg-zinc-600 disabled:text-white disabled:border-zinc-600 hover:bg-white hover:text-background-color focus:bg-white focus:text-background-color max-md:w-full"
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </form>
  );
};
