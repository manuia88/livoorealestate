"use client";

import { motion } from "framer-motion";
import { Shield, Users, FileSignature, DollarSign } from "lucide-react";

export function ServicesNavigation() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -100; // Account for fixed navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const services = [
        { id: 'proteccion', icon: Shield, label: 'Protección de Renta', color: 'from-[#2C3E2C] to-[#3F5140]' },
        { id: 'investigacion', icon: Users, label: 'Investigación de Inquilinos', color: 'from-[#556B55] to-[#7D8F77]' },
        { id: 'contratos', icon: FileSignature, label: 'Elaboración y Firma de Contratos', color: 'from-[#B8975A] to-[#C4A872]' },
        { id: 'adelantos', icon: DollarSign, label: 'Adelantos de Renta', color: 'from-[#A38449] to-[#B8975A]' }
    ];

    return (
        <section className="py-12 bg-white sticky top-16 z-30 border-b border-[#E5E3DB] shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-4">
                    {services.map((service, index) => (
                        <motion.button
                            key={service.id}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => scrollToSection(service.id)}
                            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-[#F8F7F4] hover:bg-[#2C3E2C] transition-all border border-[#E5E3DB] hover:border-[#2C3E2C]"
                        >
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                <service.icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-semibold text-[#2C3E2C] group-hover:text-white transition-colors">
                                {service.label}
                            </span>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}
