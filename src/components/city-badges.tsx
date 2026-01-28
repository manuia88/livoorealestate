"use client";

import { motion } from "framer-motion";

const cities = [
    { name: "Cuauhtémoc", code: "CU", gradient: "from-[#2C3E2C] to-[#556B55]" },
    { name: "Miguel Hidalgo", code: "MH", gradient: "from-[#556B55] to-[#7D8F77]" },
    { name: "Benito Juárez", code: "BJ", gradient: "from-[#7D8F77] to-[#A8B5A1]" },
    { name: "Álvaro Obregón", code: "AO", gradient: "from-[#B8975A] to-[#C4A872]" },
    { name: "Cuajimalpa", code: "CJ", gradient: "from-[#A38449] to-[#B8975A]" }
];

export function CityBadges() {
    return (
        <section className="py-16 bg-[#F8F7F4] border-y border-[#E5E3DB]">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm font-semibold text-[#6B7B6B] uppercase tracking-widest mb-10">
                    Explora las mejores alcaldías de CDMX
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
                    {cities.map((city, index) => (
                        <motion.div
                            key={city.code}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity group cursor-pointer"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${city.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow border-2 border-[#B8975A]/20`}>
                                {city.code}
                            </div>
                            <span className="text-sm font-semibold text-[#2C3E2C]">{city.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
