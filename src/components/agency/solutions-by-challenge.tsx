"use client";

import { motion } from "framer-motion";
import { TrendingUp, Home, Briefcase, DollarSign } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const challenges = [
    {
        id: "sell",
        icon: TrendingUp,
        title: "Quiero Vender +",
        description: "Atrae más leads, garantiza financiamiento más rápido y destraba tus ventas con más agilidad y menos burocracia.",
        products: [
            "CRM Livoo",
            "Sitios Web",
            "Financiamiento Inmobiliario",
            "Asistente IA Livoo"
        ],
        gradient: "from-[#2C3E2C] to-[#556B55]"
    },
    {
        id: "rent",
        icon: Home,
        title: "Quiero Rentar +",
        description: "Más visibilidad, agilidad y menos burocracia para tu agencia inmobiliaria rentar más y mejor.",
        products: [
            "CRM Livoo",
            "Fianza Inmediata",
            "Seguro de Inmuebles",
            "Administración de Rentas"
        ],
        gradient: "from-[#556B55] to-[#7D8F77]"
    },
    {
        id: "organize",
        icon: Briefcase,
        title: "Organizar Mi Agencia",
        description: "Automatiza procesos, gana productividad y facilita la gestión del día a día.",
        products: [
            "CRM Livoo",
            "Administración de Rentas",
            "Firma Electrónica",
            "Asistente IA Livoo"
        ],
        gradient: "from-[#7D8F77] to-[#A8B5A1]"
    },
    {
        id: "profit",
        icon: DollarSign,
        title: "Ser Más Rentable",
        description: "Impulsa tus ingresos con servicios financieros, tecnología de punta y gestión inteligente.",
        products: [
            "Crédito con Garantía",
            "Club Livoo",
            "Seguros",
            "Comisiones Premium"
        ],
        gradient: "from-[#B8975A] to-[#C4A872]"
    }
];

export function SolutionsByChallenge() {
    const [activeChallenge, setActiveChallenge] = useState<string | null>(null);

    return (
        <section className="py-20 bg-gradient-to-b from-white to-[#F8F7F4]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E2C] mb-4">
                        Soluciones completas para cada desafío de tu agencia
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {challenges.map((challenge, index) => (
                        <motion.div
                            key={challenge.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setActiveChallenge(challenge.id)}
                            onMouseLeave={() => setActiveChallenge(null)}
                            className="relative group"
                        >
                            <div className={`
                bg-white rounded-2xl p-8 h-full flex flex-col
                border-2 border-[#E5E3DB]
                hover:border-[#B8975A]
                transition-all duration-300
                hover:shadow-2xl hover:shadow-[#2C3E2C]/10
                ${activeChallenge === challenge.id ? 'scale-105' : ''}
              `}>
                                {/* Icon */}
                                <div className={`
                  w-16 h-16 rounded-xl bg-gradient-to-br ${challenge.gradient}
                  flex items-center justify-center mb-6
                  shadow-lg group-hover:shadow-xl transition-shadow
                `}>
                                    <challenge.icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-[#2C3E2C] mb-3">
                                    {challenge.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-[#6B7B6B] mb-6 flex-1">
                                    {challenge.description}
                                </p>

                                {/* Products */}
                                <div className="border-t border-[#E5E3DB] pt-4">
                                    <p className="text-xs font-semibold text-[#B8975A] uppercase tracking-wider mb-2">
                                        Productos recomendados:
                                    </p>
                                    <ul className="space-y-1">
                                        {challenge.products.slice(0, 3).map((product) => (
                                            <li key={product} className="text-sm text-[#6B7B6B] flex items-center">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#B8975A] mr-2" />
                                                {product}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#B8975A] to-[#C4A872] hover:from-[#A38449] hover:to-[#B8975A] text-white rounded-full px-10 py-6 text-lg font-semibold shadow-xl h-auto"
                    >
                        Quiero ser socio
                    </Button>
                </div>
            </div>
        </section>
    );
}
