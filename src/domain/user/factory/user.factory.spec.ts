import UserFactory from "./user.factory";

describe("User factory unit test", () => {
  it("should create a user", () => {
    let user = UserFactory.create("username", "email@mail.com");

    expect(user.id).toBeDefined();
    expect(user.username).toBe("username");
  });
});
