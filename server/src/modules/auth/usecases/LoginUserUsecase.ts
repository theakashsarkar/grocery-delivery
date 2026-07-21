import { UserRepository } from "../domain/repositories/user.repository";
import { HashService } from "../domain/services/hash.services";
import { Email } from "../domain/valueObject/Email";
import { LoginUserDto } from "../dtos/LoginUserDto";
import { TokenService } from "../../../shared/interface/TokenService";
import { RoleService } from "../../../infrastructure/services/RoleService";

export class LoginUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private hashService: HashService,
    private tokenService: TokenService,
    private roleService: RoleService,
  ) { }
  async execute(data: LoginUserDto) {
    const { email, password } = data;
    if (!email || !password) throw new Error("Please Provide all fields")
    const emailVO = new Email(email)
    const user = await this.userRepository.findByEmail(emailVO);
    console.log("hello", user);
    if (!user) throw new Error("Invalid Email or Password")
    const isMatch = this.hashService.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid Email or Password");
    console.log(user.id)
    const token = await this.tokenService.generateToken({ userId: user.id })
    const userData: any = { ...user };
    delete userData.password;
    userData.isAdmin = this.roleService.isAdmin(userData.email)
    return ({
      user: userData,
      token
    })
  }
}
