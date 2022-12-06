type Props = {
  children?: any;
};

export default function Container(props: Props) {
  return (
    <section className="flex justify-center">
      <section className="w-2/3 justify-center">{props.children}</section>
    </section>
  );
}
