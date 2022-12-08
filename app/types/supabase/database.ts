export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      owned_pokemon: {
        Row: {
          user_id: string;
          pokemon_id: number;
        };
        Insert: {
          user_id: string;
          pokemon_id: number;
        };
        Update: {
          user_id?: string;
          pokemon_id?: number;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
