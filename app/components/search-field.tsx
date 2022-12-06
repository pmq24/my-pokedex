export default function SearchField() {
  return (
    <form className="w-full flex">
      <input
        type="text"
        placeholder="Find Pokemon..."
        className="input input-bordered flex-1"
      />
      <button className="btn btn-square flex-none">
        <img src="/icons/search.svg" className="h-6 w-6" alt="Search icon" />
      </button>
    </form>
  );
}
