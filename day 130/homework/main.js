async function getJokeAndAdvice() {
    const category = document.getElementById('category').value;
    const output = document.getElementById('output');
    output.innerHTML = 'იტვირთება...';
  
    try {
      // ხუმრობა
      const jokeRes = await fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`);
      const jokeData = await jokeRes.json();
  
      let jokeText = '';
      if (jokeData.type === 'single') {
        jokeText = `😂 <strong>ხუმრობა:</strong> ${jokeData.joke}`;
      } else {
        jokeText = `😂 <strong>ხუმრობა:</strong><br>${jokeData.setup}<br><em>${jokeData.delivery}</em>`;
      }
  
      // რჩევა
      const adviceRes = await fetch('https://api.adviceslip.com/advice');
      const adviceData = await adviceRes.json();
      const adviceText = `💡 <strong>რჩევა:</strong> "${adviceData.slip.advice}"`;
  
      output.innerHTML = `${jokeText}<br><br>${adviceText}`;
    } catch (error) {
      output.innerHTML = `<div class="error">შეცდომა მოხდა მონაცემების წამოღებისას. გთხოვ სცადე თავიდან 🛠</div>`;
      console.error('Error fetching data:', error);
    }
  }
  