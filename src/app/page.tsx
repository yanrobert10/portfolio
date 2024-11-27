import AboutMe from "./components/Home/aboutMe";
import Head from "next/head";


export default function Home() {
  return (
  
      <>
        <Head >
          <meta name="description" content="Sou um desenvolvedor Front-end apaixonado por criar interfaces e ajudar outros devs!" />
        </Head>
        <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28 bg-indigo-900">
          <AboutMe/>
        </div>
      </>
  )
}
