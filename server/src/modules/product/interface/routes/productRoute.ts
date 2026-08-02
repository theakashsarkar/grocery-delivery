import { Router } from "express";
import { productControllers } from '../../../product/container'
const router = Router();

router.get('/flash-deals', productControllers.getFlashDeal);
router.post('/create', productControllers.create);

export default router;

