import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto( {
    subsets: ['latin'],
    weight: '500'
});

export default function NavBar() {
    return (
       <header className={`${roboto.className} bg-indigo-950 text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20`}>
            <Link href="/" >
                <Image src="/favicon.png" width={55} height={55} alt="Logo" />
            </Link>

            <nav className="hidden md:flex items-center gap-10 text-md">
                <Link href="/">Sobra mim</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contatos">contatos</Link>
            </nav>
       </header>
    )
}