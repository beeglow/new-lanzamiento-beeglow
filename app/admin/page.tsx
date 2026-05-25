import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { LogOut, Users, CheckCircle2, XCircle, Mail } from "lucide-react";
import { logout } from "./logout/actions";

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
    <main className="min-h-screen p-6 md:p-10 bg-[#EDE2D2]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="font-serif text-2xl md:text-3xl text-[#6A704D]">
              BeeGlow Admin
            </h1>
            <p className="text-[#8C7B70] text-sm mt-1">
              Panel de invitaciones al evento
            </p>
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

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white border border-[#6A704D]/10 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Users className="text-[#6A704D]" size={20} />
              <span className="text-[#8C7B70] text-sm">Total invitaciones</span>
            </div>
            <p className="text-3xl font-sans font-bold text-[#422E26]">
              {total}
            </p>
          </div>

          <div className="bg-white border border-[#6A704D]/10 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 className="text-[#6A704D]" size={20} />
              <span className="text-[#8C7B70] text-sm">Asistirán</span>
            </div>
            <p className="text-3xl font-sans font-bold text-[#6A704D]">
              {asisten}
            </p>
          </div>

          <div className="bg-white border border-[#6A704D]/10 rounded-xl p-6 shadow-sm">
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
        <div className="bg-white border border-[#6A704D]/10 rounded-xl overflow-hidden shadow-sm">
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
      </div>
    </main>
  );
}
