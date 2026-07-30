import { PrismaProductRepo } from "./infrastructure/persistence/PrismaProductRepo";
import { CloudinaryProductStorage } from "./infrastructure/storage/cloudinaryProduct";
import { ProductsController } from "./interface/controllers/ProductsController";
import { CreateProductUsecase } from "./usecases/CreateProductUsecase";
import { FlashDealUsecase } from "./usecases/FlashDealsUsecase";
import { UploadProductImageUsecase } from "./usecases/UploadProductImageUsecase";
const productRepository = new PrismaProductRepo();
const CloudinaryfileStorage = new CloudinaryProductStorage();
const flashDeal = new FlashDealUsecase(
  productRepository
);
const createProduct = new CreateProductUsecase(
  productRepository
);
const fileStorage = new UploadProductImageUsecase(
  productRepository,
  CloudinaryfileStorage,
);
export const productController =
  new ProductsController(
    flashDeal,
    createProduct,
    CloudinaryfileStorage,
  )
