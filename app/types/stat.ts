export type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: StatName;
    url: string;
  };
};

type StatName =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense';
