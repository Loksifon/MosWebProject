import { device } from "./BreakPoints";

describe("BreakPoints", () => {
  test("device object is defined correctly", () => {
    expect(device).toEqual({
      xs: "(max-width: 350px)",
      sm: "(max-width: 600px)",
      md: "(max-width: 900px)",
      lg: "(max-width: 1280px)",
      xl: "(max-width: 1536px)",
      xxl: "(max-width: 1920px)",
    });
  });
});
