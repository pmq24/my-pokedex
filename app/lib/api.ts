import axios, { type Axios } from 'axios';
import { PokemonAPI } from './pokemon-api';

class API {
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://pokeapi.co/api/v2/',
    });
    this.pokemons = new PokemonAPI(this.axios);
  }

  public readonly pokemons: PokemonAPI;

  private readonly axios: Axios;
}

const api = new API();
export default api;
