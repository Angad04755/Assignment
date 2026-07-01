interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search users..."
      className="px-2 py-2 md:py-0 w-full rounded-lg border-4 border-cyan-500 outline-none shadow-lg"
    />
  );
}

export default SearchBar;