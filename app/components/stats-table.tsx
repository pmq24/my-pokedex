type StatName =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense';
export type Props = {
  stats: Record<
    StatName,
    {
      base_stat: number;
      effort: number;
    }
  >;
};

export default function StatsTable({ stats }: Props) {
  return (
    <div className="w-full prose">
      <h1>Stats</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Base stat</th>
            <th>Effort</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HP</td>
            <td>{stats.hp?.base_stat ?? '?'}</td>
            <td>{stats.hp?.effort ?? '?'}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{stats.attack?.base_stat ?? '?'}</td>
            <td>{stats.attack?.effort ?? '?'}</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td>{stats.defense?.base_stat ?? '?'}</td>
            <td>{stats.defense?.effort ?? '?'}</td>
          </tr>
          <tr>
            <td>Special Attack</td>
            <td>{stats['special-attack']?.base_stat ?? '?'}</td>
            <td>{stats['special-attack']?.effort ?? '?'}</td>
          </tr>
          <tr>
            <td>Special Defense</td>
            <td>{stats['special-defense']?.base_stat ?? '?'}</td>
            <td>{stats['special-defense']?.effort ?? '?'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
