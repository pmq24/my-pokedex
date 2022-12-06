export default function PokemonDetails() {
  return (
    <>
      <header className="navbar">
        <img src="/postco.svg" alt="PostCo's logo" />
      </header>
      <input
        type="text"
        placeholder="Find pokemon..."
        className="input w-full max-w-xs"
      />
    </>
  );
}
