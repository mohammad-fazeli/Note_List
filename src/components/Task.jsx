import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";

import { TaskRoot } from "./styled.components";
import { FaTrash, FaRegCheckSquare, FaRegSquare } from "react-icons/fa";

const Task = ({ task, deleteTask }) => {
  const changeText = (e) => {
    task.changeText(e.target.value);
  };
  const toggle = () => {
    task.toggle();
  };
  const textRef = useRef(null);
  useEffect(() => {
    if (!task.text) textRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          placeholder="enter task"
          ref={textRef}
        />
      </div>
      <FaTrash
        className="check_box"
        onClick={() => {
          deleteTask(task.id);
        }}
      />
    </TaskRoot>
  );
};

export default observer(Task);
