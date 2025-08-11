import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Task {
  id: string;
  title: string;
  desc: string;
  status: string;
  priority: string;
  expected_completion: string;
}

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onTaskUpdate: (updatedTask: Task) => void; 
}

const statusOptions = ["todo", "in-progress", "done", "on-hold", "will-not-do"];
const priorityOptions = ["low", "medium", "high", "critical"];

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete, onTaskUpdate }) => {
  const [editingField, setEditingField] = useState<{ id: string; field: "status" | "priority" } | null>(null);

  const handleChange = async (task: Task, field: "status" | "priority", value: string) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:8080/api/todo/${task.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          [field]: value,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update task");
      }

      const updatedTask = await response.json();
      onTaskUpdate(updatedTask);
      setEditingField(null);
    } catch (error) {
      console.error(error);
      alert("Error updating task.");
    }
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="relative bg-white m-7 p-4 rounded shadow-sm flex flex-col justify-between items-start"
        >
          <div className="mb-3 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.desc}</p>
          </div>

          <div className="flex w-[200px] justify-between items-center gap-2">
            {/* Status Chip / Dropdown */}
            <div className="relative">
              <span
                className={`text-xs font-medium py-1 px-2 rounded-full cursor-pointer ${
                  task.status === "todo"
                    ? "bg-gray-200 text-gray-800"
                    : task.status === "in-progress"
                    ? "bg-blue-200 text-blue-800"
                    : task.status === "done"
                    ? "bg-green-200 text-green-800"
                    : task.status === "on-hold"
                    ? "bg-orange-200 text-orange-800"
                    : "bg-red-200 text-red-800"
                }`}
                onClick={() => setEditingField({ id: task.id, field: "status" })}
              >
                {task.status.replace("-", " ").toUpperCase()}
              </span>
              {editingField?.id === task.id && editingField.field === "status" && (
                <select
                  className="absolute top-full mt-1 left-0 text-sm border rounded"
                  value={task.status}
                  onChange={(e) => handleChange(task, "status", e.target.value)}
                  onBlur={() => setEditingField(null)}
                >
                  {statusOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt.replace("-", " ").toUpperCase()}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* Priority Chip / Dropdown */}
            <div className="relative">
              <span
                className={`text-xs font-medium py-1 px-2 rounded-full cursor-pointer ${
                  task.priority === "low"
                    ? "bg-green-200 text-green-800"
                    : task.priority === "medium"
                    ? "bg-yellow-200 text-yellow-800"
                    : task.priority === "high"
                    ? "bg-red-200 text-red-800"
                    : "bg-purple-200 text-purple-800"
                }`}
                onClick={() => setEditingField({ id: task.id, field: "priority" })}
              >
                {task.priority.toUpperCase()}
              </span>
              {editingField?.id === task.id && editingField.field === "priority" && (
                <select
                  className="absolute top-full mt-1 left-0 text-sm border rounded"
                  value={task.priority}
                  onChange={(e) => handleChange(task, "priority", e.target.value)}
                  onBlur={() => setEditingField(null)}
                >
                  {priorityOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt.toUpperCase()}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>

          {/* Edit/Delete Buttons */}
          <div className="flex gap-5 mt-2 absolute right-8 top-4">
            <button
              onClick={() => onEdit(task)}
              className="text-gray-500 hover:text-blue-500 cursor-pointer"
            >
              <FaEdit size={16} />
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-gray-500 hover:text-red-500 cursor-pointer"
            >
              <FaTrash size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;


