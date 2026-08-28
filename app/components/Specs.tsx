import { FaOilCan } from "react-icons/fa";
import { Gauge } from "lucide-react";

export default function Specs() {
    return (
        <div className="h-screen bg-[#050505] relative overflow-hidden px-8">
            <div 
                id="jp-bg"
                className="absolute right-5 translate-y-1/2 text-[25rem] font-black text-white/[0.02] select-none pointer-events-none"
            >
                三菱
            </div>
            
            <div className="max-w-7xl mx-auto pt-20">
                <h2 className="font-dots text-5xl text-red-600 uppercase tracking-tighter font-display">
                    Ingénierie Brute
                </h2>
                
                <div className="grid grid-cols-2 gap-6 mt-16">
                    <div className="group h-60 w-80 bg-[#0c0c0c] pl-15">
                        <FaOilCan className="text-red-600 text-5xl mb-6 group-hover:scale-110 transition-transform mt-10" />
                        <p className="text-white text-xl font-bold mt-4 font-sans tracking-[0.1em]">2.0L MIVEC</p>
                        <p className="text-gray-400">Turbocharged I4 | 295CV </p>
                    </div>

                    <div className="group h-60 w-80 bg-[#0c0c0c] pl-15">
                        <Gauge className="text-red-600 w-10 h-10 mb-6 group-hover:scale-110 transition-transform mt-10" />
                        <p className="text-white text-xl font-bold mt-4 font-sans tracking-[0.1em]">5.4 Secondes</p>
                        <p className="text-gray-400 uppercase">0 - 100 km/h </p>
                    </div>

                    <div className="group h-60 w-80 bg-[#0c0c0c] pl-15">
                        <Gauge className="text-red-600 w-10 h-10 mb-6 group-hover:scale-110 transition-transform mt-10" />
                        <p className="text-white text-xl font-bold mt-4 font-sans tracking-[0.1em]">S-AWC</p>
                        <p className="text-gray-400 uppercase">Transmission Intégrale</p>
                    </div>

                    <div className="group h-60 w-80 bg-[#0c0c0c] pl-15">
                        <Gauge className="text-red-600 w-10 h-10 mb-6 group-hover:scale-110 transition-transform mt-10" />
                        <p className="text-white text-xl font-bold mt-4 font-sans tracking-[0.1em]">Brembo</p>
                        <p className="text-gray-400 uppercase">Freinage Sport</p>
                    </div>

                </div>
            </div>
        </div>
    );
}