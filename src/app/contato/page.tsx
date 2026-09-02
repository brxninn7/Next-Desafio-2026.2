import Link from "next/link";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export default function Contato() {
  return (
    <main className="mt-35 h-full">
      <header className="pl-10 pr-10">
        <h3 className="font-space-grotesk text-[#5400AE] font-bold">CONTATO</h3>
        <h1 className="font-space-grotesk text-5xl font-bold text-white">
          Fale conosco
        </h1>
        <p className="font-poppins text-[#FFFFFF] opacity-50">
          Dúvida sobre um pedido, sugestão de jogo ou parceria comercial. Mande
          sua mensagem.
        </p>
      </header>

      <div id="content-contato" className="flex justify-center gap-6 pt-20 pb-35">
        <div id="medias-contato" className="flex flex-col gap-5">
          <Link href="mailto:bruno.assuncao@codejr.com.br" target="_blank">
            <div
              id="email-contato"
              className="flex gap-2 items-center bg-[#0E141F] border border-[#262E3D] p-2 w-120 rounded-sm"
            >
              <div
                id="mail-icon"
                className="p-2 bg-[#5400AE]/30 w-10 h-10 rounded-sm"
              >
                <MailIcon className="text-[#5400AE]" />
              </div>

              <div id="mail-content">
                <h3 className="font-space-grotesk text-white opacity-50">
                  E-MAIL
                </h3>
                <p className="font-poppins text-white font-semibold">
                  bruno.assuncao@codejr.com.br
                </p>
              </div>
            </div>
          </Link>

          <Link href="https://wa.me/32988461340" target="_blank">
            <div
              id="phone-contato"
              className="flex gap-2 items-center bg-[#0E141F] border border-[#262E3D] p-2 w-120 rounded-sm"
            >
              <div
                id="phone-icon"
                className="p-2 bg-[#5400AE]/30 w-10 h-10 rounded-sm"
              >
                <PhoneIcon className="text-[#5400AE]" />
              </div>

              <div id="phone-content">
                <h3 className="font-space-grotesk text-white opacity-50">
                  TELEFONE
                </h3>
                <p className="font-poppins text-white font-semibold">
                  (32) 98846-1340
                </p>
              </div>
            </div>
          </Link>

            <div id="localizacao-contato" className="flex flex-col bg-[#0E141F] border border-[#262E3D] w-120 p-2 rounded-sm justify-center">
            <div
              className="flex gap-2"
            >
              <div
                id="loc-icon"
                className="p-2 bg-[#5400AE]/30 w-10 h-10 rounded-sm"
              >
                <MapPinIcon className="text-[#5400AE]" />
              </div>

              <div id="phone-content">
                <h3 className="font-space-grotesk text-white opacity-50">
                  SEDE
                </h3>
                <p className="font-poppins text-white font-semibold">
                  Juiz de Fora, MG - Brasil
                </p>
              </div>

    
            </div>

            <div id="map-location-contato" className="mt-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.0972624501273!2d-43.374524023837594!3d-21.77649639845757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b9e2bea807b%3A0x7ac85ca76e3d3d1d!2sCode%20Empresa%20Jr.%20de%20Computa%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1788381350495!5m2!1spt-BR!2sbr" width="463" height="250" loading="lazy" className="rounded-sm"></iframe>
            </div>
            </div>
          
        </div>
      

      <div id="contato-box" className="flex flex-col gap-5 bg-[#0E141F] border border-[#262E3D] w-130 items-center justify-center rounded-sm">
        <div id="input-top" className="flex gap-5">
            <div id="input-nome-contato" className="flex flex-col gap-2">
                <h3 className="font-space-grotesk text-white">NOME</h3>
                <input type="text" placeholder="Digite seu nome..." className="text-white/50 font-poppins text-sm bg-[#131926] border border-[#262E3D] rounded-sm p-2 w-60 focus:border-[#5400AE] focus:outline-none focus:ring-0 focus:shadow-none"/>
            </div>

            <div id="input-email-contato" className="flex flex-col gap-2">
                <h3 className="font-space-grotesk text-white">EMAIL</h3>
                <input type="email" placeholder="usuario@exemplo.com" className="text-white/50 font-poppins text-sm bg-[#131926] border border-[#262E3D] rounded-sm p-2 w-60 focus:border-[#5400AE] focus:outline-none focus:ring-0 focus:shadow-none"/>
            </div>
        </div>

        <div id="input-bottom" className="flex flex-col gap-5">
            <div id="input-assunto-contato" className="flex flex-col gap-2">
                <h3 className="font-space-grotesk text-white">ASSUNTO</h3>
                <input type="text" placeholder="Como podemos te ajudar?" className="text-white/50 font-poppins text-sm bg-[#131926] border border-[#262E3D] rounded-sm p-2 w-125 focus:border-[#5400AE] focus:outline-none focus:ring-0 focus:shadow-none"/>
            </div>

            <div id="textarea-descricao-contato" className="flex flex-col gap-2">
                <h3 className="font-space-grotesk text-white">DESCRIÇÃO</h3>
                <textarea name="" id="" className="text-white/50 font-poppins text-sm bg-[#131926] border border-[#262E3D] rounded-sm p-2 w-125 h-49 resize-none focus:border-[#5400AE] focus:outline-none focus:ring-0 focus:shadow-none" placeholder="Escreva sua mensagem..."></textarea>
            </div>

            <button className="flex w-full bg-[#5400AE] font-poppins font-semibold text-white text-sm items-center justify-center p-3 rounded-sm hover:bg-[#45008f] transition-colors cursor-pointer">
                Enviar Mensagem
            </button>
        </div>
      </div>
      </div>
    </main>
  );
}
