import type { Axios } from 'axios';
import axios from 'axios';
import type { TypedSupabaseClient } from 'app/types/supabase/typed-supabase-client';
import OwnedPokemonAPI from './owned-pokemon-api';
import PokemonAPI from './pokemon-api';

export default class API {
  constructor(private readonly supabase: TypedSupabaseClient) {
    this.axios = axios.create({
      baseURL: 'https://pokeapi.co/api/v2/',
    });

    this.ownedPokemons = new OwnedPokemonAPI({ axios: this.axios, supabase });
    this.pokemons = new PokemonAPI({ axios: this.axios, supabase });
  }

  public readonly pokemons: PokemonAPI;
  public readonly ownedPokemons: OwnedPokemonAPI;

  private readonly axios: Axios;
}
