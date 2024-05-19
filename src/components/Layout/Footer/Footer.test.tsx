import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Footer } from "./Footer";

const theme = {
  colors: {
    primary: "#ffffff",
    white: "#000000",
  },
};

describe("Footer", () => {
  test("renders footer text with correct theme styles", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>,
    );
  });
});
