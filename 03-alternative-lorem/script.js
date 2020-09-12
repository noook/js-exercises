/*
Notions:
+ document.querySelector
+ [element].innerText
+ [string].split
+ document.createElement
+ for loops
+ Modulo (%)
+ conditions (if)
+ [element].style.*
+ [element].appendChild

Goal:

Retrieve the original lorem text, and copy it by applying specific style
every 2 words.
First word must be red, second word must have reduced font size.

*/

window.addEventListener('load', function() {
  const original = document.querySelector('.original').innerText;
  const splitted = original.split(' ');

  const alternative = document.querySelector('.alternative');

  for (let index = 0; index < splitted.length; index++) {
    const element = splitted[index];
    const singleword = document.createElement('span');

    if (index % 2 === 0 ) {
      singleword.style.color = 'red';
    } else {
      singleword.style.fontSize = '8px';
    }

    singleword.innerHTML = element + ' ';
    alternative.appendChild(singleword);
  }
});
