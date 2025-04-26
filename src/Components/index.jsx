import "./index.css";
import ToDo from "./ToDo";
import Doing from "./Doing";
import Done from "./Done";
import Blocked from "./Blocked";
import { useEffect, useReducer, useState } from "react";
import Modal from "./Modal";
import EditModal from "./EditModal";
import { TaskContext } from "./TaskContext/TaskContext";

const reducer = (state, action) => {
  if (action.type === "add") {
    return [
      ...state,
      {
        id: Math.random(),
        title: action.payload.title,
        description: action.payload.description,
        status: "todo",
        priority: action.payload.priority,
        user: action.payload.user,
      },
    ];
  } else if (action.type === "delete") {
    return state.filter((task) => task.id !== action.payload.id);
  } else if (action.type === "edit") {
    return state.map((task) =>
      task.id === action.payload.id ? { ...task, ...action.payload } : task
    );
  } else if (action.type === "clear") {
    return [];
  }
};

const TaskManagement = () => {
  const [priority, setPriority] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedTask, setSelectedTask] = useState();

  const [tasks, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    dispatch({
      type: "add",
      payload: {
        priority: priority,
        title: title,
        description: description,
        user: user,
      },
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "delete",
      payload: {
        id: id,
      },
    });
  };

  const editTask = (id, priority, title, description, status, user) => {
    dispatch({
      type: "edit",
      payload: {
        id: id,
        priority: priority,
        title: title,
        description: description,
        status: status,
        user: user,
      },
    });
  };

  const clearTasks = () => {
    dispatch({ type: "clear" });
    localStorage.removeItem("tasks");
  };

  return (
    <TaskContext.Provider
      value={{ deleteTask, setIsEditMode, setSelectedTask }}
    >
      <div className="task-management-container">
        <button onClick={clearTasks} className="clear-tasks-btn">
          Clear Tasks
        </button>
        <div className="task-management-content">
          <div className="section-container">
            <ToDo setIsModalOpen={setIsModalOpen} tasks={tasks} />
          </div>
          <div className="section-container">
            <Doing tasks={tasks} />
          </div>
          <div className="section-container">
            <Done tasks={tasks} />
          </div>
          <div className="section-container">
            <Blocked tasks={tasks} />
          </div>
        </div>
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setTitle={setTitle}
          setDescription={setDescription}
          setPriority={setPriority}
          setUser={setUser}
          addTask={addTask}
        />

        <EditModal
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          editTask={editTask}
          selectedTask={selectedTask}
        />
      </div>
    </TaskContext.Provider>
  );
};

export default TaskManagement;
