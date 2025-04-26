import { users } from "../Constants/users";
import "./Modal.css";

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  setTitle,
  setDescription,
  setPriority,
  setUser,
  addTask,
}) => {
  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <button
            className="close-button"
            onClick={() => setIsModalOpen(false)}
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          <select onChange={(e) => setPriority(e.target.value)}>
            <option value="" disabled selected hidden className="hidden-option">
              Priority
            </option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            type="text"
            placeholder="Task title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <select name="" id="" onChange={(e) => setUser(e.target.value)}>
            <option value="" disabled selected hidden className="hidden-option">
              User
            </option>
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
              addTask(), setIsModalOpen(false);
            }}
          >
            Add task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
