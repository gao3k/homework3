//1
async function greet() {
    return "Hello, Async!";
}

greet().then(console.log);

//2
async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data);
}

fetchData();

//3

async function getData() {
    try {
        let response = await fetch("https://wrong.url");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getData();


//4
async function fetchMultiple() {
    let [user, posts] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
        fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json())
    ]);
    console.log(user, posts);
}

fetchMultiple();



//5
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    console.log("Start");
    await delay(2000);
    console.log("After 2 seconds");
}

run();
