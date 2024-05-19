import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { CardUniversity, IUniversity } from "./CardUnivesity";

const theme = {
  colors: {
    text: "#000000",
  },
};

describe("CardUniversity", () => {
  const testData: IUniversity = {
    country: "USA",
    name: "Harvard University",
  };

  test("renders university name", () => {
    render(
      <ThemeProvider theme={theme}>
        <CardUniversity data={testData} />
      </ThemeProvider>,
    );
    const universityNameElement = screen.getByText(testData.name);
    expect(universityNameElement).toBeInTheDocument();
  });

  test("renders university country", () => {
    render(
      <ThemeProvider theme={theme}>
        <CardUniversity data={testData} />
      </ThemeProvider>,
    );
    const universityCountryElement = screen.getByText(testData.country);
    expect(universityCountryElement).toBeInTheDocument();
  });
});
