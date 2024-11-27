import Link from "next/link";

export default function NavBar() {
    return (
       <header>
            <Link href="/" >
                <img src="/favicon.png" alt="Logo" />
            </Link>

            <nav>
                <Link href="/">Sobra mim</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contatos">contatos</Link>
            </nav>
       </header>
    )
}