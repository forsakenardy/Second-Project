import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_KEY,
    import.meta.env.VITE_SUPABASE_URL
)

export default supabase