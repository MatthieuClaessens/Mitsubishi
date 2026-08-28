import Image from "next/image";
import Link from "next/link";
import Mitsubishi from "@/public/image/mitsubishi.webp";

export default function NavBar() {
    return (
<nav className="h-16 w-full bg-black flex items-center px-8 font-sans border-b border-zinc-800 z-30 fixed">
                <Image src={Mitsubishi} alt="Mitsubishi logo" priority className="w-4.5 mx-3"/>
            <p className="font-bold text-white font-display uppercase pointer-events-none">Lancer <span className="text-red-600">Evo</span></p>
            <div className="flex justify-center mx-auto gap-6 uppercase font-bold text-xs tracking-[3px]">
                <Link href="/" className="text-white">Accueil</Link>
                <Link href="/" className="text-white">Specs</Link>
                <Link href="/" className="text-white">L'Héritage</Link>
            </div>
            <Link href="/configurer" className="text-white bg-red-600 px-5 py-2 uppercase font-sans font-bold text-xs tracking-[3px] hover:bg-red-700 transition-colors">Configurer</Link>            
        </nav>
    )
}