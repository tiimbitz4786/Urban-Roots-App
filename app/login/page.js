"use client";

import { useState } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        window.location.href = "/";
      } else {
        const data = await res.json();
        setError(data.error || "Invalid password");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "var(--gray-100)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "2.5rem",
          borderRadius: "8px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
          width: "100%",
          maxWidth: "380px",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--primary-dark)",
            textAlign: "center",
          }}
        >
          Urban Roots
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label
            htmlFor="password"
            style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--gray-700)" }}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "0.625rem 0.75rem",
              border: "1px solid var(--gray-200)",
              borderRadius: "6px",
              fontSize: "1rem",
              outline: "none",
            }}
          />
        </div>

        {error && (
          <p style={{ color: "var(--red)", fontSize: "0.875rem", textAlign: "center" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "0.625rem",
            background: loading ? "var(--gray-500)" : "var(--primary)",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </main>
  );
}
