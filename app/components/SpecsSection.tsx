import { FaOilCan } from "react-icons/fa";
import { Gauge } from "lucide-react";
import { FaCogs } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";

import Image from "next/image";
import Mitsubishi from "@/public/image/Evoview1.png";

export default function SpecsSection() {
    return (
        <div className="h-screen bg-[#050505] relative overflow-hidden px-8">
            <div
                id="jp-bg"
                className="absolute right-5 translate-y-1/2 text-[25rem] font-black text-white/[0.02] select-none pointer-events-none">
                三菱
            </div>
            <div className="max-w-7xl pt-20 mx-auto px-6 lg:px-12">
                <h2 className="font-dots text-5xl text-red-600 uppercase tracking-tighter font-display">
                    Ingénierie Brute
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-16 items-center">
                    <div className="grid grid-cols-2 gap-6">
                        
                        <div className="group h-60 bg-[#0c0c0c] p-8 flex flex-col items-center justify-center text-center">
                            <div className="h-12 flex items-center justify-center">
                                <FaOilCan className="text-red-600 text-4xl group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-white text-xl font-bold mt-4 font-sans tracking-[0.1em]">2.0L MIVEC</p>
                            <div className="w-6 h-[1px] bg-red-600/50 my-1.5" />
                            <p className="text-gray-400">Turbocharged I4 295CV</p>
                        </div>

                        <div className="group h-60 bg-[#0c0c0c] p-8 flex flex-col items-center justify-center text-center">
                            <div className="h-12 flex items-center justify-center">
                                <Gauge className="text-red-600 h-10 w-10 group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-white text-xl font-bold mt-4 font-sans tracking-[0.1em]">5.4 Secondes</p>
                            <div className="w-6 h-[1px] bg-red-600/50 my-1.5" />
                            <p className="text-gray-400 uppercase">0 - 100 km/h</p>
                        </div>

                        <div className="group h-60 bg-[#0c0c0c] p-8 flex flex-col items-center justify-center text-center">
                            <div className="h-12 flex items-center justify-center">
                                <FaCogs className="text-red-600 text-4xl group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-white text-lg font-bold mt-3 font-sans tracking-[0.1em]">S-AWC</p>
                            <p className="text-gray-400 uppercase text-xs">Transmission Intégrale</p>
                            <div className="w-6 h-[1px] bg-red-600/50 my-1.5" />
                            <p className="text-gray-500 text-[8px] tracking-[0.15em] font-light uppercase">
                                Super All-Wheel Control
                            </p>
                        </div>
                        <div className="group h-60 bg-[#0c0c0c] p-8 flex flex-col items-center justify-center text-center">
                            <div className="h-12 flex items-center justify-center">
                                <GiGearStickPattern className="text-red-600 text-4xl group-hover:scale-110 transition-transform" />
                            </div>
                            <p className="text-white text-xl font-bold mt-4 font-sans tracking-[0.1em]">Boite manuelle</p>
                            <div className="w-6 h-[1px] bg-red-600/50 my-1.5" />
                            <p className="text-gray-400 uppercase">5 Rapports</p>
                        </div>

                    </div>
                    
                    <div className="relative flex items-center justify-center">
                        <div className="absolute w-[400px] h-[400px] bg-red-600/30 blur-[200px] rounded-full" />
                        <Image
                            src={Mitsubishi}
                            width={800}
                            height={600}
                            alt="Mitsubishi Evolution"
                            className="w-full h-auto rounded-lg relative z-10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}