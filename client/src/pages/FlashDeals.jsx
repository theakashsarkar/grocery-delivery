import { useEffect, useState } from "react";
import { product } from "../data/product";
import { Zap } from "lucide-react";
import Loading from "../components/Loading";
import ProductCart from "../components/ProductCart";

const FlashDeals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setProducts(product.filter((p) => p.stock > 0));
    setTimeout(() => setLoading(false), 1000);
  });
  return (
    <div className="min-h-screen bg-orange-100">
      <div className="bg-linear-to-r from-orange-500 to-orange-500 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Zap className="size-6 text-white" />
            <h1 className="text-3xl font-semibold">Flash Deals</h1>
            <Zap className="size-6 text-white" />
          </div>
          <p className="text-white/80 max-w-md mx-auto">
            Limited-time offers on your favorite organic products. Grab them
            before they're gone!
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <Loading />
        ) : products.length === 0 ? (
          <div className="text-center py-16">
            <Zap className="size-16 text-app-border mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-green-400 mb-2">
              No deals right now
            </h2>
            <p className="text-sm text-gray-500">
              Check back soon for amazing offers
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map(
              (product) =>
                product.stock > 0 && (
                  <ProductCart key={product.id} product={product} />
                ),
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default FlashDeals;
