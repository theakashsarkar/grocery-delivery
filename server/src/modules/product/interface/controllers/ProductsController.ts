import { IFileStorage } from "../../../../shared/interface/IFileStorage";
import { FlashDealQueryDto } from "../../dtos/FlashDealQueryDto";
import { FlashDealUsecase } from "../../usecases/FlashDealsUsecase";
import { Request, Response } from "express"
import { CreateProductDto } from "../../dtos/CreateProductDto";
import { CreateProductUsecase } from "../../usecases/CreateProductUsecase";
import { UploadProductImageUsecase } from "../../usecases/UploadProductImageUsecase";

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}
export class ProductsController {
  constructor(
    private flashDealUsecase: FlashDealUsecase,
    private createProductUsecase: CreateProductUsecase,
    private fileStorage: UploadProductImageUsecase,
  ) { }

  async getFlashDeal(req: Request, res: Response) {
    const query: FlashDealQueryDto = {
      minStock: req.query.minStock ? Number(req.body.minStock) : undefined,
      limit: req.query.limit ? Number(req.body.limit) : undefined,
    }
    const result = await this.flashDealUsecase.execute(query);
    return res.json(result);
  }

  async create(req: MulterRequest, res: Response) {
    let imageUrl = "";
    if (req.file) {
      imageUrl = await this.fileStorage.upload(
        req.file.buffer,
        "products",
        req.file.originalname
      );
    }

    const dto: CreateProductDto = {
      name: req.body.name,
      description: req.body.description,
      price: Number(req.body.price),
      originalPrice: Number(req.body.originalPrice),
      image: imageUrl, // uploaded URL
      category: req.body.category,
      unit: req.body.unit,
      stock: Number(req.body.stock),
      isOrganic: req.body.isOrganic === "true" || req.body.isOrganic === true,
    };

    const product = await this.createProductUsecase.execute(dto);
    res.status(201).json(product);
  }
}
