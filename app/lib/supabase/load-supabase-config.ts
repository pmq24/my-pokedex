type SupabaseConfig = {
  url: string;
  key: string;
};

export default function loadSupabaseConfig(): SupabaseConfig {
  return {
    url: process.env.SUPABASE_URL!,
    key: process.env.SUPABASE_KEY!,
  };
}
