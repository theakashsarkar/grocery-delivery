import { NextFunction, Response } from "express";
import { IAuthRequest } from "../interface/IAuthRequest";
import { UserRepository } from "../../modules/auth/domain/repositories/user.repository";
import { RoleService } from "../../infrastructure/services/RoleService";
const admin = (userRepository: UserRepository) => {
  return async (req: IAuthRequest, res: Response, next: NextFunction) => {
    const roleService = new RoleService;
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({
          message: "Unauthorized"
        })
      }
      const user = await userRepository.findById(userId);
      if (!user) {
        return res.status(404).json({
          message: "User Not Found"
        })
      }
      if (!roleService.isAdmin(user.email)) {
        return res.status(500).json({
          message: "User Not a admin"
        })
      }

      if (req.user) req.user.isAdmin = true;
      next();
    } catch (error: any) {
      res.status(500).json({
        message: "Admin verification faild",
        error: error.message
      })
    }
  }
}
export default admin;
