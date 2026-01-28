"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star, Shield } from "lucide-react";

const plans = [
    {
        name: "PROTECCIÓN BÁSICA",
        price: "Desde $3,500",
        subtitle: "Investigación y contrato legal",
        features: [
            "Investigación Nacional del Inquilino",
            "Contrato de Arrendamiento",
            "Firma Electrónica Avanzada",
            "Asesoría Legal Telefónica"
        ],
        cta: "Cotizar Básica",
        popular: false
    },
    {
        name: "PROTECCIÓN TOTAL",
        price: "Desde $5,200",
        subtitle: "Defensa jurídica y recuperación",
        features: [
            "Todo lo de Protección Básica",
            "Cobranza extrajudicial",
            "Juicio de Desalojo y Recuperación",
            "Abogados expertos asignados",
            "Mediación de conflictos"
        ],
        cta: "Cotizar Total",
        popular: true
    },
    {
        name: "PROTECCIÓN PLUS",
        price: "Desde $7,800",
        subtitle: "Rentas garantizadas y daños",
        features: [
            "Todo lo de Protección Total",
            "Pago de rentas garantizado (hasta 12 meses)",
            "Pago de servicios adeudados",
            "Daños al inmueble (vandalismo)",
            "Extinción de Dominio"
        ],
        cta: "Cotizar Plus",
        popular: false
    }
];

export function ManagementPlans() {
    return (
        <section className="py-20 bg-gradient-to-br from-white to-[#F8F7F4]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E5E3DB] text-[#2C3E2C] font-semibold text-sm mb-4">
                        <Shield className="w-4 h-4" />
                        Nuestras Soluciones
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E2C] mb-4">
                        Elige tu nivel de protección
                    </h2>
                    <p className="text-xl text-[#6B7B6B] max-w-3xl mx-auto">
                        Desde la investigación del inquilino hasta la garantía total de tus rentas.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative"
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <div className="bg-[#B8975A] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 tracking-wide">
                                        <Star className="w-4 h-4 fill-current" />
                                        RECOMENDADA
                                    </div>
                                </div>
                            )}

                            <div className={`
                bg-white rounded-3xl p-8 h-full flex flex-col
                border-2 ${plan.popular ? 'border-[#B8975A] shadow-2xl scale-105 relative z-10' : 'border-[#E5E3DB] hover:border-[#B8975A]/50'}
                transition-all duration-300
              `}>
                                {/* Header */}
                                <div className="text-center mb-8 border-b border-[#F8F7F4] pb-6">
                                    <h3 className="text-lg font-bold text-[#6B7B6B] mb-2 tracking-wider">
                                        {plan.name}
                                    </h3>
                                    <div className="text-4xl font-bold text-[#2C3E2C] mb-2">
                                        {plan.price}
                                        <span className="text-base font-normal text-[#6B7B6B] ml-1">*</span>
                                    </div>
                                    <p className="text-sm text-[#B8975A] font-medium">
                                        {plan.subtitle}
                                    </p>
                                </div>

                                {/* Features */}
                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-[#B8975A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-4 h-4 text-[#B8975A]" />
                                            </div>
                                            <span className="text-[#2C3E2C] text-sm leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Button
                                    size="lg"
                                    className={`w-full h-14 rounded-xl font-bold text-lg ${plan.popular
                                            ? 'bg-[#2C3E2C] hover:bg-[#1E2B1E] text-white shadow-lg'
                                            : 'bg-white border-2 border-[#2C3E2C] text-[#2C3E2C] hover:bg-[#F8F7F4]'
                                        }`}
                                >
                                    {plan.cta}
                                </Button>

                                <p className="text-center text-[10px] text-gray-400 mt-4">
                                    * Precio anual aprox. + IVA. Varía según monto de renta.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
