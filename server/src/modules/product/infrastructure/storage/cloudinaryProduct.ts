import { v2 as cloudinary } from "cloudinary";
import { IFileStorage } from "../../../../shared/interface/IFileStorage";

export class CloudinaryProductStorage implements IFileStorage {
  constructor() {
    cloudinary.config({
      cloud_name: "hljprpxk",
      api_key: '328121498576883',
      api_secret: '5-Yrau7Sb2GL0usdCZKvLwMtakM',
    });
  }

  async upload(file: Buffer, folder: string, filename?: string): Promise<string> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: `ecommerce/${folder}`,
          public_id: filename?.split(".")[0],
          resource_type: "image",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result!.secure_url);
        },
      ).end(file);
    });
  }

  async delete(url: string): Promise<void> {
    const publicId = this.extractPublicId(url);
    await cloudinary.uploader.destroy(publicId);
  }

  private extractPublicId(url: string): string {
    const parts = url.split("/");
    const folderFile = parts.slice(-2).join("/");
    return folderFile.split(".")[0];
  }
}
