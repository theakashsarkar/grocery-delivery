import jwt from "jsonwebtoken"
import { TokenService } from "../../shared/interface/TokenService"

export class JwtService implements TokenService {
  async generateToken(payload: object): Promise<string> {
    return jwt.sign(
      payload,
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d"
      }
    )
  }
  async verifyToken(token: string): Promise<object> {
    return jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as object
  }
}
