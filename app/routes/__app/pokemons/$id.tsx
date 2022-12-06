import { type LoaderFunction, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { capitalize } from 'lodash';
import Container from 'app/components/container';

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
          {pokemon.types.map((type: any) => (
            <span className="badge mr-1" key={type.slot}>
              {type.type.name}
            </span>
          ))}
        </section>
      </section>
    </Container>
  );
}
