const apiKey = "YOUR_NEWSAPI_KEY"; // შეცვალე შენი key-ით

async function getNews() {
  const query = document.getElementById("search").value;
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  showNews(data.articles);
}

function showNews(articles) {
  const container = document.getElementById("newsContainer");
  container.innerHTML = "";
  articles.forEach(article => {
    const div = document.createElement("div");
    div.className = "news-item";
    div.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.description || ""}</p>
      <a href="${article.url}" target="_blank">Read more</a>
    `;
    container.appendChild(div);
  });
}
