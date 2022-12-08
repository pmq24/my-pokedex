import { capitalize } from 'lodash';
import { useContext, useEffect, useState } from 'react';
import Container from '../../components/container';
import { PokemonStoreContext } from '../../lib/pokemon-store';
import api from 'app/lib/api';
import { Pokemon } from '../../types/pokemon';

export default function Home() {
  const [ownedPokemons, setOwnedPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    api.ownedPokemons.findAllOwnedPokemon().then(setOwnedPokemons);
  }, []);

  return (
    <Container>
      <div className="prose">
        <h1>My Pokemons</h1>
      </div>
      <div className="flex">
        {ownedPokemons.map((pokemon) => (
          <a
            className="w-1/3"
            key={pokemon.id}
            href={`http://localhost:3000/pokemons/${pokemon.id}`}
          >
            <article className="shadow-md">
              <figure>
                <img
                  src={
                    pokemon.sprites.other['official-artwork']['front_default']
                  }
                  alt={`${pokemon.name}`}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{capitalize(pokemon.name)}</h2>
              </div>
            </article>
          </a>
        ))}
      </div>
    </Container>
  );
}
