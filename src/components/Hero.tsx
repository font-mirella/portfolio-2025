export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-blue-50 overflow-hidden">
      
      {/* CONTAINER PRINCIPAL (Relativo para segurar os itens flutuantes) */}
      <div className="relative w-full max-w-3xl mt-10 md:mt-20">
        
        <div className="relative mb-6 text-center md:text-left md:absolute md:-top-20 md:left-[-2.5rem] z-30">
        {/* MIRELLA (Flutuando no topo esquerdo)*/}
        {/* Mobile: Relative (ocupa espaço) e Centralizado */}
        {/* Desktop: Absolute (flutua) e na Esquerda */}
        <h1 className="text-5-1 md:text-7xl font-retro text-blue-700 leading-tight">
          Oi, eu sou a Mirella
        </h1>

        <p className="text-xl md:text-3xl font-sans text-white mt-2 md:mt-0.5 md:ml-5 font-medium drop-shadow-sm">
            e esse é o meu portfólio<span className="text-blue-700 font-bold">!</span> 
        </p>
        </div>

        {/* CARTÃO BRANCO */}
        <div className="relative bg-white/90 backdrop-blur-sm rounded-[1.75rem] p-6 pb-48 md:p-4 md:ml-20 mt-4 md:mt-9 min-h-[300px] flex flex-col justify-center z-10">
            
            {/* Texto dentro do cartão (Empurrado para a direita para não bater na câmera) */}
            {/* Mobile: Centralizado */} 
            {/* Desktop: Padding na esquerda para fugir da câmera */}
            <div className="text-center md:text-left md:pl-56 space-y-6">
              <p className="text-lg md:text-xl text-gray-700 font-semibold font-sans leading-relaxed">
                Estudante do 3° período de Ciência da Computação no <span className="text-blue-600 font-bold"> CIn - UFPE</span>. <br></br>
              </p>

              {/* BOTÕES */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-10 pt-2 justify-center md:justify-start">
                <a href="#projetos" className="
                  px-7 py-2 rounded-full font-bold text-white tracking-wide
                  bg-blue-700
                  shadow-[0_0_1px_rgba(59,130,246,0.6)]
                  hover:shadow-[0_0_5px_rgba(59,130,246,0.8)] hover:scale-105
                  transition-all duration-300
                ">
                  Projetos
                </a>
                <button className="
                  px-7 py-1 rounded-full font-bold text-blue-800
                  bg-transparent
                  border-2 border-blue-200
                  hover:bg-blue-50 hover:border-blue-400
                  hover:shadow-[0_0_1px_rgba(59,130,246,0.8)] hover:scale-105
                  transition-all duration-300
                ">
                  Contato
                </button>
              </div>
            </div>
        </div>

        {/* CÂMERA (Flutuando na esquerda inferior) */}
        {/* Mobile: Centralizada embaixo, menorzinha (w-48) */}
        {/* Desktop: Na esquerda, grandona, rotacionada */}
        <div className="absolute -bottom-10 translate-x-1/2 md:-bottom-6 md:-left-12 -left-1/2 w-48 md:translate-x-0 z-20 md:w-96 rotate-[-5deg] hover:rotate-0 transition duration-500">
          <img 
            src="/mirellacamera.png" 
            alt="Câmera"
            className="drop-shadow-2xl" 
          />
        </div>

      </div>
    </section>
  )
}