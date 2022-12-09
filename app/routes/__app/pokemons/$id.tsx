import { type LoaderFunction, redirect } from '@remix-run/node';
import { useLoaderData, useOutletContext } from '@remix-run/react';
import { capitalize } from 'lodash';
import TypeChips from 'app/components/type-chips';
import StatsTable from '../../../components/stats-table';
import HeightWeightTable from '../../../components/height-weight-table';
import Tabs from 'app/components/tabs';
import MovesTable from '../../../components/moves-table';
import { useEffect, useState } from 'react';
import { type Pokemon } from 'app/types/pokemon';
import type { SupabaseOutletContext } from '../../../types/supabase/supabase-outlet-context';
import API from '../../../api/api';
import { MdOutlineHourglassEmpty } from 'react-icons/md';
import { createServerClient } from '@supabase/auth-helpers-remix';

export const loader: LoaderFunction = async function ({
  params,
  request,
}): Promise<Pokemon> {
  const response = new Response();
  // an empty response is required for the auth helpers
  // to set cookies to manage auth

  const id = params.id;

  if (!id) {
    throw redirect('/');
  }

  const supabaseClient = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    { request, response }
  );

  const api = new API(supabaseClient);

  return await api.pokemons.getPokemon(+id);
};

export default function PokemonDetails() {
  const { supabase } = useOutletContext<SupabaseOutletContext>();
  const api = new API(supabase);

  const pokemon = useLoaderData<Pokemon>();

  const [owned, setOwned] = useState<boolean | 'not logged in'>(false);
  const [hasUpdate, setHasUpdate] = useState(true);

  useEffect(() => {
    if (hasUpdate) {
      api.pokemons
        .ownsPokemon(pokemon.id)
        .then(setOwned)
        .catch(() => setOwned('not logged in'))
        .then(() => setHasUpdate(false));
    }
  }, [supabase, hasUpdate, pokemon, api.pokemons]);

  return (
    <>
      <div className="flex justify-between w-full">
        <div className="prose">
          <h1>{capitalize(pokemon.name)}</h1>
        </div>
        <button
          className={`btn ${
            owned === 'not logged in'
              ? 'btn-disabled'
              : owned
              ? 'btn-outline btn-success'
              : ''
          }`}
          onClick={
            owned
              ? () =>
                  api.pokemons
                    .releasePokemon(pokemon.id)
                    .then(() => setHasUpdate(true))
              : () =>
                  api.pokemons
                    .catchPokemon(pokemon.id)
                    .then(() => setHasUpdate(true))
          }
        >
          {hasUpdate ? (
            <MdOutlineHourglassEmpty />
          ) : owned === 'not logged in' ? (
            'Please log in'
          ) : owned ? (
            'Owned'
          ) : (
            'Own'
          )}
        </button>
      </div>
      <section className="flex">
        <section className="w-1/3">
          <img
            className="w-full"
            src={pokemon.sprites.other['official-artwork']['front_default']}
            alt="Pokemon's front sprite"
          />
        </section>
        <section className="w-2/3">
          <TypeChips types={pokemon.types} />
          <HeightWeightTable height={pokemon.height} weight={pokemon.weight} />
        </section>
      </section>
      <Tabs
        tabs={{
          stats: {
            label: 'Stats',
            content: <StatsTable stats={pokemon.stats} />,
          },
          moves: {
            label: 'Moves',
            content: <MovesTable moves={pokemon.moves} />,
          },
        }}
      />
    </>
  );
}
