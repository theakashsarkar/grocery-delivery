import { IFileStorage } from "../../../shared/interface/IFileStorage";
import { ProductRepo } from "../domain/repositories/ProductRepo";
import { UploadProductImageDto } from "../dtos/UploadProductImageDto";

export class UploadProductImageUsecase {
  constructor(
    private productRepo: ProductRepo,
    private fileStorage: IFileStorage,
  ) { }
  async execute(dto: UploadProductImageDto): Promise<string> {
    const product = await this.productRepo.findById(dto.productId);
    if (!product) throw new Error("Product not found");
    const imageUrl = await this.fileStorage.upload(
      dto.file.buffer,
      "product",
      dto.file.originalname
    )
    if (product.image) {
      await this.fileStorage.delete(product.image)
    }
    const updated = product.updateImage(imageUrl);
    await this.productRepo.update(dto.productId, updated);
    return imageUrl;
  }
}
