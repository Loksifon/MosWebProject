import React from "react";
import { render } from "@testing-library/react";
import { Container } from "./Container";

describe("Container", () => {
  test("renders Container component with correct styles", () => {
    const { container } = render(<Container>Test Content</Container>);
    const containerElement = container.firstChild;

    expect(containerElement).toHaveStyle(`
      max-width: 1280px;
      margin: 0 auto;
      padding: 1rem 0;
      text-align: center;
    `);
  });
});
