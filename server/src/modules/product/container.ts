import { PrismaProductRepo } from "./infrastructure/persistence/PrismaProductRepo";
import { CloudinaryProductStorage } from "./infrastructure/storage/cloudinaryProduct";
import { ProductsController } from "./interface/controllers/ProductsController";
import { CreateProductUsecase } from "./usecases/CreateProductUsecase";
import { FlashDealUsecase } from "./usecases/FlashDealsUsecase";
import { UploadProductImageUsecase } from "./usecases/UploadProductImageUsecase";
import { ProductImageService } from "./infrastructure/service/ProductImageService";
import admin from "../../shared/middleware/Admin";
import { userRepository } from "../auth/container";
const productRepository = new PrismaProductRepo();
const cloudinaryStorage = new CloudinaryProductStorage();
const productImageService = new ProductImageService(cloudinaryStorage);
const adminMiddleware = admin(userRepository);
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
export { adminMiddleware }
