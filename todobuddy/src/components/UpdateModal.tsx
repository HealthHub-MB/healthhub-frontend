
// import { useEffect, useState } from "react";
// import Modal from "./Modal";
// import Button from "./Button";  

// const UpdateTaskModal = ({ isOpen, onClose, task, onTaskUpdated }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [priority, setPriority] = useState("");
//   const [status, setStatus] = useState("");

//   useEffect(() => {
//     if (task) {
//       setTitle(task.title || "");
//       setDescription(task.desc || "");
//       setPriority(task.priority || "");
//       setStatus(task.status || "");
//     }
//   }, [task]);

//   const handleUpdate = async () => {
//     if (!task?.id) {
//       console.error("Missing task ID.");
//       return;
//     }

//     const updatedTask = {
//       title,
//       desc: description,
//       priority,
//       status,
//     };

//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(`http://localhost:8080/api/todo/${task.id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(updatedTask),
//       });

//       if (!response.ok) throw new Error("Failed to update task");

//       if (onTaskUpdated) onTaskUpdated(); 
//       onClose();                          
//     } catch (error) {
//       console.error("Error updating task:", error);
//     }
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       title="Update Task"
//       showFooter={true}
//       footerContent={
//         <>
//           {/* Cancel Button */}
//           <Button
//             label="Cancel"
//             onClick={onClose}
//             bgcolor="#E5E7EB"  
//             color="black"
//             height="40px"
//             width="auto"
//             padding="0.5rem 1rem"
//           />

//           {/* Update Button */}
//           <Button
//             label="Update"
//             onClick={handleUpdate}
//             bgcolor="#60A5FA" 
//             color="white"
//             height="40px"
//             width="auto"
//             padding="0.5rem 1rem"
//           />
//         </>
//       }
//     >
//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm">Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border rounded px-3 py-2"
//           />
//         </div>
//         <div>
//           <label className="block text-sm">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full border rounded px-3 py-2"
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm">Priority</label>
//             <select
//               value={priority}
//               onChange={(e) => setPriority(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//             >
//               <option value="low">Low</option>
//               <option value="medium">Medium</option>
//               <option value="high">High</option>
//               <option value="critical">Critical</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm">Status</label>
//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//             >
//               <option value="todo">To Do</option>
//               <option value="in-progress">In Progress</option>
//               <option value="on-hold">Hold</option>
//               <option value="done">Done</option>
//               <option value="will-not-do">Will Not Do</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default UpdateTaskModal;



import { useEffect, useState } from "react";
import Modal from "./Modal";
import Button from "./Button";  

const UpdateTaskModal = ({ isOpen, onClose, task, onTaskUpdated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setDescription(task.desc || "");
      setPriority(task.priority || "");
      setStatus(task.status || "");
    }
  }, [task]);

  const handleUpdate = async () => {
    if (!task?.id) {
      console.error("Missing task ID.");
      return;
    }

    const updatedTask = {
      title,
      desc: description,
      priority,
      status,
    };

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:8080/api/todo/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedTask),
      });

      if (!response.ok) throw new Error("Failed to update task");

      // Notify the parent component with the updated task
      if (onTaskUpdated) {
        onTaskUpdated(updatedTask);  // Pass the updated task here
      }
      onClose();                          
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Update Task"
      showFooter={true}
      footerContent={
        <>
          {/* Cancel Button */}
          <Button
            label="Cancel"
            onClick={onClose}
            bgcolor="#E5E7EB"  
            color="black"
            height="40px"
            width="auto"
            padding="0.5rem 1rem"
          />

          {/* Update Button */}
          <Button
            label="Update"
            onClick={handleUpdate}
            bgcolor="#60A5FA" 
            color="white"
            height="40px"
            width="auto"
            padding="0.5rem 1rem"
          />
        </>
      }
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm">Description</label>
          <textarea
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
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="on-hold">Hold</option>
              <option value="done">Done</option>
              <option value="will-not-do">Will Not Do</option>
            </select>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UpdateTaskModal;
