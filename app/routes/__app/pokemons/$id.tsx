import { type LoaderFunction, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { capitalize } from 'lodash';
import Container from 'app/components/container';
import TypeList from 'app/components/type-list';
import StatsTable from '../../../components/stats-table';
import HeightWeightTable from '../../../components/height-weight-table';
import Tabs from 'app/components/tabs';
import MovesTable from '../../../components/moves-table';

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
  return (
    <Container>
      <div className="prose">
        <h1>{capitalize(pokemon.name)}</h1>
      </div>
      <section className="flex">
        <section className="w-1/3">
          <img
            className="w-full"
            src={pokemon.sprites.front_default}
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
            content: (
              <StatsTable
                stats={pokemon.stats.reduce((stats, currentStats) => {
                  stats[currentStats.stat.name] = {
                    base_stat: currentStats.base_stat,
                    effort: currentStats.effort,
                  };
                  return stats;
                }, {})}
              />
            ),
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
