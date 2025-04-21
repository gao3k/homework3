async function showJoke() {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
    const data = await res.json();
    const div = document.querySelector('#display-div');
    div.innerHTML = `ID: ${data.id}<br>Setup: ${data.setup || data.joke}`;
  
    if (data.delivery) {
      setTimeout(() => {
        div.innerHTML += `<br class='fade'>Delivery: ${data.delivery}`;
      }, 1000);
    }
  }
  
  // Add a default joke on page load, and bind button to showJoke()
  document.addEventListener("DOMContentLoaded", showJoke);
  document.querySelector('button').addEventListener('click', showJoke);