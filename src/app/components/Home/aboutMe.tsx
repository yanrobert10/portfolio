import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
    return (
        <main>
            <div>
                <h1>Prazer, sou &nbsp;</h1>
                <span>Yan Robert</span>
            </div>

            <div>
                <h2>Sou um desenvolvedor Front-end apaixonado por criar interfaces e ajudar outros devs!</h2>
                <Link href="/contatos">Converse comigo!</Link>
            </div>

            <ul>
                <li style={{background:'#2F74C0', color:'#FFFFFF'}}>typescript</li>
                <li style={{background:'#6BDDFA', color:'#000000'}}>ReactJs</li>
                <li style={{background:'#EFD81D', color:'#000000'}}>JavaScript</li>
                <li style={{background:'#000000', color:'#FFFFFF'}}>NextJs</li>
            </ul>

            <div>
                <Image 
                    src="https://avatars.githubusercontent.com/u/34972426?v=4"
                    width={500}
                    height={500}
                    unoptimized
                    alt="Foto de perfil do Yan Robert" 
                />
                <p>
                    <span>1+</span>
                    <br />
                    anos de experiência
                </p>

            </div>

        </main>
    )
}