import { Sequelize } from "sequelize-typescript";
import User from "../../../../domain/user/entity/user";
import UserFactory from "../../../../domain/user/factory/user.factory";
import TravelModel from "../../../travel/repository/sequelize/travel.model";
import UserModel from "./user.model";
import UserRepository from "./user.repository";

describe("User Repository unit test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([UserModel, TravelModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });
  it("should create a user", async () => {
    const user = UserFactory.create("username", "email");

    const repository = new UserRepository();

    await repository.create(user);

    const findUser = await UserModel.findOne({ where: { id: user.id } });

    expect(findUser).toBeDefined();
    expect(findUser.id).toBe(user.id);
  });
  it("should find a user", async () => {
    const repository = new UserRepository();
    const user = UserFactory.create("username", "email");

    await repository.create(user);

    const findUser = await repository.find(user.id);

    expect(findUser).toBeDefined();
    expect(findUser.username).toBe(user.username);
    expect(findUser.email).toBe(user.email);
  });
  it("should find all users", async () => {
    const repository = new UserRepository();
    const user1 = UserFactory.create("username", "email");
    const user2 = UserFactory.create("username2", "email2");

    await repository.create(user1);
    await repository.create(user2);

    const users = await repository.findAll();

    expect(users.length).toBe(2);
    expect(users[0].username).toBe(user1.username);
    expect(users[0].email).toBe(user1.email);
    expect(users[1].username).toBe(user2.username);
    expect(users[1].email).toBe(user2.email);
  });

  it("should update a user", async () => {
    const repository = new UserRepository();
    let user = new User("user_id", "username", "email");

    await repository.create(user);
    user.changeUsername("updatedUsername");

    await repository.update(user);

    const updatedUser = await UserModel.findOne({ where: { id: user.id } });

    expect(updatedUser.toJSON().username).toBe("updatedUsername");
  });
});
