import type { LoaderArgs, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useFetcher, useLoaderData } from '@remix-run/react';
import {
  createBrowserClient,
  createServerClient,
} from '@supabase/auth-helpers-remix';
import TopAppBar from 'app/components/top-app-bar';
import { useEffect, useState } from 'react';

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
  };

  const response = new Response();

  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      request,
      response,
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return json(
    {
      env,
      session,
    },
    {
      headers: response.headers,
    }
  );
};

export default function IndexLayout() {
  const { env, session } = useLoaderData<typeof loader>();
  const fetcher = useFetcher();

  const [supabase] = useState(() =>
    createBrowserClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY)
  );

  const serverAccessToken = session?.access_token;

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverAccessToken) {
        // server and client are out of sync.
        // Remix recalls active loaders after actions complete
        fetcher.submit(null, {
          method: 'post',
          action: '/handle-supabase-auth',
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [serverAccessToken, supabase, fetcher]);

  return (
    <>
      <TopAppBar />
      <main className="m-auto p-4 w-screen lg:w-10/12">
        <Outlet context={supabase} />
      </main>
    </>
  );
}
