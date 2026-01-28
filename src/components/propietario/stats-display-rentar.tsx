"use client";

import { motion } from "framer-motion";

export function StatsDisplayRentar() {
    const stats = [
        { value: "0%", label: "Morosidad", sub: "Con Nuestro Plan de Renta Garantizada" },
        { value: "24h", label: "Investigación", sub: "Resultados en Tiempo Récord" },
        { value: "100%", label: "Digital", sub: "Contratos con Firma Electrónica" },
        { value: "12", label: "Meses", sub: "Cobertura Máxima de Protección" }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-8 rounded-3xl bg-[#F8F7F4] border border-[#E5E3DB]"
                        >
                            <div className="text-5xl font-bold text-[#B8975A] mb-2">{stat.value}</div>
                            <div className="text-lg font-bold text-[#2C3E2C] mb-1">{stat.label}</div>
                            <div className="text-sm text-[#6B7B6B]">{stat.sub}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
