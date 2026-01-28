"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function AgencyHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8F7F4] via-white to-[#FAF8F3]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-sm font-semibold text-[#B8975A] uppercase tracking-widest mb-4">
                            Soluciones para Agencias Inmobiliarias
                        </span>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2C3E2C] mb-6 leading-tight">
                            Acelera tu operación con tecnología, seguridad y agilidad
                        </h1>

                        <p className="text-xl text-[#6B7B6B] mb-8 leading-relaxed">
                            Más de 1,500 agencias inmobiliarias ya aceleran con Livoo. Únete a la red más innovadora de México.
                        </p>

                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-[#B8975A] to-[#C4A872] hover:from-[#A38449] hover:to-[#B8975A] text-white rounded-full px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all h-auto"
                        >
                            Quiero ser socio
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#B8975A]/10 to-transparent rounded-full blur-3xl" />
        </section>
    );
}
