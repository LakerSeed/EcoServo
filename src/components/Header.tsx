import { HashLink } from 'react-router-hash-link';

export default function Header(){

  return(
      <header id="Header" className="fixed border-b-2 bg-white border-b-green-500 h-16 w-full">
        <nav className="flex w-full h-full items-center justify-between px-6">
          <h2 className="text-2xl">EcoServo</h2>
          <ul className="flex gap-5">
            <li className="hover:scale-105 transition[scale] duration-300 delay-75"><HashLink to="/inicialPage#Projeto" smooth>Projeto</HashLink></li>
            <li className="hover:scale-105 transition[scale] duration-300 delay-75"><HashLink to="/inicialPage#Equipe" smooth>Equipe</HashLink></li>
            <li className="hover:scale-105 transition[scale] duration-300 delay-75"><HashLink to="/inicialPage#Etapas" smooth>Etapas</HashLink></li>
            <li className="hover:scale-105 transition[scale] duration-300 delay-75"><HashLink to="/Footer#Footer" smooth>Contatos</HashLink></li>
          </ul>
        </nav>
      </header>
  )
}