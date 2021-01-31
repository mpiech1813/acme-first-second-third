const slots = ['first', 'second', 'third'];

const users = [
  { id: 1, name: 'moe', slot: 'first' },
  { id: 2, name: 'larry', slot: 'second' },
  { id: 3, name: 'curly', slot: 'third' },
  { id: 4, name: 'lusy', slot: 'third', selected: true },
];

users.forEach(function (currentUser) {
  const userName = currentUser.name;
  const userSlot = currentUser.slot;
  const userSelectStatus = currentUser.selected;
  const currentUnorderedList = document.querySelector(`#${userSlot} > ul`);
  const newUser = document.createElement('li');
  newUser.innerHTML = `${userName}`;
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
const allListItems = document
  .querySelectorAll('ul')
  .forEach(function (currentList) {
    return currentList.addEventListener('click', selectStatusToggle);
  });
