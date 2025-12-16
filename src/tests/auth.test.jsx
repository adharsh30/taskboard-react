import { render, screen, fireEvent } from "@testing-library/react";
import Register from "../pages/Register";

/* ✅ MOCK uuid (fixes ESM error) */
jest.mock("uuid", () => ({
  v4: () => "mock-uuid",
}));

describe("Authentication Tests", () => {
  test("shows error when submitting empty registration form", () => {
    render(<Register />);

    fireEvent.click(screen.getByText(/register/i));

    expect(
      screen.getByText(/all fields are required/i)
    ).toBeInTheDocument();
  });
});
