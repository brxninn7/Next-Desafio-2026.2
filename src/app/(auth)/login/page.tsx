"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { ArrowLeft } from "lucide-react";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <main className="flex justify-center items-center h-screen">
      <div
        id="box-login"
        className="relative w-240 h-120 bg-[#0E141F] border border-[#262E3D] rounded-sm overflow-hidden"
      >
        <div
          id="left-side"
          className="
                        absolute top-0 left-0
                        z-10
                        w-1/2 h-full
                        p-3
                        flex flex-col justify-center gap-5
                    "
        >
          <header>
            <h1 className="font-space-grotesk text-white text-5xl">Entrar</h1>

            <p className="font-poppins text-white/50">
              Use seu e-mail e senha para continuar.
            </p>
          </header>

          <div id="input-login" className="flex flex-col gap-3 w-full">
            <div id="email-input" className="flex flex-col">
              <h3 className="text-white font-space-grotesk">EMAIL</h3>

              <input
                type="email"
                placeholder="email@exemplo.com"
                className="text-white/50 font-poppins text-sm bg-[#131926] border border-[#262E3D] rounded-sm p-2 w-full focus:border-[#5400AE] focus:outline-none focus:ring-0 focus:shadow-none"
              />
            </div>

            <div id="password-input" className="flex flex-col">
              <h3 className="text-white font-space-grotesk">SENHA</h3>

              <input
                type="password"
                placeholder="Digite sua senha..."
                className="text-white/50 font-poppins text-sm bg-[#131926] border border-[#262E3D] rounded-sm p-2 w-full focus:border-[#5400AE] focus:outline-none focus:ring-0 focus:shadow-none"
              />
            </div>

            <div id="mais-opcoes" className="flex justify-between">
              <div className="flex gap-2 items-center justify-center">
                <input
                  type="checkbox"
                  name="Lembrar de mim"
                  id="lembrar"
                  className="accent-[#5400AE] cursor-pointer"
                />

                <p className="font-poppins text-white text-sm">
                  Lembrar de mim
                </p>
              </div>

              <div
                id="esqueci-minha-senha"
                className="flex items-center justify-center"
              >
                <Link
                  href="/forgot-password"
                  className="text-[#5400AE] font-poppins underline text-sm"
                >
                  Esqueci minha senha
                </Link>
              </div>
            </div>

            <button
              type="button"
              className="bg-[#5400AE] font-poppins text-white p-2 rounded-sm hover:bg-[#45008f] transition-colors cursor-pointer"
            >
              Entrar
            </button>

            <div
              id="cadastro"
              className="flex font-poppins gap-2 items-center justify-center"
            >
              <p className="text-white">Não possui uma conta?</p>

              <button
                type="button"
                className="text-[#5400AE] cursor-pointer"
                onClick={() => setIsRegister(true)}
              >
                Criar conta
              </button>
            </div>
          </div>
        </div>

        <div
          id="register-side"
          className={`
        absolute top-0 left-0
        z-10
        w-1/2 h-full
        p-3
        flex flex-col justify-center gap-5
        translate-x-full
        
    `}
        >
          <header>
            <h1 className="font-space-grotesk text-white text-5xl">
              Cadastrar
            </h1>

            <p className="font-poppins text-white/50">
              Use seu e-mail e senha para se cadastrar.
            </p>
          </header>

          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col">
              <h3 className="text-white font-space-grotesk">EMAIL</h3>

              <input
                type="email"
                placeholder="exemplo@email.com"
                className="text-white/50 font-poppins text-sm bg-[#131926] border border-[#262E3D] rounded-sm p-2 w-full focus:border-[#5400AE] focus:outline-none focus:ring-0 focus:shadow-none"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-white font-space-grotesk">SENHA</h3>

              <input
                type="password"
                placeholder="Digite sua senha..."
                className="text-white/50 font-poppins text-sm bg-[#131926] border border-[#262E3D] rounded-sm p-2 w-full focus:border-[#5400AE] focus:outline-none focus:ring-0 focus:shadow-none"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-white font-space-grotesk">CONFIRMAR SENHA</h3>

              <input
                type="password"
                placeholder="Digite sua senha..."
                className="text-white/50 font-poppins text-sm bg-[#131926] border border-[#262E3D] rounded-sm p-2 w-full focus:border-[#5400AE] focus:outline-none focus:ring-0 focus:shadow-none"
              />
            </div>

            <button
              type="button"
              className="bg-[#5400AE] font-poppins text-white p-2 rounded-sm hover:bg-[#45008f] transition-colors cursor-pointer"
            >
              Cadastrar
            </button>

            <div className="flex font-poppins gap-2 items-center justify-center">
              <p className="text-white">Já possui uma conta?</p>

              <button
                type="button"
                onClick={() => setIsRegister(false)}
                className="text-[#5400AE] cursor-pointer"
              >
                Entrar
              </button>
            </div>
          </div>
        </div>

        <div
          id="right-side"
          className={`
                        absolute top-0 left-0
                        z-10
                        w-1/2 h-full
                        transition-transform duration-700 ease-in-out
                        ${isRegister ? "translate-x-0" : "translate-x-full"}
                    `}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/reddeadimage.jpeg"
              alt="Imagem Red Dead Redemption 2"
              fill
              className="object-cover"
            />

            <div
              id="overlay-image"
              className="absolute inset-0 bg-black/50 z-10"
            />

            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <Image
                src="/logoescrita2.png"
                alt="Imagem Nexus"
                width={250}
                height={250}
              />
            </div>

            <Link
              href="/"
              className="absolute top-1 left-1 z-30 flex items-center justify-center w-8 h-8 bg-[#0E141F] border border-[#262E3D] p-2 rounded-sm hover:bg-[#131926] transition-colors cursor-pointer"
            >
              <ArrowLeft className="text-white w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
