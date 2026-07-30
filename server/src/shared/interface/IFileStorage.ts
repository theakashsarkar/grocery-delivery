export interface IFileStorage {
  upload(file: Buffer, folder: string, filename?: string): Promise<string>;
  delete(url: string): Promise<void>;
}
