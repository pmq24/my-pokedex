type Props = {
  baseURL?: string;
};

export default function Logo({ baseURL }: Props) {
  return (
    <a href="http://localhost:3000">
      <img src="/postco.svg" alt="PostCo's logo" />
    </a>
  );
}
