import { capitalize } from 'lodash';
import { type Move } from '../types/move';

export type Props = {
  moves: Move[];
};

export default function MovesTable({ moves }: Props) {
  return (
    <div className="w-full flex flex-wrap">
      {moves.map((move) => (
        <MoveCard key={move.move.name} {...move} />
      ))}
    </div>
  );
}

function MoveCard(move: Move) {
  return (
    <article className="card shadow-md w-1/4 gap-2">
      <div className="card-body">
        <h4 className="card-title">{capitalize(move.move.name)}</h4>
      </div>
    </article>
  );
}
