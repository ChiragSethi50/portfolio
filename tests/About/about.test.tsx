import "@testing-library/jest-dom";
import { render, screen, SelectorMatcherOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import About from "@/components/Sections/About";
import { Skills } from "@/components/Sections/About/skills";

// Pattern for writing tests is AAA (Arrange, Act, Assert)

describe("About", () => {
  it("renders the about section", async () => {
    render(About()); // ARRANGE
    const user = userEvent.setup();

    const opening = screen.getByText('About Me'); // ACT
    const skills = Skills.map((skill) => {
        return screen.getByText(skill.skill);
    })

    expect(opening).toBeInTheDocument(); // ASSERT
    expect(skills).toHaveLength(12);
  });
});
