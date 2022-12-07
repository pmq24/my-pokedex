import { type Pokemon } from '../types/pokemon';
import { type Axios, AxiosError } from 'axios';

export class PokemonAPI {
  constructor(private readonly axios: Axios) {}

  async findPokemonByID(id: number): Promise<Pokemon> {
    if (isNaN(id) || id <= 0) {
      throw new InvalidPokemonIDError(id);
    }

    try {
      const res = await this.axios.get<Pokemon>(`/pokemons/${id}`);
      return res.data;
    } catch (e) {
      throw e instanceof AxiosError && e.code === '404'
        ? new PokemonDoesntExistError(id)
        : e;
    }
  }
}

class InvalidPokemonIDError extends Error {
  constructor(id: number) {
    super(`${id} is not a valid Pokemon ID`);
  }
}

class PokemonDoesntExistError extends Error {
  constructor(id: number) {
    super(`Pokemon with ID ${id} does not exist`);
  }
}
