"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface FinalCTAPropertyProps {
    type: "venta" | "renta";
}

export function FinalCTAProperty({ type }: FinalCTAPropertyProps) {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={type === "venta" ? "/images/cta-vender.jpg" : "/images/cta-rentar.jpg"}
                    alt="CTA Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#2C3E2C]/90" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
                    ¿Listo para {type === "venta" ? "vender" : "rentar"} tu propiedad al mejor precio?
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Únete a los miles de propietarios que han confiado en la tecnología y experiencia de Livoo.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="bg-[#B8975A] hover:bg-[#A38449] text-white rounded-full px-12 h-16 text-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 font-semibold">
                        {type === "venta" ? "Valuar mi propiedad gratis" : "Comenzar ahora"}
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-12 h-16 text-xl border-white text-white hover:bg-white hover:text-[#2C3E2C] font-semibold bg-transparent">
                        Hablar con un asesor
                    </Button>
                </div>
            </div>
        </section>
    );
}
