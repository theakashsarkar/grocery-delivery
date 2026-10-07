import { UploadedFile } from "../../../shared/types/UploadFile";

export interface UploadProductImageDto {
  productId: string,
  file: UploadedFile,
}
