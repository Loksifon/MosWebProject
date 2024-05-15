import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { HomePage } from "./HomePage";

import "intersection-observer";
const theme = {
  colors: {
    text: "#000000",
  },
};

describe("HomePage", () => {
  test("renders homepage title", () => {
    render(
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>,
    );
    const titleElement = screen.getByText(/HomePage/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders homepage text", () => {
    render(
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>,
    );
    const textElement = screen.getByText(/Это главная страница/i);
    expect(textElement).toBeInTheDocument();
  });
});
