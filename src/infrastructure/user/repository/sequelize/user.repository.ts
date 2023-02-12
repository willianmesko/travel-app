import User from "../../../../domain/user/entity/user";
import UserRepositoryInterface from "../../../../domain/user/repository/user-repository.interface";
import UserModel from "./user.model";

export default class UserRepository implements UserRepositoryInterface {
  async create(entity: User): Promise<void> {
    await UserModel.create({
      id: entity.id,
      username: entity.username,
      email: entity.email,
    });
  }

  async find(id: string): Promise<User> {
    let userModel;
    try {
      userModel = await UserModel.findOne({
        where: {
          id,
        },
        rejectOnEmpty: true,
      });
    } catch (error) {
      throw new Error("User not found");
    }

    const user = new User(userModel.id, userModel.username, userModel.email);

    return user;
  }

  async findAll(): Promise<User[]> {
    const userModel = await UserModel.findAll();

    const users = userModel.map(
      (user) => new User(user.id, user.username, user.email)
    );
    return users;
  }

  async update(entity: User): Promise<void> {
    try {
      await UserModel.update(
        { username: entity.username },
        { where: { id: entity.id } }
      );
    } catch (error) {
      console.log("error", error);
    }
  }
}
