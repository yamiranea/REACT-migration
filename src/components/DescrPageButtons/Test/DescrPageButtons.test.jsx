import { expect } from "vitest";
import DescrPageButtons from "../DescrPageButtons";
import { render, screen } from "@testing-library/react";

const BUTTON_TEXT = "BUTTON_TEXT";
const BUTTON_URL = "BUTTON_URL";
describe("DescrPageButtons", () => {
  test("should render two buttons when view is loaded", () => {
    render(
      <DescrPageButtons buttonText={BUTTON_TEXT} buttonURL={BUTTON_URL} />
    );
    const button = screen.getByText(BUTTON_TEXT);
    expect(button).toBeDefined();
    expect(button).toHaveProperty();
  });
});
