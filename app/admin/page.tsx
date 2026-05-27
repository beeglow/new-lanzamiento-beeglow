import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { LogOut, Users, CheckCircle2, XCircle, Mail } from "lucide-react";
import { logout } from "./logout/actions";

function BeeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Wings */}
      <ellipse cx="16" cy="16" rx="10" ry="7" fill="#D4AF37" fillOpacity="0.35" />
      <ellipse cx="32" cy="16" rx="10" ry="7" fill="#D4AF37" fillOpacity="0.25" />
      {/* Body */}
      <ellipse cx="24" cy="28" rx="11" ry="13" fill="#E8A824" />
      {/* Stripes */}
      <path d="M16 23h16" stroke="#422E26" strokeWidth="3" strokeLinecap="round" />
      <path d="M15 29h18" stroke="#422E26" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 35h16" stroke="#422E26" strokeWidth="3" strokeLinecap="round" />
      {/* Head */}
      <circle cx="24" cy="14" r="6" fill="#E8A824" />
      {/* Eyes */}
      <circle cx="22" cy="13" r="1.2" fill="#422E26" />
      <circle cx="26" cy="13" r="1.2" fill="#422E26" />
      {/* Antennae */}
      <path d="M21 9c-1-3-3-4-3-4" stroke="#422E26" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M27 9c1-3 3-4 3-4" stroke="#422E26" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HoneycombPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="honeycomb" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
          <path
            d="M28 0L56 16.5v33L28 66 0 49.5v-33L28 0z"
            fill="none"
            stroke="#6A704D"
            strokeWidth="1.5"
          />
          <path
            d="M28 100L56 83.5v-33L28 34 0 50.5v33L28 100z"
            fill="none"
            stroke="#6A704D"
            strokeWidth="1.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#honeycomb)" />
    </svg>
  );
}


function HoneyWave() {
  return (
    <div className="w-full overflow-hidden mb-10 opacity-30">
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-6" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 20 Q 30 5, 60 20 T 120 20 T 180 20 T 240 20 T 300 20 T 360 20 T 420 20 T 480 20 T 540 20 T 600 20 T 660 20 T 720 20 T 780 20 T 840 20 T 900 20 T 960 20 T 1020 20 T 1080 20 T 1140 20 T 1200 20"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M0 28 Q 40 12, 80 28 T 160 28 T 240 28 T 320 28 T 400 28 T 480 28 T 560 28 T 640 28 T 720 28 T 800 28 T 880 28 T 960 28 T 1040 28 T 1120 28 T 1200 28"
          fill="none"
          stroke="#E8A824"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

function FlowerCorner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <path d="M60 120c0-20 10-40 5-60" stroke="#6A704D" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      <path d="M60 120c-5-15-15-30-10-50" stroke="#6A704D" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
      {/* Leaves */}
      <ellipse cx="50" cy="75" rx="8" ry="4" fill="#6A704D" opacity="0.15" transform="rotate(-30 50 75)" />
      <ellipse cx="70" cy="85" rx="8" ry="4" fill="#6A704D" opacity="0.12" transform="rotate(30 70 85)" />
      {/* Petals */}
      <circle cx="60" cy="35" r="10" fill="#A6777F" opacity="0.12" />
      <circle cx="45" cy="45" r="10" fill="#A6777F" opacity="0.1" />
      <circle cx="75" cy="45" r="10" fill="#A6777F" opacity="0.1" />
      <circle cx="50" cy="60" r="10" fill="#A6777F" opacity="0.08" />
      <circle cx="70" cy="60" r="10" fill="#A6777F" opacity="0.08" />
      {/* Center */}
      <circle cx="60" cy="48" r="6" fill="#D4AF37" opacity="0.2" />
    </svg>
  );
}

