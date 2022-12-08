import { type LoaderFunction, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { capitalize } from 'lodash';
import TypeChips from 'app/components/type-chips';
import StatsTable from '../../../components/stats-table';
import HeightWeightTable from '../../../components/height-weight-table';
import Tabs from 'app/components/tabs';
import MovesTable from '../../../components/moves-table';
import { useEffect, useState } from 'react';
import api from 'app/lib/api';
import { type Pokemon } from 'app/types/pokemon';

export const loader: LoaderFunction = async function (data): Promise<Pokemon> {
  const id = data.params.id;

  if (!id) {
    throw redirect('/');
  }

  return await api.pokemons.findPokemonByID(+id);
};

export default function PokemonDetails() {
  const pokemon = useLoaderData<Pokemon>();

  const [owned, setOwned] = useState(false);
  const [hasUpdate, setHasUpdate] = useState(true);

  useEffect(() => {
    if (hasUpdate) {
      api.ownedPokemons.ownsPokemonWithID(pokemon.id).then(setOwned);
      setHasUpdate(false);
    }
  }, [pokemon, hasUpdate]);

  return (
    <>
      <div className="flex justify-between w-full">
        <div className="prose">
          <h1>{capitalize(pokemon.name)}</h1>
        </div>
        <button
          className={`btn ${owned ? 'btn-outline btn-success' : ''}`}
          onClick={
            owned
              ? () => {
                  api.ownedPokemons.removeOwnedPokemonWithID(pokemon.id);
                  setHasUpdate(true);
                }
              : () => {
                  api.ownedPokemons.addOwnedPokemonWithID(pokemon.id);
                  setHasUpdate(true);
                }
          }
        >
          {owned ? 'Owned' : 'Own'}
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
