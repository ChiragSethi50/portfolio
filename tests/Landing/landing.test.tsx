import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LandingSection from "@/components/Sections/Landing";

// Pattern for writing tests is AAA (Arrange, Act, Assert)

describe("Landing", () => {
  it("renders the landing section", async () => {
    render(LandingSection()); // ARRANGE
    const user = userEvent.setup();

    const opening = screen.getByText('Hi, my name is'); // ACT

    expect(opening).toBeInTheDocument(); // ASSERT
  });
});
