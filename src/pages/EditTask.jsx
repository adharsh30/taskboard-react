import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AddTask() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    status: "To Do",
    dueDate: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!task.title) return setError("Title is required");

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ id: Date.now(), ownerId: user.id, ...task });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    navigate("/");
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Add New Task</h2>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input name="title" placeholder="Title" onChange={handleChange} />
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />

          <select name="priority" onChange={handleChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <select name="status" onChange={handleChange}>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>

          <input type="date" name="dueDate" onChange={handleChange} />

          <button type="submit">Save Task</button>
        </form>
      </div>
    </div>
  );
}
