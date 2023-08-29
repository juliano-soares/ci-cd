import { User } from "../src/models/user";
import { userCreate } from "../src/services/user-create";

describe("User Create", () => {
  it("create a user", () => {
    // Arrange
    const name: string = "John Doe";
    const email: string = "john@email.com";
    const password: string = "123456";

    const user = new User();
    user.name = name;
    user.email = email;
    user.password = password;

    // Act
    const userCreateFunction = userCreate({ name, email, password });

    // Assert
    expect(userCreateFunction).toEqual(user);
  });
});
