import React from "react";
import { observer } from "mobx-react-lite";
import AddNote from "./AddNote";
import Note from "./Note";
import { NoteListRoot } from "./styled.components";
import noteList from "../mobx/NoteLIst";

const colors = [
  "#FFDA79",
  "#F8A5C2",
  "#F3A683",
  "#1ABC9C",
  "#34ACE0",
  "#63CDDA",
  "#778beb",
  "#DBE6FF",
];
const NoteList = () => {
  const removeNote = (id) => {
    if (window.confirm("are you shore")) {
      noteList.removeNote(id);
    }
  };
  const addNewNote = () => {
    noteList.addNewNote();
  };
  return (
    <NoteListRoot>
      {noteList.notes.map((note) => (
        <Note
          key={note.id}
          colors={colors}
          note={note}
          removeNote={removeNote}
        />
      ))}
      <AddNote addNewNote={addNewNote} />
    </NoteListRoot>
  );
};

export default observer(NoteList);
