"use client";

import { motion } from "framer-motion";
import { Search, Home, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function HeroSection() {
    const [activeTab, setActiveTab] = useState<'buy' | 'rent'>('buy');

    return (
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8F7F4] via-white to-[#FAF8F3] py-20">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0">
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-10 livoo-pattern" />

                {/* Organic shapes - natural feel */}
                <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#B8975A]/20 to-[#D4C19C]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-32 left-10 w-80 h-80 bg-gradient-to-br from-[#556B55]/20 to-[#7D8F77]/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#F8F7F4] to-transparent rounded-full blur-3xl" />
            </div>

            <div className="relative z-20 container mx-auto px-4 text-left max-w-6xl">
                {/* Main Content Box - Loft Style with Livoo Colors */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white rounded-3xl shadow-2xl shadow-[#2C3E2C]/10 p-8 md:p-12 max-w-2xl border border-[#E5E3DB]"
                >
                    {/* Decorative gold accent bar */}
                    <div className="w-16 h-1 bg-gradient-to-r from-[#B8975A] to-[#D4C19C] rounded-full mb-6" />

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E2C] mb-6 leading-tight">
                        Facilidad de uso para quienes desean{" "}
                        <span className="text-[#B8975A]">comprar</span>,{" "}
                        <span className="text-[#B8975A]">vender</span> o{" "}
                        <span className="text-[#B8975A]">rentar</span> en CDMX.
                    </h1>

                    <p className="text-lg md:text-xl text-[#6B7B6B] mb-8 leading-relaxed">
                        Encuentra tu casa ideal a través de una inmobiliaria con tecnología Livoo.
                    </p>

                    {/* Tabs - Comprar / Rentar */}
                    <div className="flex gap-6 mb-6 border-b border-[#E5E3DB]">
                        <button
                            onClick={() => setActiveTab('buy')}
                            className={`flex items-center gap-2 pb-3 px-2 transition-all relative ${activeTab === 'buy'
                                    ? 'text-[#2C3E2C] font-semibold'
                                    : 'text-[#6B7B6B] hover:text-[#2C3E2C]'
                                }`}
                        >
                            <Home className="w-5 h-5" />
                            <span>Comprar</span>
                            {activeTab === 'buy' && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#B8975A] to-[#D4C19C]"
                                />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('rent')}
                            className={`flex items-center gap-2 pb-3 px-2 transition-all relative ${activeTab === 'rent'
                                    ? 'text-[#2C3E2C] font-semibold'
                                    : 'text-[#6B7B6B] hover:text-[#2C3E2C]'
                                }`}
                        >
                            <Building2 className="w-5 h-5" />
                            <span>Para rentar</span>
                            {activeTab === 'rent' && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#B8975A] to-[#D4C19C]"
                                />
                            )}
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="flex flex-col md:flex-row gap-3">
                        <input
                            type="text"
                            placeholder="Busca por colonia, delegación o código postal"
                            className="flex-1 px-5 py-4 rounded-xl border-2 border-[#E5E3DB] focus:outline-none focus:ring-2 focus:ring-[#B8975A] focus:border-transparent text-[#2C3E2C] placeholder-[#A8B5A1] transition-all"
                        />
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-[#B8975A] to-[#C4A872] hover:from-[#A38449] hover:to-[#B8975A] text-white rounded-xl px-8 py-4 h-auto font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                            <Search className="mr-2 h-5 w-5" />
                            Buscar inmuebles
                        </Button>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-6 pt-6 border-t border-[#E5E3DB]">
                        <div className="flex flex-wrap items-center gap-6 text-sm text-[#6B7B6B]">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#4A7C4A]" />
                                <span>+1,500 propiedades</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#B8975A]" />
                                <span>Asesoría personalizada</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#4A7C4A]" />
                                <span>Procesos 100% digitales</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative olive branch illustration - optional */}
            <div className="absolute right-10 bottom-10 z-10 hidden xl:block opacity-10">
                <div className="w-64 h-64">
                    {/* Subtle olive branch SVG or decorative element */}
                    <svg viewBox="0 0 200 200" className="text-[#2C3E2C]">
                        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                        <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
