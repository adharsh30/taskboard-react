import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function TaskList() {
  const { user } = useAuth();

  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  /* ================= LOAD TASKS ================= */
  useEffect(() => {
    const allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const userTasks = allTasks.filter((t) => t.ownerId === user.id);
    setTasks(userTasks);
  }, [user.id]);

  /* ================= DELETE ================= */
  function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirmDelete) return;

    const updatedTasks = tasks.filter((t) => t.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  }

  /* ================= SEARCH ================= */
  let filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase())
  );

  /* ================= FILTER ================= */
  if (statusFilter !== "All") {
    filteredTasks = filteredTasks.filter(
      (task) => task.status === statusFilter
    );
  }

  if (priorityFilter !== "All") {
    filteredTasks = filteredTasks.filter(
      (task) => task.priority === priorityFilter
    );
  }

  return (
    <div className="page">
      {/* ================= HEADER ================= */}
      <div className="flex-between mb-20">
        <h2 className="page-title">My Tasks</h2>

        <Link to="/new" className="link">
          ➕ Create Task
        </Link>
      </div>

      {/* ================= FILTERS ================= */}
      <div className="filters-wrapper">
        <div className="task-filters">
          <input
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select onChange={(e) => setStatusFilter(e.target.value)}>
            <option>All</option>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>

          <select onChange={(e) => setPriorityFilter(e.target.value)}>
            <option>All</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </div>

      {/* ================= EMPTY STATE ================= */}
      {filteredTasks.length === 0 && (
        <div className="empty-state">
          <p>No tasks found.</p>
          <p>Create your first task to get started 🚀</p>
        </div>
      )}

      {/* ================= TASK LIST ================= */}
      {filteredTasks.map((task) => (
        <div key={task.id} className="task-card">
          <h3>{task.title}</h3>

          <div className="task-meta">
            <span className="badge badge-status">{task.status}</span>
            <span className="badge badge-priority">{task.priority}</span>
          </div>

          {task.description && <p>{task.description}</p>}

          <div className="task-actions">
            <Link to={`/tasks/${task.id}`} className="task-link">
              Edit
            </Link>

            <button
              className="danger"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
