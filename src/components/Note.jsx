import React from "react";
import { observer } from "mobx-react-lite";
import { NoteRoot } from "./styled.components";
import TaskList from "./TaskList";
import { FaTrash, FaPlusSquare } from "react-icons/fa";

const Note = ({ colors, note, removeNote }) => {
  const changeBackground = (e) => () => {
    note.changeColor(colors[e]);
  };

  const changeTitle = (e) => {
    note.changeTitle(e.target.value);
  };

  const addNewTask = () => {
    note.addTask();
  };

  const deletTask = (id) => {
    note.removeTask(id);
  };

  return (
    <NoteRoot color={note.color}>
      <div className="note__header">
        <input
          type="text"
          placeholder="enter title"
          value={note.title}
          onChange={changeTitle}
        />
      </div>
      <div className="main">
        <TaskList tasks={note.tasks} deletTask={deletTask} />
        <div>
          <FaPlusSquare className="add_task" onClick={addNewTask} />
        </div>
      </div>
      <div className="note__footer">
        <FaTrash
          className="delete_icon"
          onClick={() => {
            removeNote(note.id);
          }}
        />
        {colors.map((color, index) => (
          <div
            style={{ backgroundColor: color }}
            key={index}
            onClick={changeBackground(index)}
          ></div>
        ))}
      </div>
    </NoteRoot>
  );
};

export default observer(Note);
