import { Product } from "../domain/entities/Product";
import { IProductWhereInput } from "../domain/repositories/IProductWhereInput";
import { ProductFilters } from "../domain/repositories/ProductFilters";
import { ProductRepo } from "../domain/repositories/ProductRepo";
import { TProductOrderByInput } from "../domain/repositories/TProductOrderByInput";

export class ProductsUsecase {
  constructor(private readonly productRepository: ProductRepo) { }
  async execute(query: ProductFilters) {
    const where = this.buildWhereClause(query);
    const orderBy = this.buildOrderByClause(query.sort);
    const products = await this.productRepository.findMany({ where, orderBy });
    return products.map((product: Product) => ({
      ...product,
      discount: product.discountPercent,
    }));
  }
  private buildWhereClause(query: ProductFilters): IProductWhereInput {

    const { category, search, minPrice, maxPrice } = query;
    const where: IProductWhereInput = {};
    if (category && category !== "all") {
      where.category = category;
    }
    if (search) {
      where.name = { contains: search, mode: "insensitive" }
    }
    const hasPriceFilter = minPrice !== undefined || maxPrice !== undefined;
    if (!hasPriceFilter) return where;
    where.price = {
      ...(minPrice !== undefined && { gte: minPrice }),
      ...(maxPrice !== undefined && { lte: maxPrice }),
    };
    return where;
  }
  private buildOrderByClause(sort?: string): TProductOrderByInput {
    if (sort === 'price-low') return { price: "asc" };
    if (sort === 'price-high') return { price: "desc" };
    return { createdAt: "desc" }
  }
}
