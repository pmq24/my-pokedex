import Logo from './logo';
import SearchField from './search-field';

export default function TopAppBar() {
  return (
    <header className="p-4 shadow-md">
      <div className="w-10/12 flex m-auto">
        <div className="w-3/12">
          <Logo />
        </div>
        <div className="w-6/12">
          <SearchField />
        </div>
        <div className="w-3/12">
          
        </div>
      </div>
    </header>
  );
}
