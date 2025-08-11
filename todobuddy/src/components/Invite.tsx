import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button"; 

interface InviteProps {
  isOpen: boolean;
  onClose: () => void;
}

const Invite: React.FC<InviteProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || !role) {
      alert("Please fill in all fields");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("No authentication token found");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:8080/api/invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email, role }),
      });

      if (!response.ok) throw new Error("Failed to invite user");

      onClose();
    } catch (error) {
      console.error("Error inviting user:", error);
      alert("Failed to invite. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Invite User"
      showFooter
      footerContent={
        <Button
          label={loading ? "Inviting..." : "Invite"}
          onClick={handleSubmit}
          disabled={loading}
          loading={loading}
          loadingLabel="Inviting..."
          color="white"
          bgcolor="#60A5FA" 
          className="w-full"
        />
      }
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm">Name</label>
          <input
            type="text"
            placeholder="e.g., John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input
            type="email"
            placeholder="e.g., john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
      </div>
    </Modal>
  );
};

export default Invite;
