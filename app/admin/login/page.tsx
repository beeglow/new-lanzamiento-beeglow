"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { LogIn, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError("Credenciales incorrectas. Por favor intentá de nuevo.");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-[#EDE2D2]">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="font-[family:var(--font-montserrat)] text-3xl text-[#6A704D] mb-2">
            BeeGlow
          </h1>
          <p className="text-[#8C7B70] text-sm uppercase tracking-widest">
            Panel de administración
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white border border-[#6A704D]/10 rounded-2xl p-8 shadow-sm"
        >
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#F5EDE3] border border-[#6A704D]/20 text-[#422E26] placeholder-[#8C7B70] focus:outline-none focus:border-[#6A704D] focus:ring-1 focus:ring-[#6A704D]/30 transition-all"
              placeholder="beeglowbyapisfemina@gmail.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#422E26] mb-2"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#F5EDE3] border border-[#6A704D]/20 text-[#422E26] placeholder-[#8C7B70] focus:outline-none focus:border-[#6A704D] focus:ring-1 focus:ring-[#6A704D]/30 transition-all"
              placeholder="••••••••"
            />
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
            className="w-full py-3.5 px-6 rounded-lg bg-[#6A704D] text-white font-semibold text-base hover:bg-[#4F5439] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <LogIn size={18} />
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>

        <p className="text-center text-[#8C7B70] text-xs mt-6">
          Acceso exclusivo para administradores
        </p>
      </div>
    </main>
  );
}
