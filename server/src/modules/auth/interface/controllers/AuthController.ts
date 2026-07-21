import { RegisterUserUseCase } from "../../usecases/RegisterUserUsecase"
import { LoginUserUseCase } from "../../usecases/LoginUserUsecase"
import { Request, Response } from "express"
export class AuthController {
  constructor(
    private registerUserUseCase:
      RegisterUserUseCase,
    private loginUserUseCase:
      LoginUserUseCase
  ) { }

  register = async (req: Request, res: Response) => {
    try {
      const result = await this.registerUserUseCase.execute(
        req.body
      );
      return res.status(201).json(result)
    } catch (e: any) {
      return res.status(500).json({
        success: false,
        error: e.message
      })
    }
  }

  login = async (req: Request, res: Response) => {
    try {
      const result = await this.loginUserUseCase.execute(
        req.body
      );
      return res.status(201).json(result)
    } catch (e: any) {
      return res.status(500).json({
        success: false,
        error: e.message
      })
    }
  };
}
