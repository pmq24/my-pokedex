import type { Axios } from 'axios';
import { AxiosError } from 'axios';
import type { Pokemon } from '../types/pokemon';
import type { TypedSupabaseClient } from '../types/supabase/typed-supabase-client';

type ConstructArgs = {
  axios: Axios;
  supabase: TypedSupabaseClient;
};

export default class PokemonAPI {
  constructor(args: ConstructArgs) {
    this.axios = args.axios;
    this.supabase = args.supabase;
  }

  async getPokemon(id: number): Promise<Pokemon> {
    try {
      return (await this.axios.get(`/pokemon/${id}`)).data;
    } catch (e) {
      if (e instanceof AxiosError && e.code === '404') {
        throw new PokemonDoesntExistError();
      } else {
        throw e;
      }
    }
  }

  async catchPokemon(id: number): Promise<void> {
    const userId = await this.getUserId();

    const { error } = await this.supabase
      .from('owned_pokemon')
      .insert({ user_id: userId, pokemon_id: id });

    if (error) {
      throw error;
    }
  }

  async releasePokemon(id: number): Promise<void> {
    const userId = await this.getUserId();

    const { error } = await this.supabase
      .from('owned_pokemon')
      .delete()
      .eq('user_id', userId)
      .eq('pokemon_id', id);

    if (error) {
      throw error;
    }
  }

  async getOwnedPokemons(): Promise<Pokemon[]> {
    const userId = await this.getUserId();

    const { data, error } = await this.supabase
      .from('owned_pokemon')
      .select('pokemon_id')
      .eq('user_id', userId);

    if (error) {
      throw error;
    }

    const ids = data.map((record) => record.pokemon_id) ?? [];

    const pokemons: Pokemon[] = [];

    for (const id of ids) {
      pokemons.push(await this.getPokemon(id));
    }

    return pokemons;
  }

  async ownsPokemon(id: number): Promise<boolean> {
    const userId = await this.getUserId();

    const ownedPokemons = await this.supabase
      .from('owned_pokemon')
      .select('pokemon_id')
      .eq('user_id', userId);

    return !!ownedPokemons.data
      ?.map((record) => record.pokemon_id)
      .includes(id);
  }

  private async getUserId(): Promise<string> {
    const { data, error } = await this.supabase.auth.getUser();

    if (error || !data.user.id) {
      throw new NotLoggedInError();
    }

    return data.user.id;
  }

  private readonly axios: Axios;
  private readonly supabase: TypedSupabaseClient;
}

class NotLoggedInError extends Error {
  constructor() {
    super('Not logged in');
  }
}

class PokemonDoesntExistError extends Error {
  constructor() {
    super('Pokemon does not exist');
  }
}
