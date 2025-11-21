import { FaArrowUp } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

export default function ReturnBtn(){

    return(
        <HashLink to="/inicialPage#Banner" className="fixed bottom-3 right-3 w-12 h-12 bg-lime-400 rounded-full transition-[scale] delay-75 duration-200 hover:scale-110" smooth>
            <FaArrowUp className="absolute top-1/2 left-1/2 -translate-1/2 scale-200 text-white"/>
        </HashLink>
    )
}