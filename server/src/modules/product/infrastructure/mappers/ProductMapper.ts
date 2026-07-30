import { Product } from "../../domain/entities/Product"
export class ProductMapper {
  static toDomain(data: any): Product {
    return new Product(
      data.id,
      data.name,
      data.description ?? "",
      data.price,
      data.originalPrice ?? 0,
      data.image,
      data.category,
      data.unit ?? "piece",
      data.stock ?? 0,
      data.isOrganic ?? false,
      data.rating ?? 0,
      data.reviewCount ?? 0,
    );
  }
}
