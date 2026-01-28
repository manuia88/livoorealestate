"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Key, Home } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Quiero Comprar",
        description: "Encuentra Tu Hogar Ideal con Nuestra Tecnología de Búsqueda Avanzada.",
        icon: Search,
        gradient: "from-[#2C3E2C] to-[#556B55]",
        href: "/propiedades?type=buy"
    },
    {
        title: "Quiero Rentar",
        description: "Rentar sin Fiador es Posible. Descubre Nuestras Opciones Verificadas.",
        icon: Key,
        gradient: "from-[#B8975A] to-[#C4A872]",
        href: "/propiedades?type=rent"
    },
    {
        title: "Soy Propietario: Quiero Vender",
        description: "Vende Más Rápido con Máxima Exposición en Nuestra Red Exclusiva.",
        icon: Home,
        gradient: "from-[#556B55] to-[#7D8F77]",
        href: "/vender-mi-propiedad"
    },
    {
        title: "Soy Propietario: Quiero Rentar",
        description: "Renta sin Riesgo con Protección de Renta e Investigación de Inquilinos.",
        icon: Key,
        gradient: "from-[#A38449] to-[#B8975A]",
        href: "/rentar-mi-propiedad"
    }
];

export function ServiceCards() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Single Row with 4 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex"
                        >
                            <Link href={service.href} className="group relative w-full">
                                <div className="bg-[#F8F7F4] rounded-2xl p-6 hover:shadow-2xl hover:shadow-[#2C3E2C]/10 transition-all duration-300 h-full flex flex-col border border-[#E5E3DB] hover:border-[#B8975A]/30 relative overflow-hidden min-h-[280px]">
                                    {/* Subtle background pattern on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity livoo-pattern" />

                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Icon with gradient background */}
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                            <service.icon className="w-7 h-7 text-white" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-base font-bold text-[#2C3E2C] mb-3 group-hover:text-[#556B55] transition-colors leading-tight">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-[#6B7B6B] mb-4 flex-1 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Link with gold accent */}
                                        <div className="flex items-center text-[#B8975A] font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                                            <span>Más Información</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
