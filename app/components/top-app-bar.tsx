import type { User } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import type { TypedSupabaseClient } from '../types/supabase';
import Logo from './logo';
import SearchField from './search-field';

type Props = {
  supabase: TypedSupabaseClient;
};

export default function TopAppBar({ supabase }: Props) {
  const [user, setUser] = useState<User | null>();

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
        <div className="w-3/12">Hello {user?.email}</div>
      </div>
    </header>
  );
}
