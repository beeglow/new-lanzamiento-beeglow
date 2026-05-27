import { Heart } from "lucide-react";
import Link from "next/link";

export default function LamentamosPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-[#EDE2D2]">
      <div className="max-w-lg mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-[#A6777F]/10 flex items-center justify-center">
            <Heart className="text-[#A6777F]" size={40} />
          </div>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl text-[#422E26] mb-4">
          Lamentamos que no puedas asistir
        </h1>

        <p className="text-[#8C7B70] text-lg mb-8 leading-relaxed">
          Entendemos que a veces no se puede. De todos modos, te agradecemos que
          nos lo hayas hecho saber.
        </p>

        <p className="text-[#8C7B70] text-sm mb-10">
          Si cambiás de opinión, siempre podés volver a confirmar.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#6A704D]/30 text-[#6A704D] hover:bg-[#6A704D]/10 transition-all"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
