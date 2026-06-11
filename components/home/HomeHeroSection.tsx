"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const images = ["/homepage2.png"];

const HomeHeroSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return(
        <>
        <section className="relative w-full h-[70vh] min-h-[650px] bg-black overflow-hidden">
            {/* Background Image Area */}
            <div className="absolute inset-0 w-full h-full">
                <Image 
                    src={images[0]}
                    alt="Συνεργείο μοτοσυκλετών Παγιαυλάς - Εξειδικευμένο Service και ανταλλακτικά"
                    fill
                    priority
                    className="object-scale-down object-center md:object-center"
                />
                {/* Improved Gradient Overlay: Darker on the left for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            </div>

            {/* Content Area */}
            <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 md:px-12">
                <div className="max-w-xl" data-aos="fade-right">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-white uppercase tracking-tighter leading-none mb-6">
                        Service με <span className="text-red-600">αξιοπιστια</span> <br />
                        Performance <span className="text-red-600">χωρις ορια</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed border-l-4 border-red-600 pl-4">
                        Εξειδικευμένο συνεργείο μοτοσυκλετών με σύγχρονο εξοπλισμό και γνήσια ανταλλακτικά για κάθε τύπο μηχανής.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link href="/services" className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-black rounded-sm uppercase italic transition-all shadow-2xl shadow-red-600/40 text-center">
                            ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ 
                        </Link>
                        <Link href="/parts" className="px-10 py-5 bg-transparent hover:bg-white hover:text-black text-white font-black rounded-sm uppercase italic transition-all border-2 border-white text-center">
                            ΑΝΤΑΛΛΑΚΤΙΚΑ
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
};

export default HomeHeroSection;