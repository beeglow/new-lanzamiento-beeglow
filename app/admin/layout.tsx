import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Verify session exists on layout mount
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // For login page, always render
  // For other pages, middleware handles redirect
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {children}
    </div>
  );
}
