import { useState, type ReactNode } from "react"

export default function TeamIcon({Name,Text,img}){

    const [isOpen,setOpen] = useState(false)
    return(
        <div className=" flex flex-col items-center h-80 w-40 rounded-full my-8" onMouseLeave={()=>setOpen(false)} onMouseEnter={()=>setOpen(true)}>
            <img src={img} className="rounded-full w-40 h-40 mb-5" alt="" />
            <div className="flex flex-col items-center bg-lime-500 w-50 h-fit rounded-2xl px-3">
                <h3 className="text-white">{Name}</h3>
                <p className="text-white">{Text}</p>
            </div>
        
        </div>
        
    )
}