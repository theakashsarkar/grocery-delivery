import { FlashDealQueryDto } from "../../dtos/FlashDealQueryDto";
import { FlashDealUsecase } from "../../usecases/FlashDealsUsecase";
import { Request, Response } from "express"
import { CreateProductDto } from "../../dtos/CreateProductDto";
import { CreateProductUsecase } from "../../usecases/CreateProductUsecase";

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}
function mapMulterFile(file: Express.Multer.File) {
  return {
    buffer: file.buffer,
    originalname: file.originalname,
    mimetype: file.mimetype,
    size: file.size,
  }
}
export class ProductsController {
  constructor(
    private flashDealUsecase: FlashDealUsecase,
    private createProductUsecase: CreateProductUsecase,
  ) { }

  getFlashDeal = async (req: Request, res: Response) => {
    const query: FlashDealQueryDto = {
      minStock: req.query.minStock ? Number(req.body.minStock) : undefined,
      limit: req.query.limit ? Number(req.body.limit) : undefined,
    }
    const result = await this.flashDealUsecase.execute(query);
    return res.json(result);
  }

  create = async (req: MulterRequest, res: Response) => {
    try {
      const dto: CreateProductDto = {
        name: req.body.name,
        description: req.body.description,
        price: Number(req.body.price),
        originalPrice: Number(req.body.originalPrice),
        category: req.body.category,
        unit: req.body.unit,
        stock: Number(req.body.stock),
        isOrganic: req.body.isOrganic === "true" || req.body.isOrganic === true,
        file: req.file ? mapMulterFile(req.file) : undefined,
      };

      const product = await this.createProductUsecase.execute(dto);
      res.status(201).json(product);
    } catch (err) {

      return res.status(400).json({ message: (err as Error).message });
    }
  }
}
