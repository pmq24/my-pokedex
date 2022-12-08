import axios, { type Axios } from 'axios';
import { OwnedPokemonAPI } from './owned-pokemon-api';
import { PokemonAPI } from './pokemon-api';

class API {
  constructor() {
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
