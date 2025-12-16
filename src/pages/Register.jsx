import { useState } from "react";
import bcrypt from "bcryptjs";
import { isValidEmail, isValidPassword } from "../utils/validators";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { name, email, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) {
      return setError("All fields are required");
    }

    if (!isValidEmail(email)) {
      return setError("Invalid email format");
    }

    if (!isValidPassword(password)) {
      return setError(
        "Password must be 8 characters and include a number & special character"
      );
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === email)) {
      return setError("Email already registered");
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login.");
    setForm({ name: "", email: "", password: "", confirmPassword: "" });
    setError("");
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Create Account ✨</h2>
        <p className="auth-subtitle">Start managing your tasks</p>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit">Register</button>
        </form>

        <p style={{ marginTop: "16px", fontSize: "14px" }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
