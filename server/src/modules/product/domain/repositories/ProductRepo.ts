import { Product } from "../entities/Product"
import { IProductWhereInput } from "./IProductWhereInput"
import { TProductOrderByInput } from "./TProductOrderByInput"
export interface ProductRepo {
  findMany(params: {
    where?: IProductWhereInput,
    orderBy?: TProductOrderByInput,
    take?: number
  }): Promise<Product[]>
  findById(id: string): Promise<Product | null>
  create(product: Product): Promise<Product>;
  update(
    id: string,
    data: Partial<Product>,
  ): Promise<Product>;
  delete(id: string): Promise<void>;
}
