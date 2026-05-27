import { CheckCircle2, Calendar, MapPin, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import CelebrationConfetti from "@/components/celebration-confetti";

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
        <pattern id="honeycomb-exito" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
          <path d="M28 0L56 16.5v33L28 66 0 49.5v-33L28 0z" fill="none" stroke="#6A704D" strokeWidth="1.5" />
          <path d="M28 100L56 83.5v-33L28 34 0 50.5v33L28 100z" fill="none" stroke="#6A704D" strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#honeycomb-exito)" />
    </svg>
  );
}

function PollenParticles() {
  return (
    <>
      {[
        { top: "15%", left: "20%", size: 4, delay: "0s", duration: "5s" },
        { top: "30%", left: "80%", size: 3, delay: "1s", duration: "6s" },
        { top: "50%", left: "10%", size: 5, delay: "0.5s", duration: "4s" },
        { top: "70%", left: "85%", size: 4, delay: "2s", duration: "5.5s" },
        { top: "25%", left: "50%", size: 3, delay: "1.5s", duration: "4.5s" },
        { top: "85%", left: "35%", size: 4, delay: "0.8s", duration: "6s" },
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

export default async function ExitoPage({
  searchParams,
}: {
  searchParams: Promise<{ asistira?: string }>;
}) {
  const { asistira } = await searchParams;
  const mostrarConfeti = asistira === "true";

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 py-12 bg-[#EDE2D2] overflow-hidden">
      {mostrarConfeti && <CelebrationConfetti />}

      {/* Background pattern */}
      <HoneycombBackground />

      {/* Floating pollen */}
      <PollenParticles />

      {/* Decorative bees */}
      <div className="absolute top-12 right-12 md:top-20 md:right-24 opacity-15 pointer-events-none rotate-12 animate-bounce" style={{ animationDuration: "3.5s" }}>
        <BeeIcon className="w-14 h-14 md:w-20 md:h-20" />
      </div>
      <div className="absolute bottom-16 left-10 md:bottom-24 md:left-20 opacity-10 pointer-events-none -rotate-12" style={{ animationDuration: "4s" }}>
        <BeeIcon className="w-12 h-12 md:w-16 md:h-16 scale-x-[-1]" />
      </div>

      {/* Main card */}
      <div className="relative z-10 w-full max-w-lg">
        <div className="bg-white border border-[#6A704D]/10 rounded-2xl shadow-sm overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#D4AF37] via-[#6A704D] to-[#A6777F]" />

          <div className="px-8 py-10 md:px-12 md:py-14 text-center">
            {/* Success icon with hexagon background */}
            <div className="mb-8 flex justify-center">
              <div className="relative flex items-center justify-center">
                <svg width="96" height="110" viewBox="0 0 96 110" className="absolute opacity-[0.08]">
                  <path d="M48 0L93.11 26v58L48 110 2.89 84V26L48 0z" fill="#6A704D" />
                </svg>
                <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#6A704D]/15 to-[#6A704D]/5 flex items-center justify-center ring-2 ring-[#6A704D]/20 ring-offset-2 ring-offset-white">
                  <CheckCircle2 className="text-[#6A704D]" size={40} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 mb-6 opacity-40">
              <div className="h-px w-10 bg-[#6A704D]" />
              <BeeIcon className="w-5 h-5 opacity-60" />
              <div className="h-px w-10 bg-[#6A704D]" />
            </div>

            <h1 className="font-serif text-3xl md:text-4xl text-[#422E26] mb-4">
              ¡Gracias por confirmar!
            </h1>

            <p className="text-[#8C7B70] text-lg mb-8 leading-relaxed">
              Te esperamos para el lanzamiento de BeeGlow.
            </p>

            {/* Event details card */}
            <div className="bg-[#F5EDE3]/60 border border-[#6A704D]/10 rounded-xl p-5 mb-8 text-left space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#6A704D]/10 flex items-center justify-center flex-shrink-0">
                  <Calendar size={16} className="text-[#6A704D]" />
                </div>
                <span className="text-[#422E26] font-medium text-sm">29 de mayo de 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#6A704D]/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-[#6A704D]" />
                </div>
                <span className="text-[#422E26] font-medium text-sm">18:00 hs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#6A704D]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#6A704D]" />
                </div>
                <span className="text-[#422E26] font-medium text-sm">General Pico, La Pampa</span>
              </div>
            </div>

            {/* Footer note */}
            <p className="text-[#8C7B70] text-sm mb-8">
              Guardá la fecha. ¡Nos vemos pronto!
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#6A704D] text-white hover:bg-[#4F5439] active:scale-[0.98] transition-all shadow-sm"
            >
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>
          </div>
        </div>

        {/* Bottom wax decoration */}
        <div className="flex justify-center mt-3 opacity-[0.06] pointer-events-none">
          <svg width="120" height="24" viewBox="0 0 120 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L40 0l20 10 20-10 20 10v10l-20 10-20-10-20 10-20-10V6z" fill="#6A704D" />
          </svg>
        </div>
      </div>
    </main>
  );
}
