/*
+ Notions:
+ document.querySelector
+ for loops
+ document.createElement
+ [element].appendChild
+ [element].innerHTML = ''

Goal:

From a predefined list of items, create an <li> element for each entry of the list
and append it to the unordered list on the page.

*/

const supplyList = [
  'Bananas',
  'Wrench',
  'Unicorn',
  'Chicken wings',
  'Big fat pig',
  'Rubber duck',
];

window.addEventListener('load', function() {
  const list = document.querySelector('ul');

  for (let index = 0; index < supplyList.length; index += 1) {
    const element = supplyList[index];

    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    list.appendChild(listItem);
  }
});
