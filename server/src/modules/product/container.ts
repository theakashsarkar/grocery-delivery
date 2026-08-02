import { PrismaProductRepo } from "./infrastructure/persistence/PrismaProductRepo";
import { CloudinaryProductStorage } from "./infrastructure/storage/cloudinaryProduct";
import { ProductsController } from "./interface/controllers/ProductsController";
import { CreateProductUsecase } from "./usecases/CreateProductUsecase";
import { FlashDealUsecase } from "./usecases/FlashDealsUsecase";
import { UploadProductImageUsecase } from "./usecases/UploadProductImageUsecase";
import { ProductImageService } from "./infrastructure/service/ProductImageService";
const productRepository = new PrismaProductRepo();
const cloudinaryStorage = new CloudinaryProductStorage();
const productImageService = new ProductImageService(cloudinaryStorage);
const flashDeal = new FlashDealUsecase(
  productRepository
);
const createProductUsecase = new CreateProductUsecase(
  productRepository,
  productImageService
);
const fileStorage = new UploadProductImageUsecase(
  productRepository,
  productImageService,
);
export const productControllers =
  new ProductsController(
    flashDeal,
    createProductUsecase,
  )
