import Link from "next/link";

export const metadata = {
    title: "404 | Yan Robert",
    description: "Rota não encontrada.",
};

export default function NotFound() {
 return (
    <div>
        <h1>404</h1>
        <div>
            <p>Oops, não conseguimos encontrar essa página!</p>
            <samp>Clique no botão a baixo para ser redirecionado à Página Inicial</samp>
        </div>
        <Link href="/">Ir para Página inicial</Link>
    </div>
 )
}