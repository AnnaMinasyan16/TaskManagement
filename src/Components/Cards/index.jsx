import "./Cards.css";
import editIcon from "../../Icons/edit.png";
import deleteIcon from "../../Icons/delete.png";
import { TaskContext } from "../TaskContext/TaskContext";
import { useContext } from "react";

const Card = ({ todo }) => {

  const { deleteTask, setIsEditMode, setSelectedTask } = useContext(TaskContext);

  return (
    <div className="todo-card">
      <div className={`priority-container ${todo.priority.toLowerCase()}`}>
        <p>{todo.priority}</p>
      </div>
      <div className="texts">
        <p className="title">{todo.title}</p>
        <p className="description">{todo.description}</p>
      </div>
      <div className='user-container'>
        <p>Assigned to: {todo.user}</p>
      </div>
      <div className="edit-delete-btns">
        <button
          className="edit-btn"
          onClick={() => {
            setSelectedTask(todo), setIsEditMode(true), console.log(todo);
          }}
        >
          <img src={editIcon} alt="" />
        </button>
        <button
          className="delete-btn"
          onClick={() => {
            deleteTask(todo.id);
          }}
        >
          <img src={deleteIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Card;
