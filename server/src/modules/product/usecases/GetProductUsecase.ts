import { Product } from "../domain/entities/Product";
import { ProductRepo } from "../domain/repositories/ProductRepo";
import { ProductResponseDto } from "../dtos/ProductResponseDto";
import { ProductMapper } from "../mapper/ProductMapper";
export class GetProductUsecase {
  constructor(private productRepository: ProductRepo) { }
  async execute(id: string): Promise<ProductResponseDto> {
    const product: Product | null = await this.productRepository.findById(id);
    if (!product) throw new Error("Product Not found");
    return ProductMapper.toResponseDto(product);
  }
}
