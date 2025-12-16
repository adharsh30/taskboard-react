import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../pages/TaskList";
import { AuthContext } from "../context/AuthContext";

/* ✅ MOCK react-router-dom */
jest.mock("react-router-dom", () => ({
  Link: ({ children }) => children,
}));

const mockUser = {
  id: 1,
  email: "user@test.com",
};

beforeEach(() => {
  localStorage.clear();

  /* ✅ Mock confirm dialog */
  jest.spyOn(window, "confirm").mockReturnValue(true);

  localStorage.setItem(
    "tasks",
    JSON.stringify([
      {
        id: 101,
        ownerId: 1,
        title: "Test Task",
        description: "Testing",
        priority: "High",
        status: "To Do",
        dueDate: "",
      },
    ])
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("Displays tasks for logged-in user", () => {
  render(
    <AuthContext.Provider value={{ user: mockUser }}>
      <TaskList />
    </AuthContext.Provider>
  );

  expect(screen.getByText("Test Task")).toBeInTheDocument();
});

test("Deletes a task", () => {
  render(
    <AuthContext.Provider value={{ user: mockUser }}>
      <TaskList />
    </AuthContext.Provider>
  );

  fireEvent.click(screen.getByText("Delete"));

  expect(
    screen.queryByText("Test Task")
  ).not.toBeInTheDocument();
});
