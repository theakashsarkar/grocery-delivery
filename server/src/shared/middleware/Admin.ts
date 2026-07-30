import { NextFunction, Response } from "express";
import { IAuthRequest } from "../interface/IAuthRequest";
import { UserRepository } from "../../modules/auth/domain/repositories/user.repository";


const admin = async (req: IAuthRequest, res: Response, next: NextFunction, userRepository: UserRepository) => {
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

    const adminEmails = process.env.ADMIN_EMAILS
      ? process.env.ADMIN_EMAILS.split(",").map((e) => e.trim().toLowerCase())
      : [];

    if (!adminEmails.includes(user.email.value)) {
      return res.status(500).json({
        message: "User Not Found"
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
export default admin;
