import { UploadedFile } from "../../../shared/types/UploadFile";

export interface CreateProductDto {
  name: string,
  description: string,
  price: number,
  originalPrice: number,
  category: string,
  unit: string,
  stock: number,
  isOrganic: boolean,
  file?: UploadedFile,
}
