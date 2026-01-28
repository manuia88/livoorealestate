"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
    { name: "Publicación en portales", basic: true, complete: true, premium: true },
    { name: "Verificación de inquilino", basic: true, complete: true, premium: true },
    { name: "Contrato digital", basic: true, complete: true, premium: true },
    { name: "Gestión de cobros", basic: false, complete: true, premium: true },
    { name: "Mantenimiento", basic: false, complete: true, premium: true },
    { name: "Reportes mensuales", basic: false, complete: true, premium: true },
    { name: "Renta garantizada", basic: false, complete: false, premium: true },
    { name: "Seguro incluido", basic: false, complete: false, premium: true },
    { name: "Asesor personal", basic: false, complete: false, premium: true }
];

export function PlanComparison() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-[#2C3E2C] text-center mb-12">
                        Comparativa de Planes
                    </h2>

                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-[#E5E3DB]">
                                    <th className="text-left py-4 px-6 text-lg font-bold text-[#2C3E2C]">
                                        Característica
                                    </th>
                                    <th className="text-center py-4 px-6">
                                        <div className="text-lg font-bold text-[#2C3E2C]">BÁSICO</div>
                                        <div className="text-sm text-[#6B7B6B] mt-1">1 mes</div>
                                    </th>
                                    <th className="text-center py-4 px-6 bg-[#FAF8F3] rounded-t-2xl">
                                        <div className="text-lg font-bold text-[#B8975A]">COMPLETO</div>
                                        <div className="text-sm text-[#6B7B6B] mt-1">8% mensual</div>
                                    </th>
                                    <th className="text-center py-4 px-6">
                                        <div className="text-lg font-bold text-[#2C3E2C]">PREMIUM</div>
                                        <div className="text-sm text-[#6B7B6B] mt-1">10% mensual</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature, index) => (
                                    <tr
                                        key={feature.name}
                                        className="border-b border-[#E5E3DB] hover:bg-[#F8F7F4] transition-colors"
                                    >
                                        <td className="py-4 px-6 text-[#2C3E2C] font-medium">
                                            {feature.name}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {feature.basic ? (
                                                <Check className="w-6 h-6 text-[#4A7C4A] mx-auto" />
                                            ) : (
                                                <X className="w-6 h-6 text-gray-300 mx-auto" />
                                            )}
                                        </td>
                                        <td className="py-4 px-6 text-center bg-[#FAF8F3]">
                                            {feature.complete ? (
                                                <Check className="w-6 h-6 text-[#B8975A] mx-auto" />
                                            ) : (
                                                <X className="w-6 h-6 text-gray-300 mx-auto" />
                                            )}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {feature.premium ? (
                                                <Check className="w-6 h-6 text-[#4A7C4A] mx-auto" />
                                            ) : (
                                                <X className="w-6 h-6 text-gray-300 mx-auto" />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-6">
                        {features.map((feature) => (
                            <div key={feature.name} className="bg-[#F8F7F4] rounded-2xl p-4">
                                <div className="font-semibold text-[#2C3E2C] mb-3">{feature.name}</div>
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="text-center">
                                        <div className="text-xs text-[#6B7B6B] mb-1">Básico</div>
                                        {feature.basic ? <Check className="w-5 h-5 text-[#4A7C4A] mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xs text-[#B8975A] mb-1 font-semibold">Completo</div>
                                        {feature.complete ? <Check className="w-5 h-5 text-[#B8975A] mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xs text-[#6B7B6B] mb-1">Premium</div>
                                        {feature.premium ? <Check className="w-5 h-5 text-[#4A7C4A] mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
