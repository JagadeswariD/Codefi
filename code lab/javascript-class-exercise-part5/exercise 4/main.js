/*
Objective: Asynchronous Observer with Destructuring

Instructions:

Extend the Subject class to include an async method fetchAndNotify() that retrieves the first 10 posts from the JSONPlaceholder API and then notifies its observers.
The data passed to each observer's update method should be the list of posts fetched.
Handle potential errors using a try/catch block. If an error occurs, invoke the update method of observers with an appropriate error message.
Within the Observer class's update method, destructure the received posts to log the title of the first post. If an error message is received instead, just log it.
Instantiate the Subject, add multiple observers, call fetchAndNotify(), and ensure each observer logs the title of the first post or an error message.
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

  notifyObservers(data) {
    // TODO: Notify all observers with given data
    this.observers.forEach((observer) => observer.update(data));
  }

  async fetchAndNotify() {
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";

    // TODO: Fetch data from the API and notify observers
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      this.notifyObservers(data);
    } catch (error) {
      console.log(error);
      this.notifyObservers(`Error: ${error.message}`);
    }
  }
}

class Observer {
  update(data) {
    // TODO: Handle the received data. If it's an error message, log it.
    // If it's the list of posts, destructure and log the title of the first post.
    if (typeof data === "string") {
      console.log(data); // Log the error message
    } else if (Array.isArray(data) && data.length > 0) {
      const [firstPost] = data;
      console.log(`First Post Title: ${firstPost.title}`);
    } else {
      console.log("No posts available.");
    }
  }
}

// TODO: Instantiate the Subject, add observers, and call the fetchAndNotify method
const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");
const observer3 = new Observer("Observer 3");

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

subject.fetchAndNotify();
