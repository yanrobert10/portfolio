import Link from "next/link";
import { Roboto } from "next/font/google";

export const metadata = {
    title: "404 | Yan Robert",
    description: "Rota não encontrada.",
};

const roboto = Roboto( {
    subsets: ['latin'],
    weight: '500'
});

export default function NotFound() {
 return (
    <div className=" flex flex-col items-center text-center mt-12 md:mt-24 gap-8 md:gap-4 px-6 md:px-32 ">
        <h1 className="text-5xl sm:text-7xl font-bold">404</h1>
        <p className="flex  flex-col gap-8 md:gap-4 md:text-xl">
            <span>

                Oops, não conseguimos encontrar essa página!

            </span>

            <samp>

                Clique no botão a baixo para ser redirecionado à Página Inicial

            </samp>
        </p>
        <Link className={`${roboto.className} w-fit p-4 bg-y-blue-500 rounded-xl text-black font-bold mt-5 md:mt-12 md:text-xl`} href="/">Ir para Página inicial</Link>
    </div>
 )
}