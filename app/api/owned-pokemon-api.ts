import type { Axios } from 'axios';
import type { TypedSupabaseClient } from '../types/supabase/typed-supabase-client';

type ConstructArgs = {
  axios: Axios;
  supabase: TypedSupabaseClient;
};

export default class OwnedPokemonAPI {
  constructor(args: ConstructArgs) {
    this.axios = args.axios;
    this.supabase = args.supabase;
  }

  async add(id: number): Promise<void> {
    const { data, error } = await this.supabase.auth.getUser();

    if (error) {
      throw error;
    }

    const userId = data.user.id;

    const result = await this.supabase
      .from('owned_pokemon')
      .insert({ user_id: userId, pokemon_id: id });

    if (result.error) {
      throw result.error;
    }
  }

  async del(id: number): Promise<void> {
    const { data, error } = await this.supabase.auth.getUser();

    if (error) {
      throw error;
    }

    const userId = data.user.id;

    const result = await this.supabase
      .from('owned_pokemon')
      .delete()
      .eq('user_id', userId)
      .eq('pokemon_id', id);

    debugger;
    if (result.error) {
      throw result.error;
    }
  }

  private readonly axios: Axios;
  private readonly supabase: TypedSupabaseClient;
}
