"use client";

import { useState } from "react";
import { MapPin, Clock, Calendar, ChevronDown } from "lucide-react";
import Countdown from "@/components/countdown";
import RsvpModal from "@/components/rsvp-modal";
import FadeInSection from "@/components/fade-in-section";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background gradient - warm light */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#EDE2D2] via-[#F5EDE3] to-[#EDE2D2]" />

        {/* Decorative elements with brand colors */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6A704D]/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#A6777F]/10 rounded-full blur-[80px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeInSection delay={0}>
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#6A704D] mb-6 font-medium">
              Lanzamiento
            </p>
          </FadeInSection>

          <FadeInSection delay={100}>
            <h1 className="font-[family:var(--font-montserrat)] text-6xl md:text-8xl lg:text-9xl font-bold brand-shimmer mb-4 leading-none tracking-tight">
              BeeGlow
            </h1>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-[#8C7B70] text-sm md:text-base mb-8">
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-[#6A704D]" />
                29 de mayo de 2026
              </span>
              <span className="hidden md:inline text-[#6A704D]/30">|</span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-[#6A704D]" />
                18:00 hs
              </span>
            </div>
          </FadeInSection>

          <FadeInSection delay={300}>
            <p className="text-lg md:text-xl text-[#8C7B70] max-w-2xl mx-auto leading-relaxed mb-12">
              Te invitamos a ser parte del momento en que todo comienza.
              Una noche para descubrir lo que viene.
            </p>
          </FadeInSection>

          <FadeInSection delay={400}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-[#6A704D] text-white font-semibold text-base rounded-full hover:bg-[#4F5439] active:scale-[0.98] transition-all primary-glow"
            >
              Confirmar asistencia
            </button>
          </FadeInSection>
        </div>

        {/* Scroll indicator */}
        <FadeInSection delay={600} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-[#8C7B70] animate-bounce">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown size={20} className="text-[#6A704D]" />
          </div>
        </FadeInSection>
      </section>

      {/* Countdown Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-center font-serif text-2xl md:text-3xl text-[#422E26] mb-2">
              Nos vemos en
            </h2>
            <p className="text-center text-[#8C7B70] text-sm mb-12">
              29 de mayo de 2026 a las 18:00 hs
            </p>
          </FadeInSection>
          <Countdown />
        </div>
      </section>

      {/* Ubicación Section */}
      <section className="py-20 md:py-32 px-6 bg-[#F5EDE3]/50">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="flex items-center gap-3 justify-center mb-2">
              <MapPin className="text-[#6A704D]" size={24} />
              <h2 className="font-serif text-2xl md:text-3xl text-[#422E26]">
                Ubicación
              </h2>
            </div>
            <p className="text-center text-[#6A704D] text-sm uppercase tracking-widest mb-12">
              General Pico, La Pampa
            </p>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="text-center mb-8">
              <p className="text-[#422E26] text-lg md:text-xl font-medium mb-2">
                Polo Científico Tecnológico (Agencia CITIA)
              </p>
              <p className="text-[#8C7B70]">
                C. 29 & Calle 32, General Pico, La Pampa, Argentina
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="map-container mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.8!2d-63.739915658920154!3d-35.66045203536088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM5JzM4LjQiUyA2M8KwNDQnMjYuNCJX!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del evento BeeGlow"
                className="w-full"
              />
            </div>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className="text-center">
              <a
                href="https://www.google.com/maps?q=-35.66045203536088,-63.739915658920154"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#6A704D]/30 text-[#6A704D] hover:bg-[#6A704D]/10 transition-all"
              >
                <MapPin size={18} />
                Abrir en Google Maps
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Itinerario Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <Clock className="text-[#6A704D] mx-auto mb-4" size={28} />
              <h2 className="font-serif text-2xl md:text-3xl text-[#422E26] mb-2">
                Itinerario
              </h2>
              <p className="text-[#8C7B70] text-sm">Cómo será la noche</p>
            </div>
          </FadeInSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#6A704D] via-[#6A704D]/50 to-transparent" />

            {[
              {
                time: "06:00 pm",
                title: "Recepción",
                description: "Llegada y bienvenida de invitados",
              },
              {
                time: "06:30 pm",
                title: "Presentación de marca",
                description: "El momento de conocer BeeGlow",
              },
              {
                time: "10:00 pm",
                title: "Picoteo y cierre",
                description: "Celebración y momentos inolvidables",
              },
            ].map((item, index) => (
              <FadeInSection key={item.title} delay={index * 150}>
                <div className="relative flex gap-6 mb-12 last:mb-0">
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-[#F5EDE3] border-2 border-[#6A704D] flex items-center justify-center">
                    <span className="text-xs font-semibold text-[#6A704D]">
                      {item.time.split(" ")[0]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <p className="text-xs uppercase tracking-widest text-[#6A704D] mb-1">
                      {item.time}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl text-[#422E26] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#8C7B70] text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP CTA Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#F5EDE3]/50 to-[#EDE2D2]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-serif text-3xl md:text-4xl text-[#422E26] mb-4">
              ¿Nos acompañás?
            </h2>
            <p className="text-[#8C7B70] mb-8 max-w-lg mx-auto">
              Confirmá tu asistencia para que podamos organizar todo para vos.
              Tu presencia es lo más importante.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-4 bg-[#6A704D] text-white font-semibold text-lg rounded-full hover:bg-[#4F5439] active:scale-[0.98] transition-all primary-glow"
            >
              Confirmar asistencia
            </button>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#6A704D]/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-2xl text-[#6A704D] mb-4">BeeGlow</p>
          <a
            href="https://www.somosbeeglow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8C7B70] hover:text-[#6A704D] transition-colors"
          >
            www.somosbeeglow.com
          </a>
        </div>
      </footer>

      {/* RSVP Modal */}
      <RsvpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
