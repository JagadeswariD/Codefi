/*
Objective: Understand the Observer design pattern.

Instructions:

Add methods to the Subject class to addObserver, removeObserver, and notifyObservers.
When notifyObservers is called on a Subject instance, each observer's update method should be invoked.
Instantiate the Subject and add multiple observers. Afterward, call notifyObservers and ensure each observer gets updated.
*/

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }
  removeObserver(observer) {
    this.observers.filter((n) => n != observer);
  }
  notifyObservers() {
    this.observers.forEach((observer) => observer.update());
  }
}
class Observer {
  constructor(name) {
    this.name = name;
  }
  update() {
    console.log(`${this.name} Observer updated!`);
  }
}

const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");
const observer3 = new Observer("Observer 3");

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

subject.notifyObservers();
