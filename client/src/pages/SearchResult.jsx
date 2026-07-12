import Loading from '../components/Loading'
import ProductCart from '../components/ProductCart'
import Breadcrumb from "../components/Breadcrumb";
import {HomeIcon, SearchIcon} from "lucide-react"
const SearchResult = ({loading, products, query}) => {
  return (
    <div className="min-h-screen bg-app-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <>
          <Breadcrumb>
            <Breadcrumb.Item to="/">
              <HomeIcon classNmae="size-4" />
            </Breadcrumb.Item>
            <Breadcrumb.Item active >
              Search Result
            </Breadcrumb.Item>
          </Breadcrumb>
        </>
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-app-green mb-1">Result For "{query}"</h1>
          <p className="text-sm text-app-text-light">{loading ? "Searching..." : `${products.length} Items found`}</p>
        </div>
        {loading ? (
          <Loading />
        ): products.length === 0 ? (
          <div className="text-center py-16">
            <SearchIcon className="size-16 text-app-order mx-auto mb-4" />
            <h2 className="text-lg font-medium text-green-400 mb-2">
              No results found
            </h2>
            <p className="text-sm mb-4">
              We couldn't find any products matching "dfasdfasf". Try a different search term.
            </p>
              <Link to="/products" className="inline-flex px-5 py-2 bg-green-900 text-white text-sm font-medium rounded-lg">Browse All Products</Link>
          </div>
        ): <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-8">
              {products.map((product) => (
                <ProductCart key={product.id} product={product}/>
              ))}
          </div>}
      </div>
    </div>
  );
};
export default SearchResult;
