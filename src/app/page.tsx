import AboutMe from "./components/Home/aboutMe";
import Head from "next/head";


export default function Home() {
  return (
  
      <>
        <Head >
          <meta name="description" content="Sou um desenvolvedor Front-end apaixonado por criar interfaces e ajudar outros devs!" />
        </Head>
        <div>
          <AboutMe/>
        </div>
      </>
  )
}
