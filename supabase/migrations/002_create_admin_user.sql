-- ============================================================
-- SQL PARA CREAR USUARIO ADMINISTRADOR
-- ============================================================
-- Este script hace todo de una vez:
-- 1. Crea el usuario admin en auth.users
-- 2. Confirma el email automáticamente
-- 3. Cambia el rol a 'admin' en la tabla profiles
-- 4. Verifica que todo quedó correctamente
--
-- INSTRUCCIONES:
-- 1. Andá al SQL Editor de tu proyecto de Supabase
-- 2. Creá una "New Query"
-- 3. Copiá y pegá TODO este contenido
-- 4. Dale a "Run"
-- 5. Fijate el resultado de la verificación al final
-- ============================================================

-- PASO 1: Crear usuario admin (solo si no existe)
-- Usamos un bloque DO para manejar la lógica condicional
DO $$
DECLARE
    admin_id UUID := gen_random_uuid();
BEGIN
    -- Verificar si ya existe un usuario con ese email
    IF NOT EXISTS (
        SELECT 1 
        FROM auth.users 
        WHERE email = 'admin@somosbeeglow.com' 
        LIMIT 1
    ) THEN
        INSERT INTO auth.users (
            instance_id,
            id,
            aud,
            role,
            email,
            encrypted_password,
            email_confirmed_at,
            raw_app_meta_data,
            raw_user_meta_data,
            created_at,
            updated_at
        ) VALUES (
            '00000000-0000-0000-0000-000000000000',  -- instance_id por defecto
            admin_id,                                  -- id único generado
            'authenticated',                           -- audience
            'authenticated',                           -- role
            'admin@somosbeeglow.com',                  -- email del admin
            crypt('BeeGlow_Admin2026!', gen_salt('bf')), -- contraseña encriptada
            NOW(),                                     -- email confirmado inmediatamente
            '{"provider":"email","providers":["email"]}', -- metadata de proveedor
            '{}',                                      -- metadata vacía
            NOW(),                                     -- fecha de creación
            NOW()                                      -- fecha de actualización
        );
        
        RAISE NOTICE 'Usuario admin creado exitosamente con ID: %', admin_id;
    ELSE
        RAISE NOTICE 'El usuario admin ya existe. Saltando creación.';
    END IF;
END $$;

-- PASO 2: Confirmar email del admin
-- (Por si el email no quedó confirmado en el paso anterior)
UPDATE auth.users
SET email_confirmed_at = NOW()
WHERE email = 'admin@somosbeeglow.com'
  AND email_confirmed_at IS NULL;

-- PASO 3: Cambiar el rol a 'admin' en la tabla profiles
-- El trigger creó automáticamente el perfil con role = 'user'
-- Lo actualizamos a 'admin'
UPDATE public.profiles
SET role = 'admin'
WHERE email = 'admin@somosbeeglow.com';

-- PASO 4: VERIFICACIÓN FINAL
-- Mostramos los datos para confirmar que todo quedó bien
SELECT 
    '=== DATOS DEL USUARIO ADMIN ===' as info;

SELECT 
    u.id,
    u.email,
    u.email_confirmed_at,
    u.created_at,
    p.role,
    CASE 
        WHEN p.role = 'admin' THEN '✅ Todo correcto - Usuario admin listo'
        ELSE '⚠️ Atención: El rol no es admin'
    END as status
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
WHERE u.email = 'admin@somosbeeglow.com';

-- ============================================================
-- NOTAS IMPORTANTES:
-- ============================================================
-- - Si el resultado muestra role = 'admin', podés loguearte
--   en http://localhost:3000/admin/login
-- - Email: admin@somosbeeglow.com
-- - Password: BeeGlow_Admin2026!
-- 
-- Si querés cambiar el email o password, ejecutá este script
-- de nuevo con los nuevos valores.
-- ============================================================
