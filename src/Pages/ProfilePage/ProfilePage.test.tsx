import React from "react";
import { render, screen } from "@testing-library/react";
import { ProfilePage } from "./ProfilePage";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    text: "#000000",
  },
};

describe("ProfilePage", () => {
  test("renders profile page title with correct styles", () => {
    render(
      <ThemeProvider theme={theme}>
        <ProfilePage />
      </ThemeProvider>,
    );
    const pageTitle = screen.getByText(/ProfilePage/i);
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle).toHaveStyle(`color: ${theme.colors.text}`);
    // Другие проверки стилей, если необходимо
  });
});
