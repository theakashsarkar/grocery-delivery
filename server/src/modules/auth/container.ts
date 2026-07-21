import { AuthController } from "./interface/controllers/AuthController"
import { RegisterUserUseCase } from "./usecases/RegisterUserUsecase"
import { LoginUserUseCase } from "./usecases/LoginUserUsecase"
import { PrismaUserRepository } from "./infrastructure/persistence/PrismaUserRepository";
import { BcryptService } from "./infrastructure/services/BcryptService";
import { JwtService } from "../../infrastructure/services/JwtService";
import { RoleService } from "../../infrastructure/services/RoleService";
const userRepository = new PrismaUserRepository();
const hashService = new BcryptService();
const tokenService = new JwtService();
const roleService = new RoleService();
// const hashService =
//   new BcryptService();
//
// const tokenService =
//   new JwtService();

const registerUserUseCase =
  new RegisterUserUseCase(
    userRepository,
    hashService,
    tokenService,
    roleService
  );

const loginUserUseCase =
  new LoginUserUseCase(
    userRepository,
    hashService,
    tokenService,
    roleService
  );

export const authController =
  new AuthController(
    registerUserUseCase,
    loginUserUseCase
  );
