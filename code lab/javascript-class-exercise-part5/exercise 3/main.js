/*
Objective: Understand and Implement Asynchronous Code Using Async/Await.

Instructions:

Create an async function named fetchPosts that retrieves the first 10 posts from the JSONPlaceholder API.
Handle any potential errors using a try/catch block within the async function. If an error occurs, log an appropriate error message.
Invoke the fetchPosts function and log the results.
*/

async function fetchPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    //return data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  // Your async/await code here
}

// Call the function to fetch posts
fetchPosts();
/* (async () => {
  const posts = await fetchPosts();
  console.log(posts);
})(); */
