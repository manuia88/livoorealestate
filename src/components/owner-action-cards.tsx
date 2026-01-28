"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Key, ArrowRight } from "lucide-react";

const ownerActions = [
    {
        title: "Soy Propietario: Quiero Vender",
        description: "Vende Más Rápido con Máxima Exposición en Nuestra Red Exclusiva de Compradores Calificados.",
        icon: Home,
        href: "/vender-mi-propiedad",
        gradient: "from-[#2C3E2C] to-[#556B55]"
    },
    {
        title: "Soy Propietario: Quiero Rentar",
        description: "Renta sin Riesgo con Protección de Renta, Investigación de Inquilinos y Asesoría Legal Incluida.",
        icon: Key,
        href: "/rentar-mi-propiedad",
        gradient: "from-[#B8975A] to-[#C4A872]"
    }
];

export function OwnerActionCards() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E2C] mb-3">
                        ¿Eres Propietario?
                    </h2>
                    <p className="text-lg text-[#6B7B6B] max-w-2xl mx-auto">
                        Descubre Cómo Livoo Puede Ayudarte a Vender o Rentar Tu Propiedad
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {ownerActions.map((action, index) => (
                        <motion.div
                            key={action.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Link
                                href={action.href}
                                className="block group"
                            >
                                <div className="bg-[#F8F7F4] rounded-2xl p-8 h-full border-2 border-[#E5E3DB] hover:border-[#B8975A] transition-all duration-300 hover:shadow-xl">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <action.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-[#2C3E2C] mb-3 group-hover:text-[#B8975A] transition-colors">
                                        {action.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#6B7B6B] leading-relaxed mb-6">
                                        {action.description}
                                    </p>

                                    {/* CTA Link */}
                                    <div className="flex items-center gap-2 text-[#B8975A] font-semibold group-hover:gap-3 transition-all">
                                        <span>Más Información</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
