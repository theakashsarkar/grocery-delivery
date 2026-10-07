import { ProductRepo } from "../domain/repositories/ProductRepo";
import { UploadProductImageDto } from "../dtos/UploadProductImageDto";
import { ProductImageService } from "../infrastructure/service/ProductImageService";

export class UploadProductImageUsecase {
  constructor(
    private productRepo: ProductRepo,
    private productImageService: ProductImageService,
  ) { }
  async execute(dto: UploadProductImageDto): Promise<string> {
    const product = await this.productRepo.findById(dto.productId);
    if (!product) throw new Error("Product not found");

    const imageUrl = await this.productImageService.upload(dto.file);

    await this.productImageService.deleteIfExists(product.image);

    const updated = product.updateImage(imageUrl);
    await this.productRepo.update(dto.productId, updated);
    return imageUrl;
  }
}
