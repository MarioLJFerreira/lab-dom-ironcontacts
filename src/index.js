// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

// Add event listeners to the example row
const exampleDeleteBtn = exampleRow.querySelector('.btn-delete');
const exampleLikeBtn = exampleRow.querySelector('.btn-like');

exampleDeleteBtn.addEventListener('click', () => {
  exampleRow.remove();
});

exampleLikeBtn.addEventListener('click', () => {
  exampleLikeBtn.classList.toggle('selected');
});

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

threeContacts.forEach(element => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>
    <img src="${element.pictureUrl}" />
  </td>
  <td> ${element.name} </td>
  <td> ${element.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
  tableBody.appendChild(newRow);
  
  // ITERATION 2 - Delete Buttons
  const deleteBtn = newRow.querySelector('.btn-delete');
  deleteBtn.addEventListener('click', () => {
    newRow.remove();
  });
  
  // ITERATION 3 - Like Buttons
  const likeBtn = newRow.querySelector('.btn-like');
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('selected');
  });
});

// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener('click', () => {
  if (contacts.length > 0) {
    // Get a random contact from the remaining contacts array
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts.splice(randomIndex, 1)[0];
    
    // Create a new table row for the random contact
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>
        <img src="${randomContact.pictureUrl}" />
      </td>
      <td> ${randomContact.name} </td>
      <td> ${randomContact.popularity.toFixed(2)} </td>
      <td>
        <button class="btn-delete">Delete</button>
      </td>
      <td>
        <button class="btn-like">
          <img src="./images/icon.png" alt="like" />
        </button>
      </td>
    `;
    
    // Append the new row to the table body
    tableBody.appendChild(newRow);
    
    // Add event listeners to the new row's buttons
    const deleteBtn = newRow.querySelector('.btn-delete');
    const likeBtn = newRow.querySelector('.btn-like');
    
    deleteBtn.addEventListener('click', () => {
      newRow.remove();
    });
    
    likeBtn.addEventListener('click', () => {
      likeBtn.classList.toggle('selected');
    });
  }
});
