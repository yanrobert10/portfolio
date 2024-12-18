import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto( {
    subsets: ['latin'],
    weight: '400'
});

export default function AboutMe() {
    return (
        <main className="
            flex 
            xl:h-screen
            flex-wrap-reverse 
            justify-center
            items-center 
            gap-10 
            md:gap-32 
            py-8 
            text-lg 
            text-center
            xl:text-left
            xl:flex-nowrap 
            xl:justify-between"
        >
            <div className="text-white flex flex-col items-center gap-4 w-full xl:w-120">
                <div>
                    <h1 className="text-3xl sm:text-7xl xl:leading-[5rem]">
                        Prazer, sou&nbsp;
                        <strong className="font-bold">Yan Robert</strong>
                    </h1>
                </div>

                <div className="mb-12">
                    <h2 className={`${roboto.className} mb-12`}>Sou um desenvolvedor Front-end apaixonado por criar interfaces e ajudar outros devs!</h2>
                    <Link href="/contatos" className="p-3 bg-y-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80">
                        Converse comigo!
                    </Link>
                </div>

                <ul className="flex  flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-center">
                    <li style={{background:'#2F74C0', color:'#FFFFFF'}} className="w-fit p-2 rounded-md">typescript</li>
                    <li style={{background:'#6BDDFA', color:'#000000'}} className="w-fit p-2 rounded-md">ReactJs</li>
                    <li style={{background:'#EFD81D', color:'#000000'}} className="w-fit p-2 rounded-md">JavaScript</li>
                    <li style={{background:'#000000', color:'#FFFFFF'}} className="w-fit p-2 rounded-md">NextJs</li>
                </ul>
            </div>

            <div className="relative">
                <Image 
                    src="https://avatars.githubusercontent.com/u/34972426?v=4"
                    width={500}
                    height={500}
                    unoptimized
                    alt="Foto de perfil do Yan Robert" 
                    className="rounded-full"
                />
                <p className="p-4 w-fit text-base leading-tight bg-y-blue-500 rounded-xl text-black absolute -bottom-[0.75rem]">
                    <span className="text-4xl font-bold">1+</span>
                    <br />
                    anos de experiência
                </p>

            </div>

        </main>
    )
}