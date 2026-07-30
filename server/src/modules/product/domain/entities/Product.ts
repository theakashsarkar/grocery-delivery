import { CreateProductDto } from "../../dtos/CreateProductDto";
import { UpdateProductDto } from "../../dtos/UpdateProductDto";
export class Product {
  constructor(
    public readonly id: string,
    public name: string,
    public description: string,
    public price: number,
    public originalPrice: number,
    public image: string,
    public category: string,
    public unit: string,
    public stock: number,
    public isOrganic: boolean,
    public rating: number,
    public reviewCount: number,
  ) { }
  get discountPercent(): number {
    if (!this.originalPrice || this.originalPrice <= 0) return 0;
    if (this.price > this.originalPrice) return 0;
    return Math.round(((this.originalPrice - this.price) / this.originalPrice) * 100);
  }
  static create(dto: CreateProductDto): Product {
    return new Product(
      crypto.randomUUID(),
      dto.name,
      dto.description,
      dto.price,
      dto.originalPrice,
      dto.image,
      dto.category,
      dto.unit,
      dto.stock,
      dto.isOrganic,
      0,
      0
    )
  }
  update(dto: UpdateProductDto): Product {
    return new Product(
      this.id,
      dto.name ?? this.name,
      dto.description ?? this.description,
      dto.price ?? this.price,
      dto.originalPrice ?? this.originalPrice,
      dto.image ?? this.image,
      dto.category ?? this.category,
      dto.unit ?? this.unit,
      dto.stock ?? this.stock,
      dto.isOrganic ?? this.isOrganic,
      this.rating,
      this.reviewCount,
    )
  }
  updateImage(imageUrl: string): Product {
    return new Product(
      this.id,
      this.name,
      this.description,
      this.price,
      this.originalPrice,
      imageUrl,              // new image
      this.category,
      this.unit,
      this.stock,
      this.isOrganic,
      this.rating,
      this.reviewCount,
    );
  }
}
