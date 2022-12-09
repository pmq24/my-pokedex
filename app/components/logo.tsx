type Props = {
  baseURL?: string;
};

export default function Logo({ baseURL }: Props) {
  return (
    <a href={baseURL}>
      <img src="/postco.svg" alt="PostCo's logo" />
    </a>
  );
}
