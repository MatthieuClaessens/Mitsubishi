export default function IntroSection() {
    return (
        <section className="w-full bg-black py-28 px-6 font-sans">
            <div className="max-w-5xl mx-auto text-center">
                <h3 className="text-white font-black italic uppercase text-3xl md:text-5xl leading-tight">
                    Aujourd'hui encore, les <span className="text-red-600">Mitsubishi Lancer Evolution</span>
                </h3>
                <hr className="bg-red-600 w-20 h-[4px] mt-8 mx-auto border-none" />
                <p className="text-gray-400 mt-8 text-xl md:text-2xl font-light leading-relaxed">
                    Retirées de la gamme Mitsubishi en&nbsp;
                    <span className="text-white underline decoration-red-600 font-bold">2015</span>, elles continuent de captiver l'attention des passionnées d'automobile du monde entier.
                </p>
            </div>
        </section>
    );
}