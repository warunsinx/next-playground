import { add } from "../../utils/addUtil";

describe("add", () => {
  it("should add two numbers", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
});
