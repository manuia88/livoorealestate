"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, MapPin, Building, DollarSign, ShieldCheck } from "lucide-react";

export function RentCalculator() {
    const [address, setAddress] = useState("");
    const [rentAmount, setRentAmount] = useState("");
    const [propertyUse, setPropertyUse] = useState("habitacional");

    // Logic approximation: Policy cost is roughly 30% of one month's rent + fixed fee
    // This is a simplified estimation for the demo
    const protectionCost = rentAmount ? (parseFloat(rentAmount) * 0.30).toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0
    }) : "$0";

    return (
        <section className="py-20 bg-gradient-to-br from-[#F8F7F4] to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-white rounded-3xl shadow-2xl border border-[#E5E3DB] p-8 md:p-12 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8975A]/5 rounded-full blur-3xl -z-10" />

                        {/* Header */}
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E5E3DB]/30 mb-6">
                                <ShieldCheck className="w-8 h-8 text-[#2C3E2C]" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E2C] mb-4">
                                Calcula el costo de tu Protección
                            </h2>
                            <p className="text-lg text-[#6B7B6B] max-w-2xl mx-auto">
                                Elige la cobertura perfecta según el tipo de renta y las necesidades de tu cliente.
                            </p>
                        </div>

                        {/* Form */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            {/* Location */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-[#2C3E2C] uppercase tracking-wide mb-2">
                                    Lugar donde se encuentra el inmueble
                                </label>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8975A]" />
                                    <Input
                                        placeholder="Ej: Roma Norte, CDMX"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className="pl-12 h-14 text-lg bg-[#F8F7F4] border-transparent focus:bg-white focus:border-[#B8975A] transition-all"
                                    />
                                </div>
                            </div>

                            {/* Rent Amount */}
                            <div>
                                <label className="block text-sm font-semibold text-[#2C3E2C] uppercase tracking-wide mb-2">
                                    ¿Cuál es el monto de renta mensual?
                                </label>
                                <div className="relative">
                                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8975A]" />
                                    <Input
                                        type="number"
                                        placeholder="20000"
                                        value={rentAmount}
                                        onChange={(e) => setRentAmount(e.target.value)}
                                        className="pl-12 h-14 text-lg bg-[#F8F7F4] border-transparent focus:bg-white focus:border-[#B8975A] transition-all"
                                    />
                                </div>
                            </div>

                            {/* Property Use */}
                            <div>
                                <label className="block text-sm font-semibold text-[#2C3E2C] uppercase tracking-wide mb-2">
                                    ¿Qué uso se dará al inmueble?
                                </label>
                                <div className="relative">
                                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8975A] z-10" />
                                    <Select value={propertyUse} onValueChange={setPropertyUse}>
                                        <SelectTrigger className="h-14 pl-12 text-lg bg-[#F8F7F4] border-transparent focus:bg-white focus:border-[#B8975A] transition-all">
                                            <SelectValue placeholder="Seleccionar" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="habitacional">Habitacional</SelectItem>
                                            <SelectItem value="comercial">Comercial</SelectItem>
                                            <SelectItem value="industrial">Industrial</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        {/* Result Area */}
                        {rentAmount && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="bg-[#2C3E2C] rounded-2xl p-8 mb-8 border border-[#2C3E2C] text-white relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8975A] rounded-full blur-3xl opacity-20" />

                                <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                                    <div>
                                        <div className="text-sm font-semibold text-[#B8975A] uppercase tracking-wider mb-2">
                                            Costo anual de tu protección
                                        </div>
                                        <div className="text-5xl font-bold text-white mb-1">
                                            {protectionCost}
                                        </div>
                                        <div className="text-sm text-gray-300">Más IVA</div>
                                    </div>

                                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                                        <div className="text-sm text-gray-300 mb-3 font-medium">Esta protección incluye:</div>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-center gap-2">
                                                <div className="w-5 h-5 rounded-full bg-[#B8975A] flex items-center justify-center text-[10px] text-white">✓</div>
                                                Investigación de inquilino
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-5 h-5 rounded-full bg-[#B8975A] flex items-center justify-center text-[10px] text-white">✓</div>
                                                Contratos y Firma Digital
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-5 h-5 rounded-full bg-[#B8975A] flex items-center justify-center text-[10px] text-white">✓</div>
                                                Asesoría legal hasta recuperación
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* CTA */}
                        <Button
                            size="lg"
                            className="w-full bg-[#B8975A] hover:bg-[#A38449] text-white h-16 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                            {rentAmount ? "Contratar Protección Ahora" : "Calcular Cotización"}
                        </Button>

                        <p className="text-center text-xs text-[#9CA3AF] mt-6">
                            * La disponibilidad del servicio está sujeta a validación con base en la dirección exacta del inmueble.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
