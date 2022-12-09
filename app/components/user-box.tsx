import type { User } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import type { TypedSupabaseClient } from '../types/supabase/typed-supabase-client';

type Props = {
  supabase: TypedSupabaseClient;
};

export default function UserBox({ supabase }: Props) {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    supabase.auth.getUser().then((res) => {
      setUser(res.data.user);
    });
  }, [supabase]);

  return user ? (
    <LoggedInUser user={user} supabase={supabase} />
  ) : (
    <GuestUser />
  );
}

function LoggedInUser({
  user,
  supabase,
}: {
  user: User;
  supabase: TypedSupabaseClient;
}) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative">
      <div className="avatar">
        <button
          className="w-12 rounded-full"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {user?.user_metadata?.avatar_url && (
            <img
              className="h-full"
              src={user.user_metadata.avatar_url}
              referrerPolicy="no-referrer"
              alt="user's avatar"
            />
          )}
        </button>
      </div>
      <div className={`${openMenu ? '' : 'hidden'} absolute top-full`}>
        <button
          className="btn"
          onClick={() => {
            supabase.auth
              .signOut()
              .then(() => (window.location.href = 'http://localhost:3000/'));
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

function GuestUser() {
  return (
    <a href="http://localhost:3000/login" className="btn">
      Log in
    </a>
  );
}
