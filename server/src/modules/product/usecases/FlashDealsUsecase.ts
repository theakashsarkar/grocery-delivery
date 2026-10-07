import { Product } from "../domain/entities/Product";
import { ProductRepo } from "../domain/repositories/ProductRepo";
import { FlashDealQueryDto } from "../dtos/FlashDealQueryDto";
import { FlashDealResponseDto } from "../dtos/FlashDealResponseDto";
import { ProductWithDiscountDto } from "../dtos/ProductWithDiscountDto";

export class FlashDealUsecase {
  constructor(
    private productRepo: ProductRepo,
  ) { }
  async execute(query: FlashDealQueryDto = {}): Promise<FlashDealResponseDto> {
    const { minStock = 0, limit = 8 } = query;
    const products = await this.productRepo.findMany({
      where: { stock: { gte: minStock } },
      take: limit,
    })
    return {
      products: products.map(
        (product: Product) => this.toDiscountDto(product)
      )
    }
  }

  private toDiscountDto(product: Product): ProductWithDiscountDto {
    return {
      ...product.toPrimitives(),
      discount: product.discountPercent
    }
  }
} 
