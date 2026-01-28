"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface OwnerHeroProps {
    type: "vender" | "rentar";
    title: string;
    subtitle: string;
    imageSrc: string;
}

export function OwnerHero({ type, title, subtitle, imageSrc }: OwnerHeroProps) {
    const isSell = type === "vender";

    return (
        <div className="relative min-h-[90vh] flex items-center bg-[#F8F7F4] overflow-hidden">
            {/* Background Image Integration */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={imageSrc}
                    alt="Background"
                    fill
                    className="object-cover opacity-100 lg:opacity-100"
                    priority
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent lg:from-white/95 lg:via-white/80 lg:to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-20">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl text-white lg:text-[#2C3E2C] pt-20 lg:pt-0"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8975A]/20 backdrop-blur-sm border border-[#B8975A]/30 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#B8975A] animate-pulse" />
                        <span className="text-xs font-semibold tracking-wide uppercase text-white lg:text-[#8A6D3B]">
                            {isSell ? "Venta Garantizada" : "Renta Segura"}
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
                        {title}
                    </h1>

                    <p className="text-lg lg:text-xl text-white/90 lg:text-[#6B7B6B] mb-8 leading-relaxed max-w-xl">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            size="lg"
                            className="bg-[#B8975A] hover:bg-[#A38449] text-white rounded-full px-8 h-14 text-lg font-semibold shadow-xl hover:shadow-2xl hover:translate-y-[-2px] transition-all"
                        >
                            {isSell ? "Valuar mi propiedad gratis" : "Quiero rentar seguro"}
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full px-8 h-14 text-lg font-semibold bg-white/10 lg:bg-white border-white/20 lg:border-[#2C3E2C]/20 text-white lg:text-[#2C3E2C] hover:bg-white hover:text-[#2C3E2C]"
                        >
                            Hablar con un experto
                        </Button>
                    </div>

                    <div className="mt-10 flex items-center gap-6 text-sm font-medium text-white/80 lg:text-[#6B7B6B]">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#B8975A]" />
                            <span>Sin exclusiva forzosa</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#B8975A]" />
                            <span>Fotos profesionales gratis</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-[#E5E3DB]"
                >
                    <h3 className="text-2xl font-bold text-[#2C3E2C] mb-2">Comienza ahora</h3>
                    <p className="text-[#6B7B6B] mb-6 text-sm">Déjanos tus datos y recibe una propuesta personalizada en menos de 24h.</p>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-[#6B7B6B] uppercase tracking-wider mb-1">Nombre completo</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] border-transparent focus:bg-white focus:border-[#B8975A] focus:ring-0 transition-all outline-none text-[#2C3E2C]" placeholder="Ej. Juan Pérez" />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-[#6B7B6B] uppercase tracking-wider mb-1">Correo electrónico</label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] border-transparent focus:bg-white focus:border-[#B8975A] focus:ring-0 transition-all outline-none text-[#2C3E2C]" placeholder="juan@email.com" />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-[#6B7B6B] uppercase tracking-wider mb-1">Teléfono</label>
                            <input type="tel" className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] border-transparent focus:bg-white focus:border-[#B8975A] focus:ring-0 transition-all outline-none text-[#2C3E2C]" placeholder="+52 55 1234 5678" />
                        </div>

                        <Button className="w-full bg-[#2C3E2C] hover:bg-[#1E2B1E] text-white rounded-xl py-6 text-lg font-semibold mt-4">
                            Enviar solicitud <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>

                        <p className="text-xs text-[#9CA3AF] text-center mt-4">
                            Al enviar, aceptas nuestros términos y condiciones de privacidad.
                        </p>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
