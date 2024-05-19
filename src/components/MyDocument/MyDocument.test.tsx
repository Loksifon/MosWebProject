import React from "react";
import { render } from "@testing-library/react";
import { DocumentPDF } from "./MyDocument";

describe("DocumentPDF", () => {
  test("renders document with name and picture", () => {
    const testData = {
      name: "John Doe",
      picture: "https://example.com/picture.jpg",
    };

    const { getByText, getByAltText } = render(<DocumentPDF name={testData.name} picture={testData.picture} />);

    const titleElement = getByText("Title:");
    const nameElement = getByText(testData.name);

    expect(titleElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
  });

  test("renders document with name without picture", () => {
    const testData = {
      name: "John Doe",
      picture: undefined,
    };

    const { getByText, queryByAltText } = render(<DocumentPDF name={testData.name} picture={testData.picture} />);

    const titleElement = getByText("Title:");
    const nameElement = getByText(testData.name);

    expect(titleElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
  });
});
