import AboutMe from "./components/Home/aboutMe";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Sobre Mim',
  description: 'Um desenvolvedor Front-end apaixonado por criar interfaces e ajudar outros devs!',
};

export default function Home() {
  return (
  
      <>
        <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28 bg-indigo-900">
          <AboutMe/>
        </div>
      </>
  )
}
