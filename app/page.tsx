"use client";

import { useState } from "react";
import { MapPin, Clock, Calendar, ChevronDown } from "lucide-react";
import Countdown from "@/components/countdown";
import RsvpModal from "@/components/rsvp-modal";
import FadeInSection from "@/components/fade-in-section";

function BeeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="16" cy="16" rx="10" ry="7" fill="#D4AF37" fillOpacity="0.35" />
      <ellipse cx="32" cy="16" rx="10" ry="7" fill="#D4AF37" fillOpacity="0.25" />
      <ellipse cx="24" cy="28" rx="11" ry="13" fill="#E8A824" />
      <path d="M16 23h16" stroke="#422E26" strokeWidth="3" strokeLinecap="round" />
      <path d="M15 29h18" stroke="#422E26" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 35h16" stroke="#422E26" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="14" r="6" fill="#E8A824" />
      <circle cx="22" cy="13" r="1.2" fill="#422E26" />
      <circle cx="26" cy="13" r="1.2" fill="#422E26" />
      <path d="M21 9c-1-3-3-4-3-4" stroke="#422E26" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M27 9c1-3 3-4 3-4" stroke="#422E26" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HoneycombBackground() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="honeycomb-home" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
          <path d="M28 0L56 16.5v33L28 66 0 49.5v-33L28 0z" fill="none" stroke="#6A704D" strokeWidth="1.5" />
          <path d="M28 100L56 83.5v-33L28 34 0 50.5v33L28 100z" fill="none" stroke="#6A704D" strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#honeycomb-home)" />
    </svg>
  );
}

function PollenParticles() {
  return (
    <>
      {[
        { top: "20%", left: "15%", size: 5, delay: "0s", duration: "5s" },
        { top: "40%", left: "80%", size: 4, delay: "1.2s", duration: "6s" },
        { top: "60%", left: "10%", size: 3, delay: "0.5s", duration: "4s" },
        { top: "80%", left: "70%", size: 4, delay: "2s", duration: "5.5s" },
        { top: "30%", left: "50%", size: 3, delay: "0.8s", duration: "4.5s" },
        { top: "70%", left: "30%", size: 5, delay: "1.5s", duration: "6s" },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none animate-pulse"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: "#D4AF37",
            opacity: 0.3,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-8 opacity-30">
      <div className="h-px w-12 bg-[#6A704D]" />
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#6A704D]">
        <path d="M12 2l10.39 6v12L12 26 1.61 20V8L12 2z" fill="currentColor" opacity="0.5" />
      </svg>
      <div className="h-px w-12 bg-[#6A704D]" />
    </div>
  );
}

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

        {/* Floating pollen particles */}
        <PollenParticles />

        {/* Floating decorative bee */}
        <div className="absolute top-16 right-8 md:top-24 md:right-20 opacity-15 pointer-events-none rotate-12 animate-bounce" style={{ animationDuration: "4s" }}>
          <BeeIcon className="w-14 h-14 md:w-20 md:h-20" />
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
              Una tarde para descubrir lo que viene.
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
      <section className="relative py-20 md:py-32 px-6 overflow-hidden">
        <HoneycombBackground />
        <div className="relative max-w-3xl mx-auto">
          <FadeInSection>
            <div className="flex items-center justify-center gap-3 mb-2">
              <BeeIcon className="w-6 h-6 opacity-40" />
              <h2 className="text-center font-serif text-2xl md:text-3xl text-[#422E26]">
                Nos vemos en
              </h2>
              <BeeIcon className="w-6 h-6 opacity-40 scale-x-[-1]" />
            </div>
            <p className="text-center text-[#8C7B70] text-sm mb-12">
              29 de mayo de 2026 a las 18:00 hs
            </p>
          </FadeInSection>
          <Countdown />
        </div>
      </section>

      <SectionDivider />

      {/* Ubicación Section */}
      <section className="relative py-20 md:py-32 px-6 bg-[#F5EDE3]/50 overflow-hidden">
        <HoneycombBackground />
        <div className="relative max-w-4xl mx-auto">
          <FadeInSection>
            <div className="flex items-center gap-3 justify-center mb-2">
              <MapPin className="text-[#6A704D]" size={24} />
              <h2 className="font-serif text-2xl md:text-3xl text-[#422E26]">
                Ubicación
              </h2>
              <BeeIcon className="w-5 h-5 opacity-30" />
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
      <section className="py-20 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
          <BeeIcon className="w-20 h-20 rotate-12" />
        </div>
        <div className="max-w-2xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#6A704D]/30" />
                <Clock className="text-[#6A704D]" size={28} />
                <div className="h-px w-8 bg-[#6A704D]/30" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-[#422E26] mb-2">
                Itinerario
              </h2>
              <p className="text-[#8C7B70] text-sm">Cómo será la tarde</p>
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
                time: "07:00 pm",
                title: "Picoteo y cierre",
                description: "Celebración y momentos inolvidables",
              },
            ].map((item, index) => (
              <FadeInSection key={item.title} delay={index * 150}>
                <div className="relative flex gap-6 mb-12 last:mb-0">
                  {/* Hexagonal dot */}
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center">
                    <svg width="56" height="64" viewBox="0 0 56 64" className="absolute">
                      <path d="M28 0L53.98 16v32L28 64 2.02 48V16L28 0z" fill="#F5EDE3" stroke="#6A704D" strokeWidth="2" />
                    </svg>
                    <span className="relative z-10 text-xs font-semibold text-[#6A704D] w-14 h-14 flex items-center justify-center">
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

      <SectionDivider />

      {/* RSVP CTA Section */}
      <section className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-[#F5EDE3]/50 to-[#EDE2D2] overflow-hidden">
        <HoneycombBackground />
        <div className="absolute top-8 left-8 opacity-10 pointer-events-none -rotate-12">
          <BeeIcon className="w-16 h-16 md:w-24 md:h-24" />
        </div>
        <div className="relative max-w-2xl mx-auto text-center">
          <FadeInSection>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#6A704D]/20" />
              <BeeIcon className="w-8 h-8 opacity-30" />
              <div className="h-px w-10 bg-[#6A704D]/20" />
            </div>
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
      <footer className="relative py-16 px-6 border-t border-[#6A704D]/10 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 flex justify-center opacity-[0.04] pointer-events-none">
          <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 10L60 0l20 10 20-10 20 10 20-10 20 10v30l-20 10-20-10-20 10-20-10-20 10-20-10V10z" fill="#6A704D" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#6A704D]/20" />
            <BeeIcon className="w-6 h-6 opacity-40" />
            <div className="h-px w-16 bg-[#6A704D]/20" />
          </div>
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
