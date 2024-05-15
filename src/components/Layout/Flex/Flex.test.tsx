import React from "react";
import { render } from "@testing-library/react";
import { Flex, FlexUl } from "./Flex";

describe("Flex and FlexUl", () => {
  test("renders Flex component with correct styles", () => {
    const { container } = render(<Flex direction="column" justify="center" align="center" gap="1rem" />);
    const flexElement = container.firstChild;

    expect(flexElement).toHaveStyle(`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    `);
  });

  test("renders FlexUl component with correct styles", () => {
    const { container } = render(<FlexUl direction="row" justify="space-between" align="center" gap="2rem" />);
    const flexUlElement = container.firstChild;

    expect(flexUlElement).toHaveStyle(`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    `);
  });
});
