import { makeAutoObservable, observable, action } from "mobx";
import Task from "./Task";

class Note {
  constructor(title, color, id, tasks) {
    this.title = title || "";
    this.tasks = [];
    this.color = color || "#FFDA79";
    this.id = id || Date.now();
    makeAutoObservable(this, {
      title: observable,
      tasks: observable,
      color: observable,
      changeTitle: action,
      changeColor: action,
      addTask: action,
      removeTask: action,
      changeTask: action,
    });
    if (tasks) {
      for (const task of tasks) {
        this.addTask(task.id, task.text, task.done);
      }
    }
  }

  changeTitle(newTitle) {
    this.title = newTitle;
  }
  addTask(id, text, done) {
    const task = new Task(id, text, done);
    this.tasks.push(task);
  }
  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  changeTask(newText, id) {
    console.log("s");
    const task = this.tasks.find((task) => task.id === id);
    task.changeTitle(newText);
  }
  changeColor(newColor) {
    this.color = newColor;
  }
}

export default Note;
