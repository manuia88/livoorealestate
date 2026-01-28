"use client";

import { motion } from "framer-motion";
import { UserCheck, FileSignature, ShieldCheck, Headphones, Key, Scale } from "lucide-react";

const benefits = [
    {
        icon: UserCheck,
        title: "Investigación de inquilino",
        description: "Evaluamos antecedentes legales, capacidad de pago y referencias para asegurar al candidato ideal.",
        gradient: "from-[#2C3E2C] to-[#556B55]"
    },
    {
        icon: ShieldCheck,
        title: "Pago de rentas puntuales",
        description: "Si el inquilino no paga, nosotros intervenimos. Respaldo financiero durante la vigencia del contrato.",
        gradient: "from-[#556B55] to-[#7D8F77]"
    },
    {
        icon: Scale,
        title: "Asesoría legal integral",
        description: "Abogados expertos a tu disposición para cualquier controversia, hasta la recuperación del inmueble.",
        gradient: "from-[#7D8F77] to-[#A8B5A1]"
    },
    {
        icon: FileSignature,
        title: "Contratos Digitales",
        description: "Olvídate del papeleo. Firma electrónica avanzada con plena validez legal desde cualquier dispositivo.",
        gradient: "from-[#B8975A] to-[#C4A872]"
    },
    {
        icon: Headphones,
        title: "Atención Especializada",
        description: "Un equipo de asesores listo para resolver tus dudas y acompañarte en todo el proceso de arrendamiento.",
        gradient: "from-[#A38449] to-[#B8975A]"
    },
    {
        icon: Key,
        title: "Recuperación de Inmueble",
        description: "Gestión completa del proceso de desalojo y recuperación en caso de incumplimiento grave.",
        gradient: "from-[#C4A872] to-[#D4C19C]"
    }
];

export function BenefitsGridRentar() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#B8975A] font-semibold tracking-wider uppercase text-sm block mb-2">¿Por qué elegir Livoo?</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E2C] mb-4">
                        Beneficios incluidos en tu protección
                    </h2>
                    <p className="text-xl text-[#6B7B6B] max-w-3xl mx-auto">
                        Todo lo que necesitas para rentar con tranquilidad incluido en el precio.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-[#F8F7F4] rounded-2xl p-8 h-full hover:bg-white hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#B8975A]">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                    <benefit.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-[#2C3E2C] mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-[#6B7B6B] leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
