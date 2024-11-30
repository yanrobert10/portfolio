

export const metadata = {
    title: "Contatos | Yan Robert",
    description: "Entre em contato com Yan Robert.",
};

export default function Contatos() {
    return (
     
        <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
            <h1 className="text-5xl md:text-7xl font-bold text-center ">Contatos</h1>
            <ul className="table mx-auto space-y-6 md:space-y-8">
                <li className="md:text-xl">
                    <span className="font-bold">E-mail</span>
                    <div className="flex gap-1 md:gap-3 items-center">
                        <a 
                          href="mailto:yan39robert@gmail.com" 
                          className="text-sm md:text-lg text-slate-300 underline truncate"
                        >

                          yan39robert@gmail.com

                        </a>
                    </div>
                </li>
                <li className="md:text-xl">
                    <span className="font-bold">LinkedIn</span>
                    <div className="flex gap-1 md:gap-3 items-center">
                        <a  
                            href="https://www.linkedin.com/in/yan-robert-30a222223/"
                            className="text-sm md:text-lg text-slate-300 underline truncate"
                        >

                            https://www.linkedin.com/in/yan-robert-30a222223/

                        </a>
                    </div>
                </li>
                <li className="md:text-xl">
                    <span className="font-bold">GitHub</span>
                    <div className="flex gap-1 md:gap-3 items-center">
                        <a 
                            href="https://github.com/yanrobert10"
                            className="text-sm md:text-lg text-slate-300 underline truncate"
                        >

                            https://github.com/yanrobert10

                        </a>
                    </div>
                </li>
                
            </ul>
            
        </div>
     
    );
  }
  