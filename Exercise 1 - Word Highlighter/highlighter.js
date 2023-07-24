document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.querySelector('#myParagraph').textContent;
    const words = paragraph.split(' ');
    const occurrences = {};
  
    for (let word of words) {
      if (!occurrences[word.toLowerCase()]) {
        occurrences[word.toLowerCase()] = 1;
      } else {
        occurrences[word.toLowerCase()]++;
      }
    }
  
    let newParagraph = '';
  
    const mostWords = Object.fromEntries(
      Object.entries(occurrences)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
    );
  
    for (let word of words) {
      if (mostWords[word.toLowerCase()]) {
        !word.startsWith(word.charAt(0).toUpperCase())
          ? (newParagraph += `<span style="background-color: blue">${word}</span> `)
          : (newParagraph += `<span style="background-color: blue; text-decoration: underline">${word}</span> `);
      } else {
        newParagraph += `${word} `;
      }
    }
  
    document.querySelector('#myParagraph').innerHTML = newParagraph;
  });
  
  