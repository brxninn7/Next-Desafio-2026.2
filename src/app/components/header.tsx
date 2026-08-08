import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart} from "lucide-react";

export function Header() {
    return (
        <header className="flex justify-between">
            <div id="left-side" className="flex">
                <Image src="/logo.png" alt="" width={40} height={40}/>

                <div id="links" className="flex">
                    <Link href="/">
                        Inicio
                    </Link>

                    <Link href="/jogos">
                        Jogos
                    </Link>

                    <Link href="/contato">
                        Contato
                    </Link>
                </div>
            </div>

            <div id="right-side" className="flex">
                <div className="flex">
                    <Search />

                    <Link href="/carrinho">
                        <ShoppingCart />
                    </Link>

                    
                </div>
            </div>
        </header>
    );
}