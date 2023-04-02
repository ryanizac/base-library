import { hello } from "./index";

describe("Test source", () => {
  test("should mount hello message", () => {
    const message = hello("ryan");
    expect(message).toBe("hello, ryan");
  });
});
