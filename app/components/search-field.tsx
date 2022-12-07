import { capitalize } from 'lodash';
import { useEffect, useState } from 'react';
import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('https://beta.pokeapi.co/graphql/v1beta');

async function search(query: string) {
  return await client.request(
    `
      query samplePokeAPIquery($searchQuery: String!) {
        pokemon_v2_pokemon(
          limit: 10
          where: { name: { _ilike: $searchQuery } }
        ) {
          id
          name
        }
      }
    `,
    { searchQuery: `%${query}%` }
  );
}

export default function SearchField() {
  const [searchString, setSearchString] = useState('');
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);

  const shouldHideAutoComplete = !searchString.trim();

  useEffect(() => {
    search(searchString).then((result) =>
      setSearchResult(result.pokemon_v2_pokemon)
    );
  }, [searchString]);

  return (
    <div className="relative w-full flex">
      <input
        type="text"
        placeholder="Find Pokemon..."
        className="input input-bordered flex-1"
        value={searchString}
        onChange={(event) => setSearchString(event.target.value)}
      />
      <ul
        className={` ${
          shouldHideAutoComplete ? 'hidden' : ''
        } menu absolute top-full w-full bg-base-100 shadow-md rounded-box z-50`}
      >
        {!searchResult || !searchResult.length ? (
          <EmptyAutoCompleteEntry />
        ) : (
          searchResult.map((result) => (
            <AutoCompleteEntry key={result.id} {...result} />
          ))
        )}
      </ul>
    </div>
  );
}

type SearchResult = {
  name: string;
  id: number;
};

function EmptyAutoCompleteEntry() {
  return (
    <li className="disabled">
      <button className="btn-disabled">No result</button>
    </li>
  );
}

function AutoCompleteEntry({ name, id }: SearchResult) {
  return (
    <li>
      <a href={`http://localhost:3000/pokemons/${id}`}>{capitalize(name)}</a>
    </li>
  );
}
