const slots = ['first', 'second', 'third'];

const users = [
  { id: 1, name: 'moe', slot: 'first' },
  { id: 2, name: 'larry', slot: 'second' },
  { id: 3, name: 'curly', slot: 'third' },
  { id: 4, name: 'lusy', slot: 'third' },
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

  currentUnorderedList.appendChild(newUser);
});

function populate() {
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

    currentUnorderedList.appendChild(newUser);
  });
}

// select all unordered lists
// write a function that will toggle the class = 'selected' on and off for each lsit item
// add event listener to all unordered lists

function selectStatusToggle(event) {
  //takes an event, mouse click
  // check if it is selected
  users.forEach(function (currentUser) {
    if (event.target.innerHTML === currentUser.name) {
      if (!currentUser.selected) {
        currentUser.selected = true;
        event.target.className = 'selected';
      } else {
        currentUser.selected = false;
        event.target.classList.remove('selected');
      }
    }
  });
}

// adds event listener to all of the ul's
const allListItems = document
  .querySelectorAll('ul')
  .forEach(function (currentList) {
    return currentList.addEventListener('click', selectStatusToggle);
  });

// craete a function that will look at the <li> with the class=selected in the same div as the button which initiated the call
// the function will then get the id of the div that houses the button that was clicked
// will need to get the innerHTML of the li selected
// the id name is compared to the elements of the variable 'slots' and index is established
// if the function is left than index -1 or right is index +1
// take the value from either index -/+ 1 and inject to the object under users array

// create a function that will move the selected element by changing the value of the 'slot' key
const allLists = [...document.querySelectorAll('ul')];

function moveLeft1() {
  const ulListFirst = document.querySelector('#unorderedList1');
  const ulListSecond = document.querySelector('#unorderedList2');
  users.forEach(function (currentUser) {
    if (currentUser.selected) {
      if (currentUser.slot === 'second') {
        currentUser.slot = 'first';
        const childrenOfListTwo = [...ulListSecond.children];
        childrenOfListTwo.forEach(function (child) {
          if (child.className === 'selected') {
            ulListSecond.removeChild(child);
            ulListFirst.appendChild(child);
          }
        });
      }
    }
  });
}

function moveLeft2() {
  const ulListThird = document.querySelector('#unorderedList3');
  const ulListSecond = document.querySelector('#unorderedList2');
  users.forEach(function (currentUser) {
    if (currentUser.selected) {
      if (currentUser.slot === 'third') {
        currentUser.slot = 'second';
        const childrenOfListThree = [...ulListThird.children];
        childrenOfListThree.forEach(function (child) {
          if (child.className === 'selected') {
            ulListThird.removeChild(child);
            ulListSecond.appendChild(child);
          }
        });
      }
    }
  });
}

function moveright1() {
  const ulListFirst = document.querySelector('#unorderedList1');
  const ulListSecond = document.querySelector('#unorderedList2');
  users.forEach(function (currentUser) {
    if (currentUser.selected) {
      if (currentUser.slot === 'first') {
        currentUser.slot = 'second';
        const childrenOfListOne = [...ulListFirst.children];
        childrenOfListOne.forEach(function (child) {
          if (child.className === 'selected') {
            ulListFirst.removeChild(child);
            ulListSecond.appendChild(child);
          }
        });
      }
    }
  });
}

function moveright2() {
  const ulListSecond = document.querySelector('#unorderedList2');
  const ulListThird = document.querySelector('#unorderedList3');

  users.forEach(function (currentUser) {
    if (currentUser.selected) {
      if (currentUser.slot === 'second') {
        currentUser.slot = 'third';
        const childrenOfListTwo = [...ulListSecond.children];
        childrenOfListTwo.forEach(function (child) {
          if (child.className === 'selected') {
            ulListSecond.removeChild(child);
            ulListThird.appendChild(child);
          }
        });
      }
    }
  });
}

// v.1 select all buttons with to left arrow and add event listeners
const leftButton1 = document.querySelector('.toTheLeft1');
leftButton1.addEventListener('click', moveLeft1);

const leftButton2 = document.querySelector('.toTheLeft2');
leftButton2.addEventListener('click', moveLeft2);

const rigthButton1 = document.querySelector('.toTheRight1');
rigthButton1.addEventListener('click', moveright1);

const rightButton2 = document.querySelector('.toTheRight2');
rightButton2.addEventListener('click', moveright2);

// scratchj ==> v.2 slect all divs holding the buttons that will catch the clicks,left arrow only for now
// const leftDivCatchers = document
//   .querySelectorAll('#first, #second, #third')
//   .forEach(function (currentDiv) {
//     return currentDiv.addEventListener('click', moveLeft);
//   });
//array all right buttons

// treat each button independantly
// second left moves only to first
// remove child + append child

// data render dom
// modify data, re-render dom
// innerHTML =''
// clear + render
// nav instead of div
// semantic html mark up
