import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '../lib/database.types';

export type TypedSupabaseClient = SupabaseClient<Database>;

export type SupabaseOutletContext = { supabase: SupabaseClient<Database> };
