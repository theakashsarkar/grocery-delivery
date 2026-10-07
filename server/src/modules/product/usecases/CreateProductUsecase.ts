import { ProductRepo } from "../domain/repositories/ProductRepo";
import { CreateProductDto } from "../dtos/CreateProductDto";
import { ProductMapper } from "../mapper/ProductMapper";
import { Product } from "../domain/entities/Product";
import { ProductImageService } from "../infrastructure/service/ProductImageService";

export class CreateProductUsecase {
  constructor(private productRepo: ProductRepo, private productImageService: ProductImageService) { }
  async execute(dto: CreateProductDto) {
    const { file, ...productData } = dto;
    const imageUrl = file
      ? await this.productImageService.upload(file) : "";

    const product = Product.create({
      ...productData,
      image: imageUrl,
    });
    const save = await this.productRepo.create(product);
    return ProductMapper.toResponseDto(save)
  }
}

