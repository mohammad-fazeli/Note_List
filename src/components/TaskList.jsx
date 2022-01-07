import React from "react";
import { observer } from "mobx-react-lite";

import Task from "./Task";
import { TaskListRoot } from "./styled.components";
const TaskList = ({ tasks, deletTask }) => {
  return (
    <TaskListRoot>
      {tasks.map((task) => (
        <Task key={task.id} deletTask={deletTask} task={task} />
      ))}
    </TaskListRoot>
  );
};

export default observer(TaskList);
