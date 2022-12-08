import { type Axios } from 'axios';
import { type Pokemon } from 'app/types/pokemon';

export class OwnedPokemonAPI {
  constructor(private readonly axios: Axios) {}

  async ownsPokemonWithID(id: number): Promise<boolean> {
    return this.getPokemonIDsFromLocalStorage().includes(id);
  }

  async addOwnedPokemonWithID(id: number): Promise<void> {
    let ownedPokemonIDs = this.getPokemonIDsFromLocalStorage();
    ownedPokemonIDs.push(id);

    // Removes duplicated IDs and sort ascendingly
    ownedPokemonIDs = Array.from(new Set(ownedPokemonIDs)).sort(
      (a, b) => a - b
    );

    localStorage.setItem('owned-pokemons', JSON.stringify(ownedPokemonIDs));
  }

  async removeOwnedPokemonWithID(id: number): Promise<void> {
    let ownedPokemonIDs = this.getPokemonIDsFromLocalStorage();
    const indexToRemove = ownedPokemonIDs.indexOf(id);

    if (indexToRemove !== -1) {
      ownedPokemonIDs.splice(indexToRemove, 1);
    }

    // Removes duplicated IDs and sort ascendingly
    ownedPokemonIDs = Array.from(new Set(ownedPokemonIDs)).sort(
      (a, b) => a - b
    );

    localStorage.setItem('owned-pokemons', JSON.stringify(ownedPokemonIDs));
  }

  async findAllOwnedPokemon(): Promise<Pokemon[]> {
    const ids = this.getPokemonIDsFromLocalStorage().sort((a, b) => a - b);

    const pokemons: Pokemon[] = [];
    for (const id of ids) {
      const res = await this.axios.get<Pokemon>(`/pokemon/${id}`);
      pokemons.push(res.data);
    }

    return pokemons;
  }

  private getPokemonIDsFromLocalStorage(): number[] {
    const localStorageValue = localStorage.getItem('owned-pokemons');

    if (!localStorageValue) {
      return [];
    }

    return JSON.parse(localStorageValue);
  }
}
