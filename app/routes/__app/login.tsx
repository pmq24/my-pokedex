import TextField from 'app/components/text-field';
import PageTitle from '../../components/page-title';
import { FcGoogle } from 'react-icons/fc';
import { useOutletContext } from '@remix-run/react';
import type { SupabaseClient } from '@supabase/supabase-js';

export default function Login() {
  const { supabase } = useOutletContext<{
    supabase: SupabaseClient;
  }>();

  return (
    <>
      <PageTitle title="Login" />

      <div className="flex flex-col place-content-stretch gap-2">
        <button
          className="btn btn-outline btn-sm"
          onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}
        >
          <FcGoogle className="m-2" />
          Login with Google
        </button>
        <div className="divider">or</div>
        <TextField label="Email" />
        <TextField label="Password" type="password" />
        <button className="btn">Log in</button>
      </div>
    </>
  );
}
