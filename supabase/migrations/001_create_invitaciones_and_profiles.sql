-- Crear tabla de invitaciones para el RSVP público
CREATE TABLE IF NOT EXISTS public.invitaciones (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nombre TEXT NOT NULL,
    email TEXT NOT NULL,
    asistira BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Crear tabla de profiles para roles de usuario (vinculada a auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
    email TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'user',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Políticas RLS para invitaciones
ALTER TABLE public.invitaciones ENABLE ROW LEVEL SECURITY;

-- Permitir insert anónimo para RSVP
CREATE POLICY "Allow anonymous insert" ON public.invitaciones
    FOR INSERT TO anon, authenticated
    WITH CHECK (true);

-- Permitir read solo a admin (vía profiles)
CREATE POLICY "Allow admin read" ON public.invitaciones
    FOR SELECT TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
        )
    );

-- Políticas RLS para profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow users read own profile" ON public.profiles
    FOR SELECT TO authenticated
    USING (id = auth.uid());

CREATE POLICY "Allow users update own profile" ON public.profiles
    FOR UPDATE TO authenticated
    USING (id = auth.uid());

-- Trigger para crear perfil automáticamente al registrar usuario
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, role)
    VALUES (NEW.id, NEW.email, 'user');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Crear trigger si no existe
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created'
    ) THEN
        CREATE TRIGGER on_auth_user_created
            AFTER INSERT ON auth.users
            FOR EACH ROW
            EXECUTE FUNCTION public.handle_new_user();
    END IF;
END $$;

-- Comentarios para documentación
COMMENT ON TABLE public.invitaciones IS 'Registros de RSVP para el evento BeeGlow';
COMMENT ON TABLE public.profiles IS 'Perfiles de usuario con roles para el panel de admin';
