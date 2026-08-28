export default function HeroSection() {
    return (
        <div className="relative h-[900px] w-full bg-black overflow-hidden flex items-end pb-20 px-8">
            <video
                src="/video/mitsubishi.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black z-10"></div>

            <div className="relative z-20 w-full px-6 mx-auto">
                <p className="text-red-600 font-bold tracking-[0.6em] uppercase mb-4 text-xs md:text-sm">
                    The Last Samurai
                </p>
                <h1 className="w-300 text-6xl md:text-[11rem] font-black leading-[0.8] uppercase text-white">
                    Lancer <span className="text-outline">Evo</span> <span className="text-red-600">X</span>
                </h1>
                <div className="flex items-center gap-6 mt-12">
                    <div className="bg-red-600 w-[4px] h-14 shrink-0"></div>
                    <p className="text-gray-400 text-lg md:text-xl font-sans leading-snug">
                        L'essence pure de la performance Japonaise.<br />
                        Turbo MIVEC et S-AWC
                    </p>
                </div>
            </div>
        </div>

    );
}