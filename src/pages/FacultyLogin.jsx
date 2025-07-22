import React, { useState } from "react";
import LoginCard from "../components/LoginCard";

const FacultyLogin = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, password, role: "faculty" }),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/faculty-dashboard";
    } else {
      setError(data.message || "Login failed");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i.postimg.cc/QMvRwF9r/IMG-1611-jpg.jpg')",
      }}
    >
      <LoginCard
        title="EzCIE Faculty Portal"
        subtitle="Please login to continue."
        idPlaceholder="Enter your ID"
        passwordPlaceholder="Enter your password"
        buttonText="Login"
        id={id}
        setId={setId}
        password={password}
        setPassword={setPassword}
        onSubmit={handleLogin}
        error={error}
      />
    </div>
  );
};

export default FacultyLogin;
