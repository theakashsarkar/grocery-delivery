import { User } from "../entities/user.entity"
import { Email } from "../valueObject/Email"
export interface UserRepository {
  create(user: User): Promise<User>;
  findByEmail(email: Email): Promise<User | null>;
}

