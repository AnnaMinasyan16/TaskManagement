import { useEffect, useState } from "react";
import "./ToDo.css";
import Card from "../Cards";

const ToDo = ({ setIsModalOpen, tasks }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const newList = tasks.filter((task) => task.status === "todo");
    setTodos(newList);
  }, [tasks]);

  return (
    <div className="todo-content">
      <div className="todo-header">
        <h3>To Do</h3>
        <button onClick={() => setIsModalOpen(true)}>Add</button>
      </div>
      <div className="todo-cards">
        {todos.map((todo) => (
          <Card todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default ToDo;
