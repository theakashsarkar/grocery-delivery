const FilterPanel = ({
  categories,
  category,
  minPrice,
  maxPrice,
  updateFilter,
  clearFilter,
  hasFilter,
}) => {
  const categoriesWithAll = [
    { slug: "", name: "All Categories" },
    ...categories,
  ];
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-green-500 mb-3">
          Categories
        </h3>
        <div className="space-y-1.5">
          {categoriesWithAll.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => updateFilter("category", cat.slug)}
              className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-all cursor-pointer ${category === cat.slug ? "bg-green-600 text-white" : " hover:bg-amber-200"}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-app-green mb-3">
          Price Range
        </h3>
        <div className="flex items-center gap-2">
          <input
            placeholder="Min"
            className="w-full px-3 py-2 text-sm bg-white rounded-lg border not-focus:border-app-border"
            type="number"
            value={minPrice}
            onChange={(e) => updateFilter("minPrice", e.target.value)}
          />
          <span className="text-gray-400">-</span>
          <input
            placeholder="Max"
            className="w-full px-3 py-2 text-sm bg-white rounded-lg border not-focus:border-app-border"
            type="number"
            value={maxPrice}
            onChange={(e) => updateFilter("maxPrice", e.target.value)}
          />
        </div>
      </div>
      {hasFilter && (
        <button
          onClick={clearFilter}
          className="w-full py-2 text-sm bg-red-200 hover:text-red-500 rounded-lg transition-colors cursor-pointer font-medium"
        >
          Clear All Filter
        </button>
      )}
    </div>
  );
};
export default FilterPanel;
