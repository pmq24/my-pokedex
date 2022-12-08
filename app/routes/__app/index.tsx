import { capitalize } from 'lodash';
import { useEffect, useState } from 'react';
import Container from '../../components/container';
import { type Pokemon } from '../../types/pokemon';
import { useOutletContext } from '@remix-run/react';
import type { SupabaseOutletContext } from '../../types/supabase/supabase-outlet-context';
import API from '../../api/api';

export default function Home() {
  const { supabase } = useOutletContext<SupabaseOutletContext>();
  const api = new API(supabase);

  const [ownedPokemons, setOwnedPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    api.pokemons.getOwnedPokemons().then(setOwnedPokemons);
  }, [supabase, api.pokemons]);

  return (
    <Container>
      <div className="prose">
        <h1>My Pokemons</h1>
      </div>
      <div className="flex">
        {ownedPokemons.map((pokemon) => (
          <a
            className="w-1/4"
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
