import { register } from "../user";
import { verifyPassword } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const mockUserName = "username";
    const mockPassword = "pass word";

    await expect(register(mockUserName, mockPassword)).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    const mockUserName = "username";
    const mockPassword = "pass word";

    verifyPassword.mockReturnValue(false);
    await expect(register(mockUserName, mockPassword)).rejects.toEqual(
      new Error("wrong username or password")
    );
  });
});
