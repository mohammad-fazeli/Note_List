import { makeAutoObservable, observable, action } from "mobx";

class Task {
  constructor(id, text, done) {
    this.text = text || "";
    this.done = done || false;
    this.id = id || Date.now();
    makeAutoObservable(this, {
      text: observable,
      done: observable,
      changeText: action,
      toggle: action,
    });
  }
  changeText(newText) {
    this.text = newText;
  }
  toggle() {
    this.done = !this.done;
  }
}

export default Task;
