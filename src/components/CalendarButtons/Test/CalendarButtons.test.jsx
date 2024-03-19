import { expect } from "vitest";
import CalendarButtons from "../CalendarButtons";
import { render, screen } from "@testing-library/react";

describe("CalendarButtons", () => {
  test("should render three buttons when view is loaded", () => {
    render(<CalendarButtons />);
    expect(screen.getByText("Schedule")).toBeDefined();
    expect(screen.getByText("Tracking")).toBeDefined();
    expect(screen.getByText("Organize")).toBeDefined();
  });
});
