import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import DashboardHeader from "../components/DashboardHeader";
import TaskList from "../components/TaskList";
import AddTaskModal from "../components/AddTaskMOdal";
import UpdateTaskModal from "../components/UpdateModal";
import ConfirmDeleteModal from "../components/DeleteModal";
import Button from "../components/Button"; 

const TASKS_PER_PAGE = 6;

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No authentication token found");
        return;
      }

      let url = `http://localhost:8080/api/todo?page=${currentPage}&limit=${TASKS_PER_PAGE}`;
      const params = [];
      if (statusFilter) params.push(`status=${statusFilter}`);
      if (priorityFilter) params.push(`priority=${priorityFilter}`);
      if (searchTerm) params.push(`title=${encodeURIComponent(searchTerm)}`);
      if (params.length) url += `&${params.join("&")}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch tasks");

      const data = await response.json();
      setTasks(data.todos || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [statusFilter, priorityFilter, searchTerm, currentPage]);

  // Handle task addition
  const handleTaskAdded = () => {
    setCurrentPage(1); 
    fetchTasks(); 
  };

  // Handle task edit
  const onEdit = (task) => {
    setSelectedTask(task);
    setIsOpenEditModal(true);
  };

  // Close the Edit modal
  const handleEditClose = () => {
    setIsOpenEditModal(false);
    setSelectedTask(null);
  };

  // Handle task status filter change
  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  // Handle task priority filter change
  const handlePriorityChange = (e) => {
    setPriorityFilter(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // Open/Close add task modal
  const handleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  // Close Add Task Modal
  const handleClose = () => {
    setIsOpenModal(false);
  };

  // Handle task deletion
  const handleDelete = (id: string) => {
    setTaskToDelete(id);
    setShowDeleteModal(true);
  };

  // Confirm task deletion
  const confirmDelete = async () => {
    if (!taskToDelete) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:8080/api/todo/${taskToDelete}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to delete task");

      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskToDelete)
      );
      setShowDeleteModal(false);
      setTaskToDelete(null);
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  // Handle task update
  const handleTaskUpdate = (updatedTask: any) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Handle previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <DashboardHeader />

      <div className="bg-gray-50 min-h-screen px-30 py-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 ml-[28px] mr-[28px]">
          <h2 className="text-3xl font-bold text-gray-900">My Tasks</h2>
          <Button
            label="New Task"
            onClick={handleModal}
            height="40px" 
            width="auto"
            padding="0.5rem 1rem"
            bgcolor="#60A5FA"
            color="white"
          >
            <FaPlus size={14} />
          </Button>
        </div>

        {/* Add Task Modal */}
        {isOpenModal && (
          <AddTaskModal
            isOpen={isOpenModal}
            onClose={handleClose}
            onTaskAdded={handleTaskAdded} 
          />
        )}

        {/* Update Task Modal */}
        {isOpenEditModal && selectedTask && (
          <UpdateTaskModal
            isOpen={isOpenEditModal}
            onClose={handleEditClose}
            task={selectedTask}
            onTaskUpdated={handleTaskUpdate} 
          />
        )}

        {/* Filters */}
        <div className="bg-white p-5 rounded shadow-sm ml-[28px] mr-[28px] mt-6 space-y-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search tasks by name..."
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex gap-4">
            <select
              className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={statusFilter}
              onChange={handleStatusChange}
            >
              <option value="">Filter by Status</option>
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="on-hold">On Hold</option>
              <option value="done">Done</option>
              <option value="will-not-do">Will Not Do</option>
            </select>

            <select
              className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={priorityFilter}
              onChange={handlePriorityChange}
            >
              <option value="">Filter by Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>
        </div>

        {/* Task List */}
        <TaskList
          tasks={tasks}
          onEdit={onEdit}
          onDelete={handleDelete}
          onTaskUpdate={handleTaskUpdate}
        />

        {/* Pagination */}
        <div className="flex justify-center mt-6 gap-4">
          <Button
            label="Previous"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            height="40px" 
            width="auto"
            padding="0.5rem 1rem"
            bgcolor="#ddd"
            color="#555"
          />
          
          <span className="text-gray-700 font-medium">
            Page {currentPage} of {totalPages}
          </span>

          <Button
            label="Next"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            height="40px" 
            width="auto"
            padding="0.5rem 1rem"
            bgcolor="#ddd"
            color="#555"
          />
        </div>
      </div>

      {/* Confirm Delete Modal */}
      <ConfirmDeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />
    </>
  );
};

export default Dashboard;
