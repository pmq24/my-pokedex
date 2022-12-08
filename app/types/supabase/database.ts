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
          user: string;
          pokemon: number;
        };
        Insert: {
          user: string;
          pokemon: number;
        };
        Update: {
          user?: string;
          pokemon?: number;
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
