import { useEffect, useState } from "react";
import "./Doing.css";
import Card from "../Cards";

const Doing = ({ tasks }) => {
  const [doing, setDoing] = useState([]);

  useEffect(() => {
    const newList = tasks.filter((task) => task.status === "doing");
    setDoing(newList);
  }, [tasks]);

  return (
    <div className="doing-content">
      <div className="doing-header">
        <h3>Doing</h3>
      </div>
      <div className="doing-cards">
        {doing.map((todo) => (
          <Card todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default Doing;
