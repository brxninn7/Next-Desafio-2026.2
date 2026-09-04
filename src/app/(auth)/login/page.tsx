import Link from "next/link";

export default function Login(){
    return(
        <main>
            <div id="box-login">
                <div id="left-side" className="flex flex-col gap-5">
                    <header>
                        <h1 className="font-space-grotesk text-white text-5xl">
                            Entrar
                        </h1>

                        <p className="font-poppins text-white/50">Use seu e-mail e senha para continuar.</p>
                    </header>

                    <div id="input-login" className="flex flex-col gap-3 w-125">
                        <div id="email-input" className="flex flex-col">
                            <h3 className="text-white font-space-grotesk">EMAIL</h3>
                            <input type="email" placeholder="email@exemplo.com" className="text-white/50 font-poppins text-sm bg-[#131926] border border-[#262E3D] rounded-sm p-2 w-125 focus:border-[#5400AE] focus:outline-none focus:ring-0 focus:shadow-none"/>
                        </div>

                        <div id="password-input" className="flex flex-col">
                            <h3 className="text-white font-space-grotesk">SENHA</h3>
                            <input type="password" placeholder="Digite sua senha..." className="text-white/50 font-poppins text-sm bg-[#131926] border border-[#262E3D] rounded-sm p-2 w-125 focus:border-[#5400AE] focus:outline-none focus:ring-0 focus:shadow-none"/>
                        </div>

                        <div id="mais-opcoes" className="flex justify-between">
                            <div className="flex gap-2 items-center justify-center">
                                <input type="checkbox" name="Lembrar de mim" id="" className="accent-[#5400AE] cursor-pointer"/>
                                <p className="font-poppins text-white text-sm">Lembrar de mim</p>
                            </div>

                            <div id="esqueci-minha-senha" className="flex items-center justify-center">
                                <Link href="/forgot-password" className="text-[#5400AE] font-poppins underline text-sm">
                                    Esqueci minha senha
                                </Link>
                            </div> 
                        </div>

                        <button className="bg-[#5400AE] font-poppins text-white p-2 rounded-sm hover:bg-[#45008f] transition-colors cursor-pointer">
                            Entrar
                        </button>

                        <div id="cadastro" className="flex font-poppins gap-2 items-center justify-center">
                            <p className="text-white">Não possui uma conta?</p>
                            <span className="text-[#5400AE] cursor-pointer">Criar conta</span>
                        </div>
                    </div>
                </div>

                <div id="right-side">
                    
                </div>

            </div>
        </main>
    );
}