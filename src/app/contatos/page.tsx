import Link from "next/link";

export const metadata = {
    title: "Contatos | Yan Robert",
    description: "Entre em contato com Yan Robert.",
};

export default function Contatos() {
    return (
      <main>
        <h1>Contatos</h1>
        <Link href="/">Ir para Página Inicial</Link>
      </main>
    );
  }
  