export class MongoUserRepository implements UserRepository {
  async create(user) {
    return UserModel.create(user)
  }
  async findByEmail(email) {
    return UserModel.findOne({email})
  }

}
