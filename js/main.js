const listContainer = document.querySelector('.countries-list');
const amount = document.querySelector('.amount-block__number');
const btnBeginning = document.querySelector('.btn__1');
const btnIncluded = document.querySelector('.btn__2');
const header = document.querySelector('header');
const span = document.querySelector('.span');

//get random colors
let hexaColor = () => {
  let hexaString = '0123456789adcdef';
  let hexaColor = '#';

  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * hexaString.length);
    hexaColor = hexaColor + hexaString[index]
  }
  return hexaColor;
};
// to set random colors for letter
span.style.color = hexaColor();
setInterval(() => {
  span.style.color = hexaColor();
}, 2000);

// to add list of countries by default
let addToList = (array) => {
  for (let elem of array) {
    let countryItem = document.createElement('li');
    amount.textContent = array.length;
    countryItem.className = 'country-item';
    countryItem.textContent = elem;
    listContainer.appendChild(countryItem);
  }
};
// to initialise list of countries by default
addToList(countries);

//to filter and get country by beginning letters of array
let filterStartsWith = (array) => {
  const inputValue = document.querySelector('#input').value;

  let filteredArray = array.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase()));

  for (let elem of filteredArray) {
    let listItem = document.createElement('li');
    let length = filteredArray.length;
    amount.textContent = filteredArray.length;
    listItem.className = 'country-item';
    listItem.textContent = elem;
    listContainer.appendChild(listItem);
    // to initialise sort and reverse in filtered array
    toClickAz(filteredArray);
    toClickZa(filteredArray);
  }
  // to set '0' if filter will not give coincidences
  if (filteredArray.length === 0) {
    amount.textContent = '0';
  }
};

//to filter and get included letters of array
let filterIncluded = (array) => {
  const inputValue = document.querySelector('#input').value;

  let filteredArray = array.filter((country) => country.toLowerCase().includes(inputValue.toLowerCase()));

  for (let elem of filteredArray) {
    let listItem = document.createElement('li');
    amount.textContent = filteredArray.length;
    listItem.className = 'country-item';
    listItem.textContent = elem;
    listContainer.appendChild(listItem);
    // to initialise sort and reverse in filtered array
    toClickAz(filteredArray);
    toClickZa(filteredArray);
  }
  // to set '0' if filter will not give coincidences
  if (filteredArray.length === 0) {
    amount.textContent = '0';
  }
};

//to clean list of countries before event
let cleanList = () => {
  if (listContainer.hasChildNodes()) {
    listContainer.textContent = '';
  }
};

// click to btn 'Country names that beginning'
btnBeginning.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#input').focus();
  //event to input and get included letters and words
  document.getElementById('input').oninput = () => {
    //to initialise clean list of countries before event
    cleanList();
    // to initialise filter  beginning letters of array
    filterStartsWith(countries)
  };
  // btn to toggle class to active
  btnBeginning.setAttribute('class', 'btn btn__1 active-on');
  btnIncluded.setAttribute('class', 'btn btn__2');

});

//click to btn 'Country names that include'
btnIncluded.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#input').focus();
  //event to input and get included letters and words
  document.getElementById('input').oninput = () => {
    //to initialise clean list of countries before event
    cleanList();
    // to initialise filter include letters of array
    filterIncluded(countries)
  };
  // to set class active to btnIncluded and remove from btnBeginning
  btnIncluded.setAttribute('class', 'btn btn__2 active-on');
  btnBeginning.setAttribute('class', 'btn btn__1');
});

// to reverse countries as a-z
let toSortList = (array) => {
  array.sort();

};

// to reverse countries as z-a
let toReverseList = (array) => {
  array.sort().reverse();

};

// to toggle sort img by adding and remove classes
let toggleSortImg = () => {
  let aZ = document.getElementById('sort__az');
  let zA = document.getElementById('sort__za');

  zA.classList.toggle('display-none');
  aZ.classList.toggle('display-block');
};

// to click on button sort from A-Z
let toClickAz = (array) => {
  document.getElementById('sort__az').onclick = () => {
    toggleSortImg();
    cleanList();
    toSortList(array);
    addToList(array)
  };
};
//to initialise sort array from A to Z
toClickAz(countries);

// to click on button sort from Z-A
let toClickZa = (array) => {
  document.getElementById('sort__za').onclick = () => {
    toggleSortImg();
    cleanList();
    toReverseList(array);
    addToList(array);
  };
};
//to initialise sort array from Z to A
toClickZa(countries);

//by default event to input and get included letters and words
document.getElementById('input').oninput = () => {
  //to initialise clean list of countries before event
  cleanList();
  // to initialise filter include letters of array
  filterIncluded(countries)
};

// click to body for removing class active from btnIncluded or btnBeginning
let toRemoveClassActive = (a, b) => {
  a.onclick = () => {
    btnBeginning.classList.remove('active-on');
    btnIncluded.classList.remove('active-on');
  };
  b.onclick = () => {
    btnBeginning.classList.remove('active-on');
    btnIncluded.classList.remove('active-on');
  };
} ;
//to initialise removing class active from btnIncluded or btnBeginning
toRemoveClassActive(listContainer, header);


// event keydown
document.getElementById('input').onkeydown = (event) => {
  let isDigit = false;

  if (event.key >= 0 || event.key <= 9) {
    isDigit = true;
  }

  if(isDigit === true) {
    event.preventDefault();
  }
};








