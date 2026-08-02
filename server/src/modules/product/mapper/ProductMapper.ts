import { Product } from '../domain/entities/Product';
import { ProductResponseDto } from '../dtos/ProductResponseDto';
export class ProductMapper {
  static toResponseDto(product: Product): ProductResponseDto {
    return {
      ...product.toPrimitives(),
      discount: product.discountPercent,
    }
  }
}
