export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-blue-50 overflow-hidden">
      
      {/* CONTAINER PRINCIPAL (Relativo para segurar os itens flutuantes) */}
      <div className="relative w-full max-w-3xl mt-10">
        
        <div className="absolute -top-20 left-4 md:-left-10 z-20 text-left">
        {/* MIRELLA (Flutuando no topo esquerdo) */}
        <h1 className="text-6-1 md:text-7xl font-retro text-blue-700 z-20">
          Oi, eu sou a Mirella
        </h1>

        <p className="text-xl md:text-3xl font-sans text-white mt-0.5 ml-5 font-medium drop-shadow-sm">
            e esse é o meu portfólio<span className="text-blue-700 font-bold">!</span> 
        </p>
        </div>

        {/* CARTÃO BRANCO */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[1.75rem] p-2 md:p-12 ml-0 md:ml-20 mt-9 min-h-[300px] flex flex-col justify-center">
            
            {/* Texto dentro do cartão (Empurrado para a direita para não bater na câmera) */}
            <div className="md:pl-56 text-left space-y-4">
              <p className="text-xl text-gray-700 font-semibold font-sans leading-relaxed">
                Estudante do 3° período de Ciência da Computação no <span className="text-blue-600 font-bold"> CIn - UFPE</span>. <br></br>
              </p>

              {/* BOTÕES */}
              <div className="flex gap-10 pt-4">
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
        <div className="absolute -bottom-6 -left-4 md:-left-12 z-10 w-64 md:w-96 rotate-[-5deg] hover:rotate-0 transition duration-500">
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