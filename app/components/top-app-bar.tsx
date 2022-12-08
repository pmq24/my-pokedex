import Logo from './logo';
import SearchField from './search-field';

export default function TopAppBar() {
  return (
    <header className="flex p-4 shadow-md">
      <section className="w-1/3">
        <Logo />
      </section>
      <section className="w-1/3">
        <SearchField />
      </section>
    </header>
  );
}
