import axios, { type Axios } from 'axios';
import type { TypedSupabaseClient } from '../types/supabase/typed-supabase-client';
import { OwnedPokemonAPI } from './owned-pokemon-api';
import { PokemonAPI } from './pokemon-api';

class API {
  constructor(private readonly supabase: TypedSupabaseClient) {
    this.axios = axios.create({
      baseURL: 'https://pokeapi.co/api/v2/',
    });
    this.pokemons = new PokemonAPI(this.axios);
    this.ownedPokemons = new OwnedPokemonAPI(this.axios);
  }

  public readonly pokemons: PokemonAPI;
  public readonly ownedPokemons: OwnedPokemonAPI;

  private readonly axios: Axios;
}

const api = new API();
export default api;
