import React from "react";
import { observer } from "mobx-react-lite";

import Task from "./Task";
import { TaskListRoot } from "./styled.components";
const TaskList = ({ tasks, deleteTask }) => {
  return (
    <TaskListRoot>
      {tasks.map((task) => (
        <Task key={task.id} deleteTask={deleteTask} task={task} />
      ))}
    </TaskListRoot>
  );
};

export default observer(TaskList);
