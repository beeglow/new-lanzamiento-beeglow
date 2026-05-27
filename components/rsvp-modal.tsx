"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { X, Check, Calendar, AlertCircle } from "lucide-react";

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RsvpModal({ isOpen, onClose }: RsvpModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asistira: true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const supabase = createClient();
      const { error: insertError } = await supabase
        .from("invitaciones")
        .insert({
          nombre: formData.nombre.trim(),
          email: formData.email.trim(),
          asistira: formData.asistira,
        });

      if (insertError) {
        setError(insertError.message);
        return;
      }

      onClose();
      if (formData.asistira) {
        router.push("/exito?asistira=true");
      } else {
        router.push("/lamentamos");
      }
    } catch {
      setError("Ocurrió un error inesperado. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#422E26]/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl bg-white border border-[#6A704D]/10 p-6 md:p-8 animate-fade-in-up shadow-2xl shadow-[#422E26]/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8C7B70] hover:text-[#6A704D] transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <Calendar className="text-[#6A704D]" size={24} />
          <h2 className="text-2xl font-serif font-semibold text-[#422E26]">
            Confirmar asistencia
          </h2>
        </div>

        <p className="text-[#8C7B70] text-sm mb-6">
          Por favor completá tus datos para confirmar tu participación en el
          lanzamiento de BeeGlow.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-[#422E26] mb-2"
            >
              Nombre completo
            </label>
            <input
              id="nombre"
              type="text"
              required
              value={formData.nombre}
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-[#F5EDE3] border border-[#6A704D]/20 text-[#422E26] placeholder-[#8C7B70] focus:outline-none focus:border-[#6A704D] focus:ring-1 focus:ring-[#6A704D]/30 transition-all"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#422E26] mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-[#F5EDE3] border border-[#6A704D]/20 text-[#422E26] placeholder-[#8C7B70] focus:outline-none focus:border-[#6A704D] focus:ring-1 focus:ring-[#6A704D]/30 transition-all"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#422E26] mb-3">
              ¿Asistirás al evento?
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, asistira: true })}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all ${
                  formData.asistira
                    ? "bg-[#6A704D]/10 border-[#6A704D] text-[#6A704D]"
                    : "bg-[#F5EDE3] border-[#6A704D]/20 text-[#8C7B70] hover:border-[#6A704D]/40"
                }`}
              >
                <Check size={18} />
                Sí, asistiré
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, asistira: false })}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all ${
                  !formData.asistira
                    ? "bg-[#A6777F]/10 border-[#A6777F] text-[#A6777F]"
                    : "bg-[#F5EDE3] border-[#6A704D]/20 text-[#8C7B70] hover:border-[#6A704D]/40"
                }`}
              >
                <X size={18} />
                No podré
              </button>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-[#A6777F] text-sm bg-[#A6777F]/10 p-3 rounded-lg">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-lg bg-[#6A704D] text-white font-semibold text-base hover:bg-[#4F5439] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Enviando..." : "Confirmar asistencia"}
          </button>
        </form>
      </div>
    </div>
  );
}
