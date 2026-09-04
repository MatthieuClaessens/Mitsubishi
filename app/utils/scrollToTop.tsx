"use client";

import { ArrowUp } from "lucide-react";

export default function ScrollToTopBtn() {
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <button 
            onClick={() => scrollToTop()}
            aria-label="Retour en haut"
            className="fixed bottom-8 right-8 z-40 bg-zinc-900 border border-red-600/50 text-white p-3 rounded-lg shadow-2xl hover:bg-red-600 transition-colors cursor-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
            <ArrowUp className="w-5 h-5" aria-hidden="true" />
        </button>
    );
}