import Link from "next/link";
import { ArrowRight, RocketIcon, ShieldCheck, Zap } from "lucide-react";
import { HeroSectionBackground } from "./components/HeroSectionBackground";

export default function Home() {
  return (
    <main>
      <section id="hero-section" className="relative h-235 overflow-hidden border-b border-[#262E3D]">

      <HeroSectionBackground />

      <div className="absolute inset-0 z-1 bg-linear-0 from-[#070B14] via-[#070B14]/80 via 40% to-[#070B14]/50" />

      <div className="absolute z-10 flex h-full w-full flex-col justify-center ml-10 mr-10 text-[#F5F5F5] font-poppins">

        <h1 className="font-space-grotesk font-bold text-7xl">Seu próximo <span className="text-[#5400AE]">vício</span></h1>
        <h1 className="font-space-grotesk font-bold text-7xl pb-5"><span className="text-[#5400AE]">digital</span> começa aqui.</h1>
        <p className="opacity-50 text-[20px]">Milhares de jogos, lançamentos globais e clássicos cult.</p>
        <p className="opacity-50 pb-5 text-[20px]">Baixe direto e comece a jogar em minutos.</p>

        <div id="buttons-hero" className="flex gap-3">
          <Link href="/jogos" className="flex bg-[#5400AE] w-50 p-2 items-center justify-center rounded-sm gap-2 hover:bg-[#45008f] transition-colors">
            Explorar Catálogo
            <ArrowRight className="w-5"/>
          </Link>
          <Link href="/jogos" className="flex bg-[#070B14] border-2 border-[#262E3D] items-center justify-center p-2 rounded-sm hover:bg-[#04070c] transition-colors">
            Ver Ofertas
          </Link>
        </div>

      </div>
      </section>

      <section id="about" className="m-15 flex items-center justify-center gap-10">
        <div className="flex gap-4 bg-[#0C101B] border border-[#262E3D] w-100 p-4 rounded-sm">
          <div className="flex items-center justify-center rounded-sm w-15 h-12 bg-[#5400AE]/30 p-2">
              <RocketIcon className="text-[#5400AE]"/>
          </div>

          <div>
             <h3 className="font-space-grotesk text-[#F5F5F5] text-lg font-bold">Download instantâneo</h3>
             <p className="font-poppins opacity-50 text-[#F5F5F5]">Chaves entregues em segundos após o pagamento.</p>
          </div>
        </div>

        <div className="flex gap-4 bg-[#0C101B] border border-[#262E3D] w-100 p-4 rounded-sm">
          <div className="flex items-center justify-center rounded-sm w-15 h-12 bg-[#5400AE]/30 p-2">
              <ShieldCheck className="text-[#5400AE]"/>
          </div>

          <div>
             <h3 className="font-space-grotesk text-[#F5F5F5] text-lg font-bold">Compra segura</h3>
             <p className="font-poppins opacity-50 text-[#F5F5F5]">Pagamento criptografado e garantia de reembolso.</p>
          </div>
        </div>

        <div className="flex gap-4 bg-[#0C101B] border border-[#262E3D] w-100 p-4 rounded-sm">
          <div className="flex items-center justify-center rounded-sm w-15 h-12 bg-[#5400AE]/30 p-2">
              <Zap className="text-[#5400AE]"/>
          </div>

          <div>
             <h3 className="font-space-grotesk text-[#F5F5F5] text-lg font-bold">Ofertas diárias</h3>
             <p className="font-poppins opacity-50 text-[#F5F5F5]">Descontos rotativos em títulos AAA e indies.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
