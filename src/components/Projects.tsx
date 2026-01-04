import { useState } from 'react';
import { BrowserWindow } from './BrowserWindow';

const projects = [

    {
    title: "Lumin",
    description: "Projeto para a disciplina de Desenvolvimento de Software, cuja proposta era simular uma Startup.\n\n Fui uma das responsáveis pelo Design + Front-End e parte da ideação.\n\n Primeiro contato com Banco de Dados e API.",
    techs: ["HTML, CSS e JavaScript", "Figma", "API"],
    image: "/Lumin.png", 
    repoLink: "https://github.com/Devs-Lumin/API-Desenvolvimento-de-Software",
    liveLink: "https://lumin-desenvolvimento-de-software.vercel.app/index.html",
    url: "lumin.app.br"
    },
    {
    title: "Jornada Para O Carnaval",
    description: "Projeto para finalizar a disciplina de Introdução à Programação.\n\n Primeiro contato com Programação Orientada a Objetos",
    techs: ["PYGAME", "Python", "POO"],
    image: "/Jornada Para o Carnaval.png",
    repoLink: "https://github.com/AmandaTrinity/ProjetoIP",
    liveLink: "",
    url: "jornada.game"
    }
];

export function Projects() {

    const [selectedProject, setSelectedProject] = useState<number | null>(null); // clique
    const [hoveredProject, setHoveredProject] = useState<number | null>(null); // mouse em cima

    const activeProject = selectedProject != null ? projects[selectedProject] : null;
    const getCardStyle = (index: number) => {
        if (hoveredProject === index) {
            return "scale-110 z-50 shadow-2xl brightness-110"; // estado em foco
        }
        if (hoveredProject !== null) {
            return "scale-100 opacity-80 blur-[2px] grayscale[50%]"; // desfocado
        }
        else return "scale-100 hover:scale-105"; // natural
    };

    return (
    <section id="projetos" className="relative w-full min-h-screen flex items-center justify-center flex-col p-4 bg-gradient-to-b from-blue-300 to-blue-200 overflow-hidden py-16">
      {/* TÍTULO */}
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-16 text-center font-sans">
        Projetos
        </h2>

    <div className="relative max-w-6xl mx-auto h-[600px] md:h-[600px]">
        <div className={`absolute top-10 left-4 md:left-10 w-[300px] md:w-[450px] transition-all duration-500 ease-out cursor-pointer ${getCardStyle(1)}`}
            style={{ transform: hoveredProject === 1 ? 'rotate(0deg) scale(1.1)' : 'rotate(-3deg)' }} // remove rotação quando foca pra ficar reto
                    
                // mouse
                onMouseEnter={() => setHoveredProject(1)}
                onMouseLeave={() => setHoveredProject(null)}
                    
                // clique
                onClick={() => setSelectedProject(1)}
                >
        
        <img src="/Alfinete.png" className="absolute -top-20 -right-8 w-24 z-50 drop-shadow-lg"/>

        <BrowserWindow 
            image={projects[1].image}
            title={projects[1].title}
            url={projects[1].url}
        />
        </div>

        {/* --- ITEM 2: LUMIN (Direita + Estrela) --- */}
        <div className={`absolute bottom-10 right-4 md:right-10 w-[300px] md:w-[450px] md:bottom-20 transition-all duration-500 ease-out cursor-pointer ${getCardStyle(0)}`}
            style={{ transform: hoveredProject === 0 ? 'rotate(0deg) scale(1.1)' : 'rotate(3deg)' }} // remove rotação quando foca pra ficar reto
                    
                // mouse
                onMouseEnter={() => setHoveredProject(0)}
                onMouseLeave={() => setHoveredProject(null)}
                    
                // clique
                onClick={() => setSelectedProject(0)}
                >
        
        <img src="/Estrela para direita.png" className="absolute -bottom-10 -left-10 w-20 z-50 drop-shadow-lg pointer-events-none"/>

        <BrowserWindow 
            image={projects[0].image}
            title={projects[0].title}
            url={projects[0].url}
        />
        </div>

    </div>

    {activeProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-900/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className='bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden relative animate-in zoom-in-95 duration-300 border-2 border-blue-200 flex flex-col max-h-[90vh]'>
                <div className="bg-gradient-to-b from-[#e8e8e8] to-[#d0d0d0] px-4 py-2 border-b border-gray-300 flex items-center justify-between shrink-0">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#28C93F] border border-[#1AAB29]"></div>
                    </div>
                    <div className="text-xs text-gray-500 font-medium select-none font-mono">
                    {activeProject.title}
                    </div>
                <button onClick={() => setSelectedProject(null)}
                className='text-gray-500 hover:text-red-500 transition-colors font-bold text-xl leading-none px-2'>
                    ✕
                </button>
            </div>

            <div className='flex flex-col md:flex-row overflow-y-auto p-6 gap-6'>

            {/* Lado Esquerdo: Imagem Grande */}
                <div className="w-full md:w-1/2 flex items-start justify-center">
                    <img 
                        src={activeProject.image} 
                        alt={activeProject.title} 
                        className="rounded-lg shadow-md w-full h-auto object-cover border-2 border-blue-200"/>
                    </div>

            {/* Lado Direito: Texto e Botões */}
                <div className="w-full md:w-1/2 flex flex-col space-y-6">
                    <div>
                        <h3 className="text-3xl font-bold text-blue-900 font-brand mb-2">
                            {activeProject.title}
                        </h3>
                        <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
                    </div>

                <p className='text-blue-800/80 leading-relaxed text-base md:text-lg whitespace-pre-line'>
                    {activeProject.description}
                </p>

                {/* Tags */}

                <div className='flex flex-wrap gap-2'>
                    {activeProject.techs.map((tech) => (
                        <span key={tech} className='px-3 py-1 bg-blue-100/80 text-blue-700 text-xs font-bold rounded-full border border-blue-200 uppercase shadow-sm'>
                            {tech}
                        </span>
                    ))}
                </div>

                <div className='flex gap-4 pt-4 mt-auto'>
                    <a href={activeProject.repoLink} target="_blank" className='flex-1 py-3 bg-blue-800 hover:bg-black text-white text-center font-bold rounded-xl shadow-md hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2'>
                        {/* Ícone do GitHub (SVG) */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        Ver Código
                    </a>

                    {activeProject.liveLink && (
                        <a href={activeProject.liveLink} target='_blank' className='flex-1 py-3 bg-blue-700 text-white text-center font-bold rounded-xl shadow-md hover:scale-105 transition-transform active:scale-95 duration-300 flex items-center justify-center gap-2'>
                            Acessar Site
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
            
        <div className='absolute inset-0 -z-10' onClick={() => setSelectedProject(null)}></div>
        </div>
        )}
    </section>
    );
}