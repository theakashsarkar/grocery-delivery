export interface TokenService {
  generateToken(
    payload: object
  ): Promise<string>;

  verifyToken(token: string): Promise<object>;
}
