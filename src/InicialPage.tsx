
export default function InicialPage(){


    return(
        <>
            <section id="Banner">
                <img src="src\assets\imgHero.svg" alt="Banner do site" 
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
            <section className="bg-white w-full h-140 flex items-center justify-center">
                <div className="w-4/6 h-11/12 bg-white shadow-2xl/30 flex justify-between rounded-2xl">
                    <div className="flex flex-col px-4">
                        <h2 className="font-bold text-lime-500 text-3xl pt-10 pb-6">Quem somos nós</h2>
                        <p className="text-xl w-80">O EcoServo tem como objetivo ser uma solução para o descarte irregular de resíduos.
                             Separando os de forma automatida pelo tipo do material.</p>
                    </div>
                    <div className="w-6/12 h-full bg-cover bg-lime-300 rounded-bl-4xl rounded-tr-4xl"/>
                </div>
            </section>
        </>
    )
}