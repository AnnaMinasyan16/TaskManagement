import { useEffect, useState } from "react";
import "./EditModal.css";
import { users } from "../Constants/users";

const EditModal = ({ isEditMode, setIsEditMode, editTask, selectedTask }) => {
  const [updatedPriority, setUpdatedPriority] = useState("");
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedStatus, setUpdatedStatus] = useState("");
  const [updatedUser, setUpdatedUser] = useState("");

  useEffect(() => {
    if (selectedTask) {
      setUpdatedPriority(selectedTask.priority);
      setUpdatedTitle(selectedTask.title);
      setUpdatedDescription(selectedTask.description);
      setUpdatedStatus(selectedTask.status);
      setUpdatedUser(selectedTask.user);
    }
  }, [selectedTask]);

  if (!isEditMode) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <button className="close-button" onClick={() => setIsEditMode(false)}>
            &times;
          </button>
        </div>
        <div>
          <p>Change status</p>
          <select
            value={updatedStatus}
            onChange={(e) => setUpdatedStatus(e.target.value)}
          >
            <option value="todo">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
            <option value="blocked">Blocked</option>
          </select>
        </div>
        <div className="modal-body">
          <select
            value={updatedPriority}
            onChange={(e) => setUpdatedPriority(e.target.value)}
            disabled={selectedTask.status === "blocked"}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            type="text"
            value={updatedTitle}
            placeholder="Task title"
            onChange={(e) => setUpdatedTitle(e.target.value)}
            disabled={selectedTask.status === "blocked"}
          />
          <input
            type="text"
            value={updatedDescription}
            placeholder="Description"
            onChange={(e) => setUpdatedDescription(e.target.value)}
            disabled={selectedTask.status === "blocked"}
          />
          <select
            value={updatedUser}
            onChange={(e) => setUpdatedUser(e.target.value)}
            disabled={selectedTask.status === "blocked"}
          >
            {users.map((user) => {
              return (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              );
            })}
          </select>
          <button
            onClick={() => {
              editTask(
                selectedTask.id,
                updatedPriority,
                updatedTitle,
                updatedDescription,
                updatedStatus,
                updatedUser
              ),
                setIsEditMode(false);
            }}
          >
            Save task
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
