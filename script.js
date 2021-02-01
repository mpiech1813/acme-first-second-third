const slots = ['first', 'second', 'third'];

const users = [
  { id: 1, name: 'moe', slot: 'first' },
  { id: 2, name: 'larry', slot: 'second' },
  { id: 3, name: 'curly', slot: 'third' },
  { id: 4, name: 'lusy', slot: 'third', selected: true },
];

// populate the lists

users.forEach(function (currentUser) {
  const userName = currentUser.name;
  const userSlot = currentUser.slot;
  const userSelectStatus = currentUser.selected;
  const currentUnorderedList = document.querySelector(`#${userSlot} > ul`);
  // create new list items
  const newUser = document.createElement('li');
  //add user name to each item
  newUser.innerHTML = `${userName}`;
  // check the selec status
  // do i need it?
  if (userSelectStatus) {
    newUser.className = 'selected';
  } else {
    newUser.className = '';
  }
  currentUnorderedList.appendChild(newUser);
});

// select all unordered lists
// write a function that will toggle the class = 'selected' on and off for each lsit item
// add event listener to all unordered lists

function selectStatusToggle(event) {
  //takes an event, mouse click
  // check if it is selected
  if ((event.target.tagName = 'LI')) {
    if (event.target.className === '') {
      event.target.className = 'selected';
    } else {
      event.target.className = '';
    }
  }
}

// adds event listener to all of the ul's
const allListItems = document
  .querySelectorAll('ul')
  .forEach(function (currentList) {
    return currentList.addEventListener('click', selectStatusToggle);
  });

// code to move the selected item to the right

// create a function that will move the selected element by changing the value of the 'slot' key
function moveLeft(event) {
  const currentPosition;
}

// select all buttons with to left arrow and add event listeners
const leftButtons = document
  .querySelectorAll('.toTheLeft')
  .forEach(function (button) {
    return button.addEventListener('click', moveLeft);
  });
