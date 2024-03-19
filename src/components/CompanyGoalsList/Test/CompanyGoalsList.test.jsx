import { describe, expect } from "vitest";
import CompanyGoalsList from "../CompanyGoalsList";
import { render, screen } from "@testing-library/react";

describe("CompanyGoalsList", () => {
  test("should render five cards when view is loaded");
  render(<CompanyGoalsList />);
  expect(screen.getByText("Identify Goals")).toBeDefined();
  expect(screen.getByText("Situation Analysis")).toBeDefined();
  expect(screen.getByText("Tasks Settings")).toBeDefined();
  expect(screen.getByText("Social Interaction")).toBeDefined();
  expect(screen.getByText("Get Things Done")).toBeDefined();
});
