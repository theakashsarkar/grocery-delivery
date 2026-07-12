import {useState, useEffect} from "react"
import { useSearchParams} from "react-router-dom"
import { product } from "../../data/product"
import SearchResult from '../../pages/SearchResult'
const SearchResultContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q") || "";

  useEffect(() => {
    if (!query) {
      return
    }
    const filteredProduct = product.filter((pro) => pro.name.toLowerCase.includes(query.toLowerCase))
    setProducts(filteredProduct);
    setLoading(false)
  },[query])

  return (
    <SearchResult
      loading={loading}
      products={products}
      query={query}
    />
  )
}
export default SearchResultContainer
