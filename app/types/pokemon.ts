export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: Stat[];
  moves: Move[];
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: StatName;
    url: string;
  };
};

export const StatNameValues = [
  'hp',
  'attack',
  'defense',
  'special-attack',
  'special-defense',
] as const;
type StatName = typeof StatNameValues[number];

export type Move = {
  name: string;
};
