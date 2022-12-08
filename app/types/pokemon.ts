import { type Move } from './move';
import { type Stat } from './stat';
import { type Type } from './type';

type URL = string;

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: Stat[];
  moves: Move[];
  types: Type[];
  sprites: {
    back_default: URL;
    back_female?: URL;
    back_shiny: URL;
    back_shiny_female?: URL;
    front_default: URL;
    front_female?: URL;
    front_shiny: URL;
    front_shiny_female?: URL;
    other: {
      dream_world: {
        front_default: URL;
        front_female?: URL;
      };
      home: {
        front_default: URL;
        front_female?: URL;
        front_shiny: URL;
        front_shiny_female?: URL;
      };
      'official-artwork': {
        front_default: URL;
      };
    };
  };
};
