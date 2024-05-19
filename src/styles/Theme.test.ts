import { lightTheme, darkTheme } from "./Theme";
import { DefaultTheme } from "styled-components";

describe("Themes", () => {
  test("Light theme should have correct colors", () => {
    expect(lightTheme.colors.primary).toBe("#5DB7DE");
    expect(lightTheme.colors.background).toBe("#F1E9DB");
    expect(lightTheme.colors.text).toBe("#080705");
    expect(lightTheme.colors.textSecondary).toBe("#356D85");
    expect(lightTheme.colors.white).toBe("#ffffff");
    expect(lightTheme.colors.black).toBe("#000000");
  });

  test("Dark theme should have correct colors", () => {
    expect(darkTheme.colors.primary).toBe("#5DB7DE");
    expect(darkTheme.colors.background).toBe("#191919");
    expect(darkTheme.colors.text).toBe("#ffffff");
    expect(darkTheme.colors.textSecondary).toBe("#356D85");
    expect(darkTheme.colors.white).toBe("#ffffff");
    expect(darkTheme.colors.black).toBe("#000000");
  });
});
