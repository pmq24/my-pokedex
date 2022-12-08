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
    supabase.auth.getUser().then((res) => {
      setUser(res.data.user);
    });
  }, [supabase]);

  return (
    <header className="w-full shadow-md">
      <div className="m-auto items-center p-4 sm:w-full md:w-10/12 lg:w-1/2 gap-8 flex">
        <div>
          <Logo />
        </div>
        <div className="flex-1">
          <SearchField />
        </div>
        <div>
          <div className="avatar">
            <div className="w-12 rounded-full">
              {user?.user_metadata?.avatar_url && (
                <img
                  className="h-full"
                  src={user.user_metadata.avatar_url}
                  referrerPolicy="no-referrer"
                  alt="user's avatar"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
