// import {createClient} from '@supabase/supabase-js'

// export const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// )

// export default supabase;


import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL)
console.log("Supabase Key:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
console.log(process.env)

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)

export default supabase;
