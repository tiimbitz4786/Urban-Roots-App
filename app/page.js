export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          color: "var(--primary-dark)",
          marginBottom: "0.5rem",
        }}
      >
        Urban Roots
      </h1>
      <p style={{ color: "var(--gray-500)", fontSize: "1.125rem" }}>
        Welcome! You are logged in.
      </p>
    </main>
  );
}
