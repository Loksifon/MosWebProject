import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Text } from "./Text";

// Имитируем тему
const theme = {
  colors: {
    text: "#000000", // Пример цвета текста
  },
};

describe("Text component", () => {
  test("renders with correct text", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Text>Hello, world!</Text>
      </ThemeProvider>,
    );
    const textElement = getByText("Hello, world!");
    expect(textElement).toBeInTheDocument();
  });

  test("applies correct styles", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Text />
      </ThemeProvider>,
    );
    const textElement = container.querySelector("p");
    expect(textElement).toHaveStyle(`
      color: ${theme.colors.text};
    `);
  });
});
