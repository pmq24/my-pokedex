import { capitalize } from 'lodash';
import { useState } from 'react';

export default function SearchField() {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div className="relative w-full flex">
      <input
        type="text"
        placeholder="Find Pokemon..."
        className="input input-bordered flex-1"
      />
      <button className="btn btn-square flex-none">
        <img src="/icons/search.svg" className="h-6 w-6" alt="Search icon" />
      </button>
      <ul className="menu absolute top-full w-full bg-base-100 shadow-md rounded-box">
        <EmptyAutoCompleteEntry />
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
      <a href={`https://pokeapi.co/api/v2/pokemon/${id}`}>{capitalize(name)}</a>
    </li>
  );
}
