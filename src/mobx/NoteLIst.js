import { makeAutoObservable, action, observable, toJS, autorun } from "mobx";
import Note from "./Note";

class NoteList {
  constructor() {
    this.notes = [];
    makeAutoObservable(this, {
      notes: observable,
      addNewNote: action,
      removeNote: action,
      load: action,
    });
    this.load();
    autoSave(this, this.save.bind(this));
  }

  load() {
    const load = localStorage.getItem("Note");
    if (load) {
      const data = JSON.parse(load);
      for (const saveNote of data.notes) {
        const note = new Note(
          saveNote.title,
          saveNote.color,
          saveNote.id,
          saveNote.tasks
        );
        this.notes.push(note);
      }
    }
  }

  save(json) {
    localStorage.setItem("Note", json);
  }

  addNewNote() {
    const note = new Note();
    this.notes.push(note);
  }
  removeNote(id) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
}

function autoSave(store, save) {
  let firstRun = true;
  autorun(() => {
    const json = JSON.stringify(toJS(store));
    if (!firstRun) {
      save(json);
    }
    firstRun = false;
  });
}

const notelist = new NoteList();

export default notelist;
