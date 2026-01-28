"use client";

import { Button } from "@/components/ui/button";

interface OwnerFinalActionProps {
    type: "vender" | "rentar";
}

export function OwnerFinalAction({ type }: OwnerFinalActionProps) {
    return (
        <section className="py-20 bg-white border-t border-[#E5E3DB]">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-[#2C3E2C] mb-6 max-w-2xl mx-auto">
                    ¿Listo para {type === "vender" ? "vender" : "rentar"} tu propiedad?
                </h2>
                <p className="text-xl text-[#6B7B6B] mb-10 max-w-2xl mx-auto">
                    Únete a los miles de propietarios que confían en Livoo para maximizar el valor de sus inmuebles.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="bg-[#2C3E2C] hover:bg-[#1E2B1E] text-white rounded-full px-12 h-14 text-lg">
                        Comenzar ahora
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-12 h-14 text-lg border-[#2C3E2C] text-[#2C3E2C] hover:bg-[#F8F7F4]">
                        Whatsapp
                    </Button>
                </div>
            </div>
        </section>
    );
}
