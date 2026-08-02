import { IFileStorage } from "../../../../shared/interface/IFileStorage";
import { UploadedFile } from "../../../../shared/types/UploadFile";

export class ProductImageService {
  private static readonly FOLDER = "products";
  constructor(private fileStorage: IFileStorage) { }

  async upload(file: UploadedFile): Promise<string> {
    return this.fileStorage.upload(
      file.buffer,
      ProductImageService.FOLDER,
      file.originalname
    )
  }

  async deleteIfExists(imageUrl?: string): Promise<void> {
    if (!imageUrl) return;
    try {
      await this.fileStorage.delete(imageUrl);
    } catch (err) {
      console.error("Failed to delete products image: ", err);
    }
  }
}
