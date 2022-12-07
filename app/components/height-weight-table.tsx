export type Props = {
  height?: number;
  weight?: number;
};

export default function HeightWeightTable({ height, weight }: Props) {
  return (
    <div className="w-full prose">
      <h1>Size and Mass</h1>
      <table className="table w-full">
        <tbody>
          <tr>
            <td>Height</td>
            <td>{height ?? '?'}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{weight ?? '?'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
