import Link from "next/link";

export const metadata = {
    title: "Contatos | Yan Robert",
    description: "Entre em contato com Yan Robert.",
};

export default function Contatos() {
    return (
     
        <div>
            <h1>Contatos</h1>
            <ul>
                <li>
                    <span>E-mail</span>
                    <div>
                        <a href="mailto:yan39robert@gmail.com">yan39robert@gmail.com</a>
                    </div>
                </li>
                <li>
                    <span>LinkedIn</span>
                    <div>
                        <a href="https://www.linkedin.com/in/yan-robert-30a222223/">https://www.linkedin.com/in/yan-robert-30a222223/</a>
                    </div>
                </li>
                <li>
                    <span>GitHub</span>
                    <div>
                        <a href="https://github.com/yanrobert10">https://github.com/yanrobert10</a>
                    </div>
                </li>
                
            </ul>
            
        </div>
     
    );
  }
  