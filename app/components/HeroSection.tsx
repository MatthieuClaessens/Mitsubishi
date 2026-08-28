export default function HeroSection() {
    return (
        <div className="relative h-screen w-full bg-black overflow-hidden pb-20 flex items-center px-8">
            <video
                src="/video/mitsubishi.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,transparent,rgba(0,0,0,0.4),#000)] bg-[size:4px_4px,4px_4px,100%_100%] z-10 pointer-events-none"></div>
            <div className="relative z-20 w-full max-w-7xl ml-20">
                <p className="text-red-600 font-bold tracking-[0.6em] uppercase mb-4 text-xs md:text-sm">
                    The Last Samurai
                </p>
                <h1 className="text-6xl md:text-[11rem] font-black leading-[0.8] uppercase text-white">
                    Lancer <span className="text-outline">Evo</span> <span className="text-red-600">X</span>
                </h1>
                <div className="flex items-center gap-6 mt-12">
                    <div className="bg-red-600 w-[4px] h-14 shrink-0"></div>
                    <p className="text-gray-300 text-3xl font-sans leading-snug font-sans">
                        L'essence pure de la performance <span className="text-red-600 font-bold uppercase text-2xl">Japonaise</span>.<br />
                        Turbo MIVEC et S-AWC
                    </p>
                </div>
            </div>
        </div>

    );
}