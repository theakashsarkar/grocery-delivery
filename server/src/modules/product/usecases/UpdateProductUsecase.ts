import { ProductRepo } from "../domain/repositories/ProductRepo";
import { ProductResponseDto } from "../dtos/ProductResponseDto";
import { UpdateProductDto } from "../dtos/UpdateProductDto";
import { ProductMapper } from "../mapper/ProductMapper";

export class UpdateProductUseCase {
  constructor(private productRepo: ProductRepo) { }
  async execute(id: string, dto: UpdateProductDto): Promise<ProductResponseDto> {
    const existing = await this.productRepo.findById(id);
    if (!existing) throw new Error("Product not found");
    const update = existing.update(dto);
    const save = await this.productRepo.update(id, update);
    return ProductMapper.toResponseDto(save);
  }
}
