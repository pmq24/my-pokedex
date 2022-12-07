import { useContext, useEffect, useState } from 'react';
import Container from '../../components/container';
import { PokemonStoreContext } from '../../lib/pokemon-store';

export default function Home() {
  const pokemonStore = useContext(PokemonStoreContext);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    pokemonStore.getAllPokemons().then((pokemons) => setPokemons(pokemons));
  }, [pokemonStore]);

  return (
    <Container>
      {pokemons.map((pokemon) => (
        <span key={pokemon.name}>{pokemon.name}</span>
      ))}
    </Container>
  );
}
