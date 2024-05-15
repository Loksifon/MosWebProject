import { HOME_ROUTE, LOGIN_ROUTE, SCHOOL_ROUTE, USER_ROUTE, PROFILE_ROUTE, FORM_ROUTE } from "./config";

describe("Route Constants", () => {
  test("HOME_ROUTE is defined and has correct value", () => {
    expect(HOME_ROUTE).toBeDefined();
    expect(HOME_ROUTE).toBe("/");
  });

  test("LOGIN_ROUTE is defined and has correct value", () => {
    expect(LOGIN_ROUTE).toBeDefined();
    expect(LOGIN_ROUTE).toBe("/login");
  });

  test("SCHOOL_ROUTE is defined and has correct value", () => {
    expect(SCHOOL_ROUTE).toBeDefined();
    expect(SCHOOL_ROUTE).toBe("/school-table");
  });

  test("USER_ROUTE is defined and has correct value", () => {
    expect(USER_ROUTE).toBeDefined();
    expect(USER_ROUTE).toBe("/user-table");
  });

  test("PROFILE_ROUTE is defined and has correct value", () => {
    expect(PROFILE_ROUTE).toBeDefined();
    expect(PROFILE_ROUTE).toBe("/profile");
  });

  test("FORM_ROUTE is defined and has correct value", () => {
    expect(FORM_ROUTE).toBeDefined();
    expect(FORM_ROUTE).toBe("/form");
  });
});
