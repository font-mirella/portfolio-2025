interface BrowserWindowProps {
    image: string;
    title: string;
    url?: string; // link da barra de endereço
    className?: string;
}

export function BrowserWindow({ image, title, url = "www.meuprojeto.com", className = "" }: BrowserWindowProps) {
    return (
        <div className={`flex flex-col rounded-xl overflow-hidden border border-gray-400 shadow-2xl bg-white ${className}`}>

            <div className="bg-gradient-to-b from-[#e8e8e8 to-[#d0d0d0] px-3 py-2 border-gray-400 flex items-center gap-4">

                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E] shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28C93F] border border-[#1AAB29] shadow-sm"></div>
                </div>

                <div className="flex-1 bg-white rounded-md border border-gray-300 px-3 py-0.5 text-xs text-gray-500 shadow-inner font-mono truncate">
                    {url}
                </div>
            </div>

            <div className="relative group bg-gray-100 h-full w-full">
            <img 
            src={image}
            alt={title}
            className="w-full h-auto object-cover block"/>
            </div>
        </div>
    );
}