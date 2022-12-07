import { type LoaderFunction, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { capitalize } from 'lodash';
import Container from 'app/components/container';
import TypeList from 'app/components/type-list';
import StatsTable from '../../../components/stats-table';
import HeightWeightTable from '../../../components/height-weight-table';
import Tabs from 'app/components/tabs';
import MovesTable from '../../../components/moves-table';
import { useContext, useEffect, useState } from 'react';
import { PokemonStoreContext } from '../../../lib/pokemon-store';

export const loader: LoaderFunction = async function (data) {
  const id = data.params.id;

  if (!id || isNaN(+id) || +id < 0) {
    throw redirect('/');
  }

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return res.json();
};

export default function PokemonDetails() {
  const pokemon = useLoaderData();
  const pokemonStore = useContext(PokemonStoreContext);
  const [owned, setOwned] = useState(false);
  const [hasUpdate, setHasUpdate] = useState(false);

  useEffect(() => {
    if (hasUpdate) {
      pokemonStore
        .getAllIDs()
        .then((ids) => setOwned(ids.includes(pokemon.id)));
      setHasUpdate(false);
    }
  }, [pokemonStore, pokemon, hasUpdate]);

  return (
    <Container>
      <div className="flex justify-between w-full">
        <div className="prose">
          <h1>{capitalize(pokemon.name)}</h1>
        </div>
        <button
          className={`btn ${owned ? 'btn-outline btn-success' : ''}`}
          onClick={
            owned
              ? () =>
                  pokemonStore.remove(pokemon.id).then(() => setHasUpdate(true))
              : () =>
                  pokemonStore.add(pokemon.id).then(() => setHasUpdate(true))
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
          <TypeList types={pokemon.types.map((t) => t.type.name)} />
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
    </Container>
  );
}
