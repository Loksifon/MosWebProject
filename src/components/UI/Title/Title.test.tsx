import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Title } from "./Title";
import "intersection-observer";
// Имитируем тему
const theme = {
  colors: {
    text: "#000000", // Пример цвета текста
  },
};

describe("Title component", () => {
  test("renders with correct text", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Title>Hello, world!</Title>
      </ThemeProvider>,
    );
    const titleElement = getByText("Hello, world!");
    expect(titleElement).toBeInTheDocument();
  });

  test("applies correct styles", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Title />
      </ThemeProvider>,
    );
    const titleElement = container.querySelector("h1");
    expect(titleElement).toHaveStyle(`
      color: ${theme.colors.text};
      text-align: center;
      margin: 0 0 1rem 0;
    `);
  });
});
