export default function Header(){

  return(
    <header className="bg-green-400 h-12 w-full text-white">
      <div className="flex w-full h-full items-center justify-between pl-3 pr-3">
        <h2 className="text-2xl">EcoServo</h2>
        <ul className="flex gap-5">
          <li className="hover:scale-110 transition[scale] duration-300 delay-75"><a href="http://" target="_blank" rel="noopener noreferrer">Resumo</a></li>
          <li className="hover:scale-110 transition[scale] duration-300 delay-75"><a href="http://" target="_blank" rel="noopener noreferrer">Protótipo</a></li>
          <li className="hover:scale-110 transition[scale] duration-300 delay-75"><a href="http://" target="_blank" rel="noopener noreferrer">Galeria</a></li>
          <li className="hover:scale-110 transition[scale] duration-300 delay-75"><a href="http://" target="_blank" rel="noopener noreferrer">Contatos</a></li>
        </ul>
      </div>
    </header>
  )
}