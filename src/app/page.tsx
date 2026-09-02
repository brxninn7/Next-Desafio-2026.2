import Link from "next/link";
import { ArrowRight, RocketIcon, ShieldCheck, Zap } from "lucide-react";
import { HeroSectionBackground } from "./components/HeroSectionBackground";
import { CardItem } from "./components/CardItem";

export default function Home() {
  return (
    <main>
      <section
        id="hero-section"
        className="relative h-235 overflow-hidden border-b border-[#262E3D]"
      >
        <HeroSectionBackground />

        <div className="absolute inset-0 z-1 bg-linear-0 from-[#070B14] via-[#070B14]/80 via 40% to-[#070B14]/50" />

        <div className="absolute z-10 flex h-full w-full flex-col justify-center ml-10 mr-10 text-[#F5F5F5] font-poppins">
          <h1 className="font-space-grotesk font-bold text-7xl">
            Seu próximo <span className="text-[#5400AE]">vício</span>
          </h1>
          <h1 className="font-space-grotesk font-bold text-7xl pb-5">
            <span className="text-[#5400AE]">digital</span> começa aqui.
          </h1>
          <p className="opacity-50 text-[20px]">
            Milhares de jogos, lançamentos globais e clássicos cult.
          </p>
          <p className="opacity-50 pb-5 text-[20px]">
            Baixe direto e comece a jogar em minutos.
          </p>

          <div id="buttons-hero" className="flex gap-3">
            <Link
              href="/jogos"
              className="flex bg-[#5400AE] w-50 p-2 items-center justify-center rounded-sm gap-2 hover:bg-[#45008f] transition-colors"
            >
              Explorar Catálogo
              <ArrowRight className="w-5" />
            </Link>
            <Link
              href="/jogos"
              className="flex bg-[#070B14] border-2 border-[#262E3D] items-center justify-center p-2 rounded-sm hover:bg-[#04070c] transition-colors"
            >
              Ver Ofertas
            </Link>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="m-15 flex items-center justify-center gap-10"
      >
        <div className="flex gap-4 bg-[#0C101B] border border-[#262E3D] w-100 p-4 rounded-sm">
          <div className="flex items-center justify-center rounded-sm w-15 h-12 bg-[#5400AE]/30 p-2">
            <RocketIcon className="text-[#5400AE]" />
          </div>

          <div>
            <h3 className="font-space-grotesk text-[#F5F5F5] text-lg font-bold">
              Download instantâneo
            </h3>
            <p className="font-poppins opacity-50 text-[#F5F5F5]">
              Chaves entregues em segundos após o pagamento.
            </p>
          </div>
        </div>

        <div className="flex gap-4 bg-[#0C101B] border border-[#262E3D] w-100 p-4 rounded-sm">
          <div className="flex items-center justify-center rounded-sm w-15 h-12 bg-[#5400AE]/30 p-2">
            <ShieldCheck className="text-[#5400AE]" />
          </div>

          <div>
            <h3 className="font-space-grotesk text-[#F5F5F5] text-lg font-bold">
              Compra segura
            </h3>
            <p className="font-poppins opacity-50 text-[#F5F5F5]">
              Pagamento criptografado e garantia de reembolso.
            </p>
          </div>
        </div>

        <div className="flex gap-4 bg-[#0C101B] border border-[#262E3D] w-100 p-4 rounded-sm">
          <div className="flex items-center justify-center rounded-sm w-15 h-12 bg-[#5400AE]/30 p-2">
            <Zap className="text-[#5400AE]" />
          </div>

          <div>
            <h3 className="font-space-grotesk text-[#F5F5F5] text-lg font-bold">
              Ofertas diárias
            </h3>
            <p className="font-poppins opacity-50 text-[#F5F5F5]">
              Descontos rotativos em títulos AAA e indies.
            </p>
          </div>
        </div>
      </section>

      <section
        id="lancamentos-section"
        className="text-[#F5F5F5] m-10 mt-40 mb-40"
      >
        <div>
          <h3 className="font-space-grotesk text-[#5400AE] font-bold">
            EM DESTAQUE
          </h3>
        </div>

        <div className="font-poppins flex justify-between mb-5">
          <h1 className="text-3xl font-bold">Lançamentos da semana</h1>

          <Link
            href="/jogos"
            className="flex opacity-50 items-end hover:opacity-100 transition-opacity"
          >
            Ver mais <ArrowRight />
          </Link>
        </div>

        <div
          id="lancamentos-items"
          className="flex justify-between pl-25 pr-25"
        >
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </section>

      <section
        id="mais-comprados-section"
        className="text-[#F5F5F5] m-10 mt-40 mb-40"
      >
        <div>
          <h3 className="font-space-grotesk text-[#5400AE] font-bold">
            EM DESTAQUE
          </h3>
        </div>

        <div className="font-poppins flex justify-between mb-5">
          <h1 className="text-3xl font-bold">Mais comprados</h1>

          <Link
            href="/jogos"
            className="flex opacity-50 items-end hover:opacity-100 transition-opacity"
          >
            Ver mais <ArrowRight />
          </Link>
        </div>

        <div
          id="mais-comprados-items"
          className="flex justify-between pl-25 pr-25"
        >
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </section>

      <section
        id="valores-section"
        className="text-[#F5F5F5] p-10 mb-30 flex justify-between items-center ml-65 mr-65"
      >
        <div className="flex flex-col gap-2 w-96 justify-center bg-[#0E141F] border border-[#262E3D] p-4 rounded-sm h-37.5">
          <div className="font-space-grotesk text-[#5400AE] font-bold text-3xl">
            <h1>Missão</h1>
          </div>

          <div className="font-poppins opacity-50 text-justify">
            <p>
              Levar os melhores jogos do mundo para as mãos de todo tipo de
              jogador, com preço justo e experiência instantânea.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-96 justify-center bg-[#0E141F] border border-[#262E3D] p-4 rounded-sm h-37.5">
          <div className="font-space-grotesk text-[#5400AE] font-bold text-3xl">
            <h1>Visão</h1>
          </div>

          <div className="font-poppins opacity-50 text-justify">
            <p>
              Ser a loja de jogos digital mais amada da América Latina até 2030.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-96 justify-center bg-[#0E141F] border border-[#262E3D] p-4 rounded-sm h-37.5">
          <div className="font-space-grotesk text-[#5400AE] font-bold text-3xl">
            <h1>Valores</h1>
          </div>

          <div className="font-poppins opacity-50 text-justify">
            <p>
              Comunidade, transparência, curadoria e paixão por videogames em
              cada pixel.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
