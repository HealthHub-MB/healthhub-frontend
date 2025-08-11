import React, { useState } from "react";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";  

const LoginModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      console.log("login response =>", result);

      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      const { accessToken, user } = result.data;

      // Save to localStorage
      localStorage.setItem("token", accessToken);
      localStorage.setItem("role", user.role);

      // Close modal
      setIsOpen(false);

      navigate("/todolist");
     
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Task Master" subTitle="Welcome Back" hideCloseButton>
      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button
          label={loading ? "Logging in..." : "Login"}
          onClick={!loading ? handleLogin : undefined}
          loading={loading}
          disabled={loading}
          width="100%"
          padding="0.75rem"
          bgcolor="#60A5FA"
          color="white"
        />
      </form>
    </Modal>
  );
};

export default LoginModal;
