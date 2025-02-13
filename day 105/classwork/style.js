function countFirstLetter(str) {
    if (!str) return 0;
    const firstLetter = str[0].toLowerCase();
    return str.toLowerCase().split('').filter(char => char === firstLetter).length;
  }
  
  const input = document.getElementById('text-input');
  const firstLetterSpan = document.getElementById('first-letter');
  const countSpan = document.getElementById('count');
  const timesSpan = document.getElementById('times');
  
  input.addEventListener('input', (e) => {
    const text = e.target.value;
    const count = countFirstLetter(text);
    
    firstLetterSpan.textContent = text ? `"${text[0]}"` : '-';
    countSpan.textContent = count;
    timesSpan.textContent = count === 1 ? 'time' : 'times';
  });