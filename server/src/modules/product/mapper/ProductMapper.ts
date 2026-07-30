import { Product } from '../domain/entities/Product';
import { ProductResponseDto } from '../dtos/ProductResponseDto';
export class ProductMapper {
  static toResponseDto(product: Product): ProductResponseDto {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      category: product.category,
      unit: product.unit,
      stock: product.stock,
      isOriganic: product.isOrganic,
      rating: product.rating,
      reviewCount: product.reviewCount,
      discount: product.discountPercent,
    }
  }
}
