import { createContext } from 'react';

type Pokemon = any;

export interface IPokemonStore {
  getAllIDs(): Promise<number[]>;
  getAllPokemons: () => Promise<Pokemon[]>;
  add: (id: number) => Promise<void>;
  remove: (id: number) => Promise<void>;
}

export class LocalStoragePokemonStore implements IPokemonStore {
  async getAllIDs(): Promise<number[]> {
    const localStorageValue = localStorage.getItem('pokemons');

    if (!localStorageValue) {
      return [];
    }

    return JSON.parse(localStorageValue);
  }

  async getAllPokemons(): Promise<Pokemon[]> {
    const pokemonIDs = await this.getAllIDs();

    const pokemons = [];
    for (const id of pokemonIDs) {
      pokemons.push(await this.getPokemonData(id));
    }

    return pokemons;
  }

  async add(id: number): Promise<void> {
    const localStorageValue = localStorage.getItem('pokemons');

    const pokemonIDs = !localStorageValue ? [] : JSON.parse(localStorageValue);

    pokemonIDs.push(id);

    localStorage.setItem('pokemons', JSON.stringify(pokemonIDs));
  }

  async remove(id: number): Promise<void> {
    const ids = await this.getAllIDs();
    const indexToRemove = ids.indexOf(id);

    if (indexToRemove !== -1) {
      ids.splice(indexToRemove, 1);
    }

    localStorage.setItem('pokemons', JSON.stringify(ids));
  }

  private async getPokemonData(id: number): Promise<Pokemon> {
    return await (
      await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    ).json();
  }
}

export const PokemonStoreContext = createContext<IPokemonStore>(
  new LocalStoragePokemonStore()
);
