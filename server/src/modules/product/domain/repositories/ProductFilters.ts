export interface ProductFilters {
  category?: string,
  search?: string,
  minPrice?: number,
  maxPrice?: number,
  sort?: "price-low" | "price-high" | "newest",
  stockGreaterThan?: number
}