function PollenParticles() {
  return (
    <>
      {[
        { top: "15%", left: "10%", size: 6, delay: "0s", duration: "4s" },
        { top: "25%", left: "85%", size: 4, delay: "1s", duration: "5s" },
        { top: "45%", left: "5%", size: 5, delay: "0.5s", duration: "6s" },
        { top: "60%", left: "92%", size: 3, delay: "2s", duration: "4.5s" },
        { top: "75%", left: "20%", size: 4, delay: "1.5s", duration: "5.5s" },
        { top: "35%", left: "50%", size: 3, delay: "0.8s", duration: "4s" },
        { top: "85%", left: "70%", size: 5, delay: "2.5s", duration: "6s" },
        { top: "10%", left: "60%", size: 4, delay: "3s", duration: "5s" },
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
            opacity: 0.25,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </>
  );
}


function WaxBase() {
  return (
    <div className="flex justify-center mt-2 opacity-[0.08] pointer-events-none">
      <svg viewBox="0 0 120 40" className="w-32 h-10" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10L40 0l20 10 20-10 20 10v20l-20 10-20-10-20 10-20-10V10z" fill="#E8A824" />
        <path d="M0 20L20 10v20l-20 10V20z" fill="#D4AF37" />
        <path d="M100 10l20-10v20l-20 10V10z" fill="#D4AF37" />
      </svg>
    </div>
  );
}

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  // Verify admin role
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== "admin") {
    redirect("/admin/login");
  }

  // Fetch all invitations
  const { data: invitaciones, error } = await supabase
    .from("invitaciones")
    .select("*")
    .order("created_at", { ascending: false });

  const total = invitaciones?.length ?? 0;
  const asisten =
    invitaciones?.filter((i) => i.asistira).length ?? 0;
  const noAsisten = total - asisten;

  return (
    <main className="relative min-h-screen p-6 md:p-10 bg-[#EDE2D2] overflow-hidden">
      {/* Decorative honeycomb background */}
      <HoneycombPattern />

      {/* Floating pollen particles */}
      <PollenParticles />

      {/* Floating decorative bee — top right with gentle bounce */}
      <div
        className="absolute top-8 right-8 md:top-12 md:right-16 opacity-20 pointer-events-none rotate-12 animate-bounce"
        style={{ animationDuration: "3s" }}
      >
        <BeeIcon className="w-16 h-16 md:w-24 md:h-24" />
      </div>

      {/* Flower corners */}
      <FlowerCorner className="absolute bottom-4 left-4 w-24 h-24 md:w-32 md:h-32 pointer-events-none opacity-60" />
      <FlowerCorner className="absolute bottom-4 right-4 w-24 h-24 md:w-32 md:h-32 pointer-events-none opacity-60 scale-x-[-1]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <BeeIcon className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
            <div>
              <h1 className="font-serif text-2xl md:text-3xl text-[#6A704D]">
                BeeGlow Admin
              </h1>
              <p className="text-[#8C7B70] text-sm mt-1">
                Panel de invitaciones al evento
              </p>
            </div>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#A6777F]/30 text-[#A6777F] hover:bg-[#A6777F]/10 transition-all text-sm"
            >
              <LogOut size={16} />
              Cerrar sesión
            </button>
          </form>
        </div>

        {/* Honey wave divider */}
        <HoneyWave />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="relative bg-white border border-[#6A704D]/10 border-t-4 border-t-[#D4AF37] rounded-xl p-6 shadow-sm overflow-hidden">
            <svg className="absolute top-3 right-3 w-8 h-9 opacity-[0.08] pointer-events-none" viewBox="0 0 64 72" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 0L61.44 18v36L32 72 2.56 54V18L32 0z" fill="none" stroke="#6A704D" strokeWidth="2" />
            </svg>
            <div className="flex items-center gap-3 mb-2">
              <Users className="text-[#6A704D]" size={20} />
              <span className="text-[#8C7B70] text-sm">Total invitaciones</span>
            </div>
            <p className="text-3xl font-sans font-bold text-[#422E26]">
              {total}
            </p>
          </div>

          <div className="relative bg-white border border-[#6A704D]/10 border-t-4 border-t-[#6A704D] rounded-xl p-6 shadow-sm overflow-hidden">
            <svg className="absolute top-3 right-3 w-8 h-9 opacity-[0.08] pointer-events-none" viewBox="0 0 64 72" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 0L61.44 18v36L32 72 2.56 54V18L32 0z" fill="none" stroke="#6A704D" strokeWidth="2" />
            </svg>
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 className="text-[#6A704D]" size={20} />
              <span className="text-[#8C7B70] text-sm">Asistirán</span>
            </div>
            <p className="text-3xl font-sans font-bold text-[#6A704D]">
              {asisten}
            </p>
          </div>

          <div className="relative bg-white border border-[#6A704D]/10 border-t-4 border-t-[#A6777F] rounded-xl p-6 shadow-sm overflow-hidden">
            <svg className="absolute top-3 right-3 w-8 h-9 opacity-[0.08] pointer-events-none" viewBox="0 0 64 72" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 0L61.44 18v36L32 72 2.56 54V18L32 0z" fill="none" stroke="#6A704D" strokeWidth="2" />
            </svg>
            <div className="flex items-center gap-3 mb-2">
              <XCircle className="text-[#A6777F]" size={20} />
              <span className="text-[#8C7B70] text-sm">No asistirán</span>
            </div>
            <p className="text-3xl font-sans font-bold text-[#A6777F]">
              {noAsisten}
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="relative bg-white border border-[#6A704D]/10 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#6A704D]/10">
                  <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-[#8C7B70] font-medium">
                    Nombre
                  </th>
                  <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-[#8C7B70] font-medium">
                    Email
                  </th>
                  <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-[#8C7B70] font-medium">
                    Estado
                  </th>
                  <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-[#8C7B70] font-medium hidden md:table-cell">
                    Fecha
                  </th>
                </tr>
              </thead>
              <tbody>
                {error || !invitaciones || invitaciones.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-12 text-center text-[#8C7B70]"
                    >
                      {error
                        ? "Error al cargar las invitaciones"
                        : "Aún no hay invitaciones registradas"}
                    </td>
                  </tr>
                ) : (
                  invitaciones.map((inv) => (
                    <tr
                      key={inv.id}
                      className="border-b border-[#6A704D]/5 hover:bg-[#F5EDE3] transition-colors"
                    >
                      <td className="px-6 py-4 text-[#422E26] font-medium">
                        {inv.nombre}
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={`mailto:${inv.email}`}
                          className="flex items-center gap-2 text-[#8C7B70] hover:text-[#6A704D] transition-colors text-sm"
                        >
                          <Mail size={14} />
                          {inv.email}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                            inv.asistira
                              ? "bg-[#6A704D]/10 text-[#6A704D]"
                              : "bg-[#A6777F]/10 text-[#A6777F]"
                          }`}
                        >
                          {inv.asistira ? (
                            <>
                              <CheckCircle2 size={12} />
                              Asistirá
                            </>
                          ) : (
                            <>
                              <XCircle size={12} />
                              No asistirá
                            </>
                          )}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[#8C7B70] text-sm hidden md:table-cell">
                        {new Date(inv.created_at).toLocaleDateString("es-AR", {
                          timeZone: "America/Argentina/Buenos_Aires",
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Wax base detail below table */}
        <WaxBase />
      </div>
    </main>
  );
}
