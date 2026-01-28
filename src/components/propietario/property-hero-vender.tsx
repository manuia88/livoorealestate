"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

export function PropertyHeroVender() {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-vender-propiedad.jpg"
                    alt="Vender Propiedad"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E2C]/95 via-[#2C3E2C]/85 to-[#2C3E2C]/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <span className="inline-block text-sm font-semibold text-[#B8975A] uppercase tracking-widest mb-4">
                        Para Propietarios
                    </span>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Vende tu propiedad con Livoo
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                        Obtén el mejor precio del mercado con nuestra tecnología de valuación
                    </p>

                    {/* Inline Quick Valuation Form */}
                    <div className="bg-white rounded-2xl p-6 shadow-2xl">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7B6B]" />
                                    <Input
                                        placeholder="Dirección de tu propiedad"
                                        className="pl-10 h-14 text-lg border-2 border-gray-200 focus:border-[#B8975A]"
                                    />
                                </div>
                            </div>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-[#B8975A] to-[#C4A872] hover:from-[#A38449] hover:to-[#B8975A] text-white h-14 px-8 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all group"
                            >
                                Obtener valuación gratis
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap gap-6 mt-8">
                        {[
                            { label: "+2,500", sublabel: "Propiedades vendidas" },
                            { label: "45 días", sublabel: "Tiempo promedio de venta" },
                            { label: "3%", sublabel: "Comisión competitiva" }
                        ].map((stat, i) => (
                            <div key={i} className="text-white">
                                <div className="text-2xl font-bold text-[#B8975A]">{stat.label}</div>
                                <div className="text-sm text-gray-300">{stat.sublabel}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
