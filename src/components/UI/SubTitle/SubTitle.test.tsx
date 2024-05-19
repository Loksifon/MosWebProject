import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { SubTitle } from "./SubTitle";

// Имитируем тему
const theme = {
  colors: {
    text: "#000000", // Пример цвета текста
  },
};

describe("SubTitle component", () => {
  test("renders with correct text", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <SubTitle>Hello, world!</SubTitle>
      </ThemeProvider>,
    );
    const subTitleElement = getByText("Hello, world!");
    expect(subTitleElement).toBeInTheDocument();
  });

  test("applies correct styles", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <SubTitle />
      </ThemeProvider>,
    );
    const subTitleElement = container.querySelector("h2");
    expect(subTitleElement).toHaveStyle(`
      color: ${theme.colors.text};
    `);
  });
});
