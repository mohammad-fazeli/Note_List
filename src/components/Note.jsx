import React, { useEffect, useRef } from "react";
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
  const deleteTask = (id) => {
    note.removeTask(id);
  };
  const titleRef = useRef(null);

  useEffect(() => {
    if (!note.title) titleRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NoteRoot color={note.color}>
      <div className="note__header">
        <input
          type="text"
          placeholder="enter title"
          value={note.title}
          onChange={changeTitle}
          ref={titleRef}
        />
      </div>
      <div className="main">
        <TaskList tasks={note.tasks} deleteTask={deleteTask} />
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
