"use client";

import { motion } from "framer-motion";
import { Building2, Home, CreditCard, Users, ArrowRight, Search, Key } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Quiero Comprar",
        description: "Encuentra tu hogar ideal con nuestra tecnología de búsqueda avanzada.",
        icon: Search,
        gradient: "from-[#2C3E2C] to-[#556B55]", // Olive gradients
        href: "/propiedades?type=buy"
    },
    {
        title: "Quiero Rentar",
        description: "Rentar sin fiador es posible. Descubre nuestras opciones verificadas.",
        icon: Key,
        gradient: "from-[#B8975A] to-[#C4A872]", // Gold gradients
        href: "/propiedades?type=rent"
    },
    {
        title: "Soy Propietario: Quiero Vender o Rentar",
        description: "Vende o renta más rápido con máxima exposición en nuestra red exclusiva de clientes verificados.",
        icon: Home,
        gradient: "from-[#7D8F77] to-[#8FA389]", // Light olive
        href: "/vender"
    },
    {
        title: "Brokers y Agencias",
        description: "Únete a Livoo. La red inmobiliaria más exclusiva de México.",
        icon: Building2,
        gradient: "from-[#A38449] to-[#B8975A]", // Dark gold
        href: "/agencias"
    }
];

export function ServiceCards() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={service.href} key={service.title} className="group relative">
                                <div className="group bg-[#F8F7F4] rounded-2xl p-6 hover:shadow-2xl hover:shadow-[#2C3E2C]/10 transition-all duration-300 h-full flex flex-col border border-[#E5E3DB] hover:border-[#B8975A]/30 relative overflow-hidden">
                                    {/* Subtle background pattern on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity livoo-pattern" />

                                    <div className="relative z-10">
                                        {/* Icon with gradient background */}
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                            <service.icon className="w-7 h-7 text-white" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg font-bold text-[#2C3E2C] mb-3 line-clamp-2 group-hover:text-[#556B55] transition-colors">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-[#6B7B6B] mb-4 flex-1">
                                            {service.description}
                                        </p>

                                        {/* Link with gold accent */}
                                        <div className="flex items-center text-[#B8975A] font-semibold text-sm group-hover:gap-2 transition-all">
                                            <span>Más información</span>
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
