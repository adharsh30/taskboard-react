import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./hooks/useAuth";

/* ================= NAVBAR ================= */

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function handleLogout() {
    setOpen(false);
    logout();
    navigate("/login");
  }

  function getInitials() {
    if (user?.name) {
      return user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    }
    return user?.email?.[0]?.toUpperCase() || "U";
  }

  return (
    <nav>
      {/* Brand */}
      <div className="brand">TaskBoard</div>

      {/* Links */}
      <div className="nav-links">
        {!user && (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}

        {user && (
          <>
            <NavLink to="/" end>
              Tasks
            </NavLink>

            <NavLink to="/new" className="nav-primary">
              New Task
            </NavLink>

            {/* User Menu */}
            <div className="user-menu">
              <div
                className="avatar"
                role="button"
                aria-label="User menu"
                onClick={() => setOpen((prev) => !prev)}
              >
                {getInitials()}
              </div>

              {open && (
                <div className="dropdown">
                  <p className="user-email">{user.email}</p>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

/* ================= APP ================= */

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />

        <Routes>
          {/* Public */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <TaskList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/new"
            element={
              <ProtectedRoute>
                <AddTask />
              </ProtectedRoute>
            }
          />

          <Route
            path="/tasks/:id"
            element={
              <ProtectedRoute>
                <EditTask />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
