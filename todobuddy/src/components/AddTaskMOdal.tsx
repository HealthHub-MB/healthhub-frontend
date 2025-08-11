import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button"; 

const AddTaskModal = ({ isOpen, onClose, onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title || !description || !priority || !status) {
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

      const response = await fetch("http://localhost:8080/api/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          desc: description,
          status,
          priority,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create task");
      }

      // Notify parent to refresh tasks
      onTaskAdded();
      // Reset form
      setTitle("");
      setDescription("");
      setPriority("");
      setStatus("");
      // Close modal
      onClose();
    } catch (error) {
      console.error("Error creating task:", error);
      alert("Failed to create task. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add New Task"
      showFooter={true}
      footerContent={
        <Button
          label={loading ? "Submitting..." : "Submit Task"}
          onClick={handleSubmit}
          disabled={loading}
          loading={loading}
          loadingLabel="Submitting..."
          color="white"
          bgcolor="#60A5FA" 
          className="w-full"
        />
      }
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm">Title</label>
          <input
            type="text"
            placeholder="e.g., Design the new landing page"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm">Description</label>
          <textarea
            placeholder="Provide a detailed description of the task..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>
          <div>
            <label className="block text-sm">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select Status</option>
              <option value="todo">Todo</option>
              <option value="in-progress">In Progress</option>
              <option value="on-hold">On hold</option>
              <option value="done">Done</option>
              <option value="will-not-do">Will Not Do</option>
            </select>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddTaskModal;
