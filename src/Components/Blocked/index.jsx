import { useEffect, useState } from "react";
import "./Blocked.css";
import Card from "../Cards";

const Blocked = ({tasks}) => {
 const [blocked, setBlocked] = useState([]);

  useEffect(() => {
    const newList = tasks.filter((task) => task.status === "blocked");
    setBlocked(newList);
  }, [tasks]);

  return (
    <div className="blocked-content">
      <h3>Blocked</h3>
      <div className="blocked-cards">
      {blocked.map((todo) => (
          <Card todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default Blocked;
