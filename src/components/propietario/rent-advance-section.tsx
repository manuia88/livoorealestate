"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export function RentAdvanceSection() {
    const [rentAmount, setRentAmount] = useState<string>("20000");
    const [months, setMonths] = useState<number>(6);

    const amount = parseFloat(rentAmount) || 0;
    const totalAdvance = amount * months;
    const commission = totalAdvance * 0.16;
    const toReceive = totalAdvance - commission;

    return (
        <section className="py-24 bg-[#2C3E2C] text-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#B8975A] blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#556B55] blur-[80px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B8975A]/20 text-[#B8975A] font-semibold text-sm mb-6 border border-[#B8975A]/30">
                            <DollarSign className="w-4 h-4" />
                            Nuevo Servicio Exclusivo
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Adelanta tus rentas,<br />
                            <span className="text-[#B8975A]">invierte hoy.</span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Convierte los ingresos futuros de tu propiedad en efectivo disponible inmediato.
                            Sin complicaciones bancarias. Recibe hasta 6 meses de renta por adelantado para lo que necesites:
                            invertir, remodelar o solucionar imprevistos.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Comisión única del 16% sobre el monto adelantado",
                                "Proceso 100% digital y transparente",
                                "Aprobación en tiempo récord (24 hrs)",
                                "Sin afectar a tu inquilino actual"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#B8975A] flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-3 h-3 text-[#2C3E2C]" />
                                    </div>
                                    <span className="text-gray-200">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Button className="bg-[#B8975A] hover:bg-[#A38449] text-white rounded-full px-8 py-6 text-lg tracking-wide shadow-lg hover:shadow-[#B8975A]/20 transition-all font-semibold">
                            Solicitar mi adelanto
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>

                    {/* Calculator Card */}
                    <div className="lg:w-1/2 w-full">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-3xl p-8 text-[#2C3E2C] shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#B8975A] to-[#D4C19C]" />

                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                Simulador de Adelanto
                                <Clock className="w-5 h-5 text-[#B8975A]" />
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <label className="text-sm font-semibold text-[#6B7B6B] block mb-2">Monto mensual de renta</label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8975A]" />
                                        <Input
                                            type="number"
                                            value={rentAmount}
                                            onChange={(e) => setRentAmount(e.target.value)}
                                            className="pl-12 h-14 bg-[#F8F7F4] border-transparent text-lg font-bold text-[#2C3E2C]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-semibold text-[#6B7B6B] block mb-2">Meses a adelantar: <span className="text-[#2C3E2C] font-bold text-lg ml-1">{months}</span></label>
                                    <input
                                        type="range"
                                        min="1"
                                        max="6"
                                        value={months}
                                        onChange={(e) => setMonths(parseInt(e.target.value))}
                                        className="w-full h-2 bg-[#F8F7F4] rounded-lg appearance-none cursor-pointer accent-[#B8975A]"
                                    />
                                    <div className="flex justify-between text-xs text-[#6B7B6B] mt-2 font-medium">
                                        <span>1 mes</span>
                                        <span>6 meses</span>
                                    </div>
                                </div>

                                <div className="bg-[#F8F7F4] rounded-xl p-6 space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#6B7B6B]">Monto total adelantado:</span>
                                        <span className="font-bold">{totalAdvance.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#6B7B6B]">Comisión por servicio (16%):</span>
                                        <span className="text-red-500 font-medium">-{commission.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</span>
                                    </div>
                                    <div className="pt-3 border-t border-[#E5E3DB] flex justify-between items-end">
                                        <span className="text-lg font-bold text-[#2C3E2C]">Recibes hoy:</span>
                                        <span className="text-3xl font-bold text-[#B8975A]">
                                            {toReceive.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
