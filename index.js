const names = ["Dustin Matherne", "Debbie Matherne", "Michelle Cullison"];
const occupations = ["Financial Advisor", "Teacher", "Consultant"];

const freelancers = [
    { name: "Daniel Cullison", price: 35, occupation: "Project Manager" },
    { name: "Macie Matherne", price: 40, occupation: "Nurse" },
    { name: "Josh Eaton", price: 100, occupation: "Software Engineer" }
];

const element = document.createElement('h1');
element.innerHTML = 'Freelancer Forum';
document.querySelector('body').appendChild(element);

let totalPrice = 0;
freelancers.forEach(freelancer => {
    totalPrice += freelancer.price;
});

const averagePrice = Math.floor(totalPrice / freelancers.length);

const avgPrice = document.createElement('h2');
avgPrice.innerHTML = `The average freelancer price is $${averagePrice}.`;
document.querySelector('body').appendChild(avgPrice);

const availableFreelancers = document.createElement('h1');
availableFreelancers.innerHTML = 'Available Freelancers';
document.querySelector('body').appendChild(availableFreelancers);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateRandomStartingPrice() {
    return getRandomInt(25, 200);
  }
  
  function pushRandomFreelancer() {
    const randomNameIndex = getRandomInt(0, names.length - 1);
    const randomOccupationIndex = getRandomInt(0, occupations.length - 1);
    
    const startingPrice = generateRandomStartingPrice();
    
    const freelancer = {
      name: names[randomNameIndex],
      occupation: occupations[randomOccupationIndex],
      price: startingPrice
    };
  
    freelancers.push(freelancer);
  }
  
  pushRandomFreelancer();


const body = document.querySelector('body');

const table = document.createElement('table');

const headerRow = table.insertRow();
const headers = ['Name', 'Occupation', 'Starting Price'];

headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
});

freelancers.forEach(freelancer => {
    const row = table.insertRow();


    const nameCell = row.insertCell();
    nameCell.textContent = freelancer.name;

    const occupationCell = row.insertCell();
    occupationCell.textContent = freelancer.occupation;

    const priceCell = row.insertCell();
    priceCell.textContent = `$${freelancer.price}`;
});

body.appendChild(table);
