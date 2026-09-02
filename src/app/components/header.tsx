import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, Menu} from "lucide-react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Header() {
    return (
        <header className="flex justify-between items-center p-6 pl-10 pr-10 font-poppins z-50 absolute w-full top-0">
            <div id="left-side" className="flex gap-5">

                <Link href="/">
                    <Image src="/logo.png" alt="" width={50} height={50}/>
                </Link>
                <div id="links" className="flex text-[#F5F5F5] gap-5 items-center text-lg">
                    <Link href="/" className="opacity-50 hover:opacity-100 transition-opacity">
                        Inicio
                    </Link>

                    <Link href="/jogos" className="opacity-50 hover:opacity-100 transition-opacity">
                        Jogos
                    </Link>

                    <Link href="/contato" className="opacity-50 hover:opacity-100 transition-opacity">
                        Contato
                    </Link>
                </div>
            </div>

            <div id="right-side" className="hidden md:flex text-[#F5F5F5] text-lg gap-5 items-center">
                <div className="flex gap-3 items-center">
                    <Search className="opacity-50 hover:opacity-100 transition-opacity" />

                    <Link href="/carrinho" className="opacity-50 hover:opacity-100 transition-opacity">
                        <ShoppingCart />
                    </Link>
                </div>

                <Avatar>
                    <AvatarImage src="/icon.jpeg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                    <AvatarBadge className="ring-0 bg-green-600 dark:bg-green-800" />
                </Avatar>
            </div>
            
            <div id="mobile" className="flex md:hidden">
                    <Menu className="text-[#F5F5F5] opacity-50 hover:opacity-100 transition-opacity"/>
            </div>
        </header>
    );
}