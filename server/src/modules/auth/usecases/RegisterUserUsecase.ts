import { RoleService } from "../../../infrastructure/services/RoleService";
import { TokenService } from "../../../shared/interface/TokenService";
import { User } from "../domain/entities/user.entity";
import { UserRepository } from "../domain/repositories/user.repository"
import { HashService } from "../domain/services/hash.services"
import { Email } from "../domain/valueObject/Email";
import { RegisterUserDto } from "../dtos/RegisterUserDto";
export class RegisterUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private hashService: HashService,
    private tokenService: TokenService,
    private roleService: RoleService
  ) { }
  async execute(data: RegisterUserDto) {
    const { name, email, password } = data;
    if (!name || !email || !password) {
      throw new Error("Please provide all fields")
    }

    const emailVO = new Email(email);
    const exists = await this.userRepository.findByEmail(emailVO);
    if (exists) throw new Error("User already exists")
    const passwordHashed = await this.hashService.hash(data.password)
    const createUser = new User(
      crypto.randomUUID(),
      name,
      emailVO,
      passwordHashed,
    )
    const user = await this.userRepository.create(createUser);
    const token = await this.tokenService.generateToken({ userId: user.id });
    const userData: any = { ...user }
    delete userData.password;
    userData.isAdmin = this.roleService.isAdmin(userData.email);
    return ({ user: userData, token })
  }
}
