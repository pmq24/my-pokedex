import type { Axios } from 'axios';
import axios from 'axios';
import type { TypedSupabaseClient } from 'app/types/supabase/typed-supabase-client';
import PokemonAPI from './pokemon-api';

export default class API {
  constructor(private readonly supabase: TypedSupabaseClient) {
    this.axios = axios.create({
      baseURL: 'https://pokeapi.co/api/v2/',
    });

    this.pokemons = new PokemonAPI({ axios: this.axios, supabase });
  }

  public readonly pokemons: PokemonAPI;

  private readonly axios: Axios;
}
