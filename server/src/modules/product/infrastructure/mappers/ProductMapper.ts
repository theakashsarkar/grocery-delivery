import { Product, ProductProps } from "../../domain/entities/Product"
export class ProductMapper {
  static toPersistence(product: Product): ProductProps {
    return product.toPrimitives();
  }

  static toDomain(data: ProductProps): Product {
    return new Product({
      id: data.id,
      name: data.name,
      description: data.description ?? "",
      price: data.price,
      originalPrice: data.originalPrice ?? 0,
      image: data.image,
      category: data.category,
      unit: data.unit ?? "piece",
      stock: data.stock ?? 0,
      isOrganic: data.isOrganic ?? false,
      rating: data.rating ?? 0,
      reviewCount: data.reviewCount ?? 0,
    });
  }
}
