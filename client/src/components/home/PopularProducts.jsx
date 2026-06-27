import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCart from "../ProductCart";
const products = [
  {
    id: 1,
    category: "Dairy & Eggs",
    name: "Amul Milk 1L",
    image: "/products/dsep7owmwvfrukzbslqo.png",
    rating: 4.5,
    reviews: 12,
    discount: 7,
    price: 55,
    originalPrice: 60,
    description: "Fresh milk, rich in calcium",
  },
  {
    id: 2,
    category: "Fruits",
    name: "Fresh Apples 1kg",
    image: "/products/dsnmko6gqtyw31okby80.png",
    rating: 4.8,
    reviews: 25,
    price: 180,
    originalPrice: 200,
    description: "Sweet and juicy red apples",
  },
  {
    id: 3,
    category: "Vegetables",
    name: "Fresh Tomatoes 1kg",
    image: "/products/evuovl2nlwdjukosfz23.png",
    rating: 4.3,
    reviews: 18,
    price: 45,
    originalPrice: 50,
    description: "Farm fresh tomatoes",
  },
  {
    id: 4,
    category: "Bakery",
    name: "Brown Bread",
    image: "/products/gek3mmiig3lixlkpxks8.png",
    rating: 4.6,
    reviews: 32,
    price: 70,
    originalPrice: 80,
    description: "Healthy whole wheat bread",
  },
  {
    id: 5,
    category: "Beverages",
    name: "Orange Juice 1L",
    image: "/products/nexecd3mgyzrpeun1bee.png",
    rating: 4.4,
    reviews: 15,
    price: 120,
    originalPrice: 140,
    description: "100% natural orange juice",
  },
  {
    id: 6,
    category: "Snacks",
    name: "Potato Chips",
    image: "/products/r1wxfortw5h12g7egx7k.png",
    rating: 4.2,
    reviews: 40,
    price: 30,
    originalPrice: 35,
    description: "Crispy salted potato chips",
  },
];
const PopularProducts = () => {
  return (
    <section className="pb-16">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Popular Products</h2>
            <p className="text-sm text-app-text-light mt-1">
              Top-rated products this season
            </p>
          </div>
          <Link
            className="text-sm font-semibold text-orange-500 hover:text-app-orange-dark flex items-center gap-1 transition-colors"
            to="/products"
          >
            View All <ArrowRightIcon className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  gap-4 xl:gap-8">
          {products.map((product) => {
            return <ProductCart key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default PopularProducts;
