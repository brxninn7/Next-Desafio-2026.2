import Link from "next/link";
import Image from "next/image";
import { InstagramLogoIcon, YoutubeLogoIcon, XLogoIcon, EnvelopeIcon } from "@phosphor-icons/react/ssr"
import { MailIcon } from "lucide-react"

export function Footer(){
    return(
        <footer className="hidden md:flex text-[#F5F5F5] bg-[#0A0F18] border-t-1 border-[#262E3D] p-14 justify-between">
                <div id="explorar-section" className="flex flex-col">
                    <h3 className="opacity-50 pb-3">
                        EXPLORAR
                    </h3>

                    <div className="flex flex-col gap-1">
                        <Link href="/jogos">
                            Todos os jogos
                        </Link>

                        <Link href="/jogos">
                            Lançamentos
                        </Link>

                        <Link href="/jogos">
                            Ofertas
                        </Link>

                        <Link href="/contato">
                            Suporte
                        </Link>
                    </div>
                </div>

                <div id="image-section" className="flex flex-col justify-center items-center">

                    <Link href="/">
                        <Image src="/logoescrita.png" alt="" width={350} height={350} className="transition-transform hover:scale-110"/>
                    </Link>

                    <p className="opacity-50">A loja de jogos que fala a sua língua. Lançamentos,</p>
                    <p className="opacity-50">clássicos e indies com preços que fazem sentido.</p>
                </div>

                <div id="midias-section" className="flex flex-col items-center justify-start">
                    <h3 className="opacity-50 pb-3">REDES SOCIAIS</h3>

                    <div className="flex gap-3 items-center justify-center">
                        <Link href="https://www.instagram.com/brxninn/" target="_blank" className="bg-[#0E141F] p-2 border-2 border-[#262E3D] hover:bg-[#131b29] transition-colors rounded-lg">
                            <InstagramLogoIcon className="text-3xl opacity-50"/>
                        </Link>

                        <Link href="/" className="bg-[#0E141F] p-2 border-2 border-[#262E3D] hover:bg-[#131b29] transition-colors rounded-lg">
                            <EnvelopeIcon className="text-3xl opacity-50"/>
                        </Link>

                        <Link href="/" className="bg-[#0E141F] p-2 border-2 border-[#262E3D] hover:bg-[#131b29] transition-colors rounded-lg">
                            <YoutubeLogoIcon className="text-3xl opacity-50"/>
                        </Link>

                        <Link href="/" className="bg-[#0E141F] p-2 border-2 border-[#262E3D] hover:bg-[#131b29] transition-colors rounded-lg">
                            <XLogoIcon className="text-3xl opacity-50"/>
                        </Link>
                    </div>
                </div>
        </footer>
    );
}