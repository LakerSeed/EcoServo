import { useState } from "react"
import TeamIcon from "./components/TeamIcon"

export default function InicialPage(){


    return(
        <div>
            <section id="Banner" className="pt-16">
                <img src="src/assets/imgHero.svg" alt="Banner do site" 
                className="w-full"/>
            </section>
            <section id="Projeto" className="bg-white w-full h-140 my-20 flex items-center justify-center">
                <div className="w-4/6 h-11/12 bg-green-50 shadow-2xl/30 flex justify-between rounded-2xl">
                    <div className="flex flex-col px-8">
                        <h2 className="font-bold text-lime-500 text-3xl pt-10 pb-6">SOBRE O PROJETO</h2>
                        <p className="text-xl w-80">O EcoServo tem como objetivo ser uma solução para o descarte irregular de resíduos.
                             O sistema se concentra na coleta e classificação de materiais recicláveis em lixeiras públicas, promovendo a sustentabilidade e a eficiência na gestão ambiental.</p>
                    </div>
                    <div className="w-4/12 h-full rounded-r-2xl bg-cover bg-[url(src/assets/imgPrincipal.svg)]"/>
                </div>
            </section>
            <section id="Equipe" className="bg-white w-full h-140 mb-20 flex flex-col items-center justify-center">
                <h2 className="font-bold border-b-2 text-center w-100 text-lime-500 text-3xl pt-10 pb-2 mb-6">Quem somos nós</h2>
                <div className="flex gap-12 mx-3">
                    <TeamIcon img={"src/assets/ImgsTeam/Beatriz.jpg"} Name={"Beatriz de Carvalho"} Text={"Placeholder"}/>
                    <TeamIcon img={"src/assets/ImgsTeam/Everson.jpg"} Name={"Everson Kauã"} Text={"Placeholder"}/>
                    <TeamIcon img={"src/assets/ImgsTeam/Gabi.jpg"} Name={"Gabriela Melo Silva"} Text={"Placeholder"}/>
                    <TeamIcon img={"src/assets/ImgsTeam/Duda.jpg"} Name={"Maria Eduarda"} Text={"Placeholder"}/>
                    <TeamIcon img={"src/assets/ImgsTeam/Gabi.jpg"} Name={"Maria Eduarda"} Text={"Placeholder"}/>
                    <TeamIcon img={"src/assets/ImgsTeam/Thauane.jpg"} Name={"Gabriela Melo Silva"} Text={"Placeholder"}/>
                </div>
            </section>
            <section className="bg-lime-100 flex flex-col pb-20 gap-10 w-full h-fit items-center">
                <h2 className="font-bold text-lime-600 border-b-2 w-100 text-center text-3xl pt-10 pb-6">Planejamento</h2>
                <div className="w-1/2 h-11/12 bg-white shadow-2xl/30 flex justify-between rounded-2xl hover:-translate-y-2 duration-150 delay-75 transition-[translate]">
                    <div className="flex flex-col px-4">
                        <h3 className="font-bold text-lime-500 text-3xl pt-10 pb-6">Planejamento</h3>
                        <p className="text-xl w-80">Desenhos esquemáticos da estrutura do projeto.</p>
                    </div>
                    <img src="src/assets/planejamento/desenho.png" className="w-6/12 p-3 h-full bg-cover"/>
                </div>
                <div className="w-1/2 h-11/12 bg-white shadow-2xl/30 flex justify-between rounded-2xl hover:-translate-y-2 duration-150 delay-75 transition-[translate]">
                    <div className="flex flex-col px-4">
                        <h2 className="font-bold text-lime-500 text-3xl pt-10 pb-6">Planejamento</h2>
                        <p className="text-xl w-80">Planejamento do circuitp elétrico do Projeto.</p>
                    </div>
                    <img src="src/assets/planejamento/eletronica.png" className="w-6/12 p-3 h-full bg-cover"/>
                </div>
            </section>
        </div>
    )
}