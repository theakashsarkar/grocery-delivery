import { Router } from "express";
import { productControllers } from '../../../product/container'
import { authMiddleware } from "../../../../shared/middleware/AuthMiddleware";
import { adminMiddleware } from "../../../product/container";
const router = Router();

router.get('/flash-deals', productControllers.getFlashDeal);
router.post('/create', authMiddleware, adminMiddleware, productControllers.create);
route.post("/:id", authMiddleware, adminMiddleware,)

export default router;

