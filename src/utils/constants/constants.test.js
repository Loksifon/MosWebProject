import { LIMIT_LIST_SCHOOL, LIMIT_LIST_UNIVERSITY, UserData } from "./constants";

describe("UserData", () => {
  test("should have correct length", () => {
    expect(UserData.length).toBe(LIMIT_LIST_SCHOOL + LIMIT_LIST_UNIVERSITY - 1); // No need to add 1 anymore
  });

  test("should have correct structure for each item", () => {
    UserData.forEach((user) => {
      expect(user).toHaveProperty("key");
      expect(user).toHaveProperty("name");
      expect(user).toHaveProperty("age");
      expect(user).toHaveProperty("address");
      expect(user).toHaveProperty("tags");
      expect(Array.isArray(user.tags)).toBe(true);
    });
  });
});
