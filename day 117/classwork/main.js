function fetchJoke() {
    const jokeContainer = document.getElementById("joke");
    jokeContainer.innerHTML = "";
    
    fetch("https://v2.jokeapi.dev/joke/Any?type=twopart&safe-mode")
        .then(response => response.json())
        .then(data => {
            jokeContainer.innerHTML = data.setup;
            setTimeout(() => {
                jokeContainer.innerHTML += "<br><br>" + data.delivery;
            }, 1000);
        })
        .catch(error => console.error("Failed to fetch joke", error));
}