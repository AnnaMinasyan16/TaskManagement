import { useEffect, useState } from "react";
import "./Done.css";
import Card from "../Cards";

const Done = ({ tasks }) => {
  const [done, setDone] = useState([]);

  useEffect(() => {
    const newList = tasks.filter((task) => task.status === "done");
    setDone(newList);
  }, [tasks]);

  return (
    <div className="done-content">
      <div className="done-header">
        <h3>Done</h3>
      </div>
      <div className="done-cards">
        {done.map((todo) => (
          <Card todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default Done;
