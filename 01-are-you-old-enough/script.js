/*
Notions:
+ document.querySelector
+ Event handling (form submission)
+ Reading inputs values
+ Conditions
+ alert()

Goal:

From the two inputs on the page (one for the name, one for the age)
Make use of the function alert() to indicate whether the person can drink
alcohol or not.

*/

function calcMyBoose(price) {
  return price * 1.2;
}

window.addEventListener('load', function() {
  const form = document.querySelector('form');
  const firstnameInput = document.querySelector('input#firstname');
  const ageInput = document.querySelector('input#age');

  form.addEventListener('submit', function(event) {
    // By default, a form submission refreshes the page. Prevents this behaviour.
    event.preventDefault();

    const firstname = firstnameInput.value;
    // Retrieved value is a string by default. Cast the value into a number.
    const age = parseInt(ageInput.value, 10);

    if (age < 18) {
      alert(`${firstname}, you're too young!`);
    } else if (age < 21){
      alert(`${firstname}, you can drink except in m*fuckin american cities`);
    } else {
      alert(`${firstname}, you're free to go`);
    }
  }) 
});

