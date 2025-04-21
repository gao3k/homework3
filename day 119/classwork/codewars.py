#8kyu

function multiTable(n) {
  return Array.from({length: 10}, (_, i) => `${i + 1} * ${n} = ${(i + 1) * n}`).join('\n');
}


#7kyu
function isFlush(cards) {
  return cards.every(card => card.slice(-1) === cards[0].slice(-1));
}


#6kyu
function wave(str) {
  return [...str].map((char, i) =>
    char === ' ' ? null : str.slice(0, i) + char.toUpperCase() + str.slice(i + 1)
  ).filter(Boolean);
}
