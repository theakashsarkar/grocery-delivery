import { prisma } from "../../../../infrastructure/database/prisma"
import { User } from "../../domain/entities/user.entity"
import { UserRepository } from "../../domain/repositories/user.repository"
import { Email } from "../../domain/valueObject/Email"
export class PrismaUserRepository implements UserRepository {
  async findByEmail(email: Email): Promise<User | null> {
    const findUser = await prisma.user.findUnique({ where: { email: email.value } })
    if (!findUser) return null;
    return new User(
      findUser.id,
      findUser.name,
      new Email(findUser.email),
      findUser.password,
    )
  }

  async create(user: User): Promise<User> {
    const createdUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email.value,
        password: user.password
      }
    })
    return new User(
      createdUser.id,
      createdUser.name,
      new Email(createdUser.email),
      createdUser.password,
    )
  }
}
