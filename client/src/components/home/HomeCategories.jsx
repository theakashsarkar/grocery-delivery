import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Fruits",
    slug: "fruits",
    image: "/fruits_vegetables-DKTFzdXr.png",
  },
  {
    id: 2,
    name: "Personal",
    slug: "personal",
    image: "/personal_care-DGCwg-ZT.png",
  },
  {
    id: 3,
    name: "Snacks",
    slug: "sancks",
    image: "/snacks-Br0zj0km.png",
  },
  {
    id: 4,
    name: "Pantry Staples",
    slug: "pantry-staples",
    image: "/pantry_staples-CcPzJo59.png",
  },
  {
    id: 5,
    name: "Meat Seafood",
    slug: "meat-seafood",
    image: "/meat_seafood-B2LTBWqG.png",
  },
  {
    id: 6,
    name: "Frozen food",
    slug: "frozen-foods",
    image: "/frozen_foods-CJqLnA0J.png",
  },
  {
    id: 7,
    name: "Drinks",
    slug: "drinks",
    image: "/drinks-5Jevbc87.png",
  },
  {
    id: 8,
    name: "Bakery",
    slug: "bakery",
    image: "/bakery-B-i44uip.png",
  },
];
const Categories = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold">Browse Categories</h2>
          <p className="text-sm text-app-text-light mt-1">
            Find exactly what you need using
          </p>
        </div>
        <div className="flex items-center mt-8 gap-4 overflow-x-auto no-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/products?category=${cat.slug}`}
              onClick={() => window.scrollTo(0, 0)}
              className="group flex flex-col items-center gap-3 p-4"
            >
              <div className="size-18 sm:size-26 sm:p-2 rounded-2xl overflow-hidden bg-orange-100 group-hover:ring-2 ring-orange-300/75 transition-all">
                <img
                  className="w-full h-full object-contain rounded-full transition-all"
                  src={cat.image}
                  alt={cat.name}
                />
              </div>
              <span className="text-xs font-medium text-zinc-600 flex items-center justify-center leading-tight">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Categories;
