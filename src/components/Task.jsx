import React from "react";
import { observer } from "mobx-react-lite";

import { TaskRoot } from "./styled.components";
import { FaTrash, FaRegCheckSquare, FaRegSquare } from "react-icons/fa";

const Task = ({ task, deletTask }) => {
  const changeText = (e) => {
    task.changeText(e.target.value);
  };
  const toggle = () => {
    task.toggle();
  };

  return (
    <TaskRoot>
      <div>
        {task.done ? (
          <FaRegCheckSquare className="check_box" onClick={toggle} />
        ) : (
          <FaRegSquare className="check_box" onClick={toggle} />
        )}
        <input
          type="text"
          className={task.done ? "done" : ""}
          value={task.text}
          onChange={changeText}
        />
      </div>
      <FaTrash
        className="check_box"
        onClick={() => {
          deletTask(task.id);
        }}
      />
    </TaskRoot>
  );
};

export default observer(Task);
