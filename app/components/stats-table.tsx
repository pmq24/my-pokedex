import { capitalize } from 'lodash';
import { type Stat } from '../types/stat';

export type Props = {
  stats: Stat[];
};

export default function StatsTable({ stats }: Props) {
  return (
    <div className="w-full prose">
      <h1>Stats</h1>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th className="w-1/2">Base stat</th>
            <th></th>
            <th>Effort</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat) => (
            <StatRow key={stat.stat.name} {...stat} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const accentForStat = {
  hp: 'progress-success',
  attack: 'progress-error',
  defense: 'progress-info',
  'special-attack': 'progress-primary',
  'special-defense': 'progress-secondary',
  speed: 'progress-accent',
};

function StatRow(props: Stat) {
  return (
    <tr>
      <th>{capitalize(props.stat.name)}</th>
      <td>
        <progress
          className={`progress ${accentForStat[props.stat.name]}`}
          value={props.base_stat}
          max="255"
        />
      </td>
      <td>{props.base_stat ?? '?'}</td>
      <td>{props.effort ?? '?'}</td>
    </tr>
  );
}
