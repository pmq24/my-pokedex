import { capitalize } from 'lodash';

type Type =
  | 'normal'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dark'
  | 'dragon'
  | 'steel'
  | 'fairy';

type Props = {
  types: Type[];
};

export default function TypeList(props: Props) {
  return (
    <div className="flex">
      {props.types.map((type) => (
        <span className="badge mr-1" key={type}>
          {capitalize(type)}
        </span>
      ))}
    </div>
  );
}
