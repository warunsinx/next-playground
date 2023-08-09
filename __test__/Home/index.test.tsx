import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "@/pages/index";

describe("Home Page", () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  it("should render the heading", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Hello, World !");
  });

  it("should render the subtitle", () => {
    const subtitle = screen.getByTestId("subtitle");
    expect(subtitle).toHaveTextContent("This is a test subtitle for testing !");
  });
});
