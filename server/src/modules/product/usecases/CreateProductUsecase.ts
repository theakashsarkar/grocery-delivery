import { ProductRepo } from "../domain/repositories/ProductRepo";
import { CreateProductDto } from "../dtos/CreateProductDto";
import { ProductMapper } from "../mapper/ProductMapper";
import { Product } from "../domain/entities/Product";

export class CreateProductUsecase {
  constructor(private productRepo: ProductRepo) { }
  async execute(dto: CreateProductDto) {
    const product = Product.create(dto);
    const save = await this.productRepo.create(product);
    return ProductMapper.toResponseDto(save)
  }
}

