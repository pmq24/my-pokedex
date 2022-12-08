import { useOutletContext } from '@remix-run/react';
import { useState, useEffect } from 'react';
import Logo from './logo';
import SearchField from './search-field';

export default function TopAppBar() {
  const { supabase } = useOutletContext();

  const [user, setUser] = useState();

  useEffect(() => {
    supabase.auth.getUser().then((res) => setUser(res.data.user));
  }, [supabase]);

  return (
    <header className="p-4 shadow-md">
      <div className="w-10/12 flex m-auto">
        <div className="w-3/12">
          <Logo />
        </div>
        <div className="w-6/12">
          <SearchField />
        </div>
        <div className="w-3/12">Hello {JSON.stringify(user)}</div>
      </div>
    </header>
  );
}
