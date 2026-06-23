import { SearchIcon } from "lucide-react";

const SearchBar = ({ value, onChange, handleSearch }) => {
  return (
    <form
      onSubmit={handleSearch}
      className="hidden sm:flex flex-1 max-w-sm text-xs sm:text-sm"
    >
      <div className="relative w-full">
        <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
        <input
          type="text"
          placeholder="Search for groceries..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-8 p-2 bg-orange-50 rounded-full ring ring-app-orange/15 focus:ring-app-orange/30"
        />
      </div>
    </form>
  );
};
export default SearchBar;
