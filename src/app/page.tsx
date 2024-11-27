import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sobre mim | Yan Robert</title>
      </Head>
      <main>
        <h1>Hello Word</h1>
        <Link href="/contatos">Ir para a pagina contatos</Link>
      </main>
    </>
  )
}
