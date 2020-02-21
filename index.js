let addButton = document.querySelector('#add-row input[type=submit]');

addButton.name = 'add';

let tableBody = document.getElementById('table-body');

////////////////////////////// this function used to add rows to the table ///////////////////////////
addButton.onclick = function(e) {
    e.preventDefault();
    let tableRow = document.createElement('tr');
    let rowData = [];
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    for (let i = 0; i < 4; i++) {
        if (i < 3 ) {
            rowData[i] = document.createElement('td');
            rowData[i].textContent = document.querySelectorAll('input[type=text]')[i].value;
            tableRow.appendChild(rowData[i]);
        } else {
            rowData[i] = document.createElement('td');
            rowData[i].appendChild(deleteButton);
            tableRow.appendChild(rowData[i]);
        }
    }
    tableBody.appendChild(tableRow);
    deleteButton.onclick = function() {
        deleteButton.parentElement.parentElement.parentElement.removeChild(deleteButton.parentElement.parentElement);
    }
    fixTableRows();
}


/////////////////////////////////////// sorting the table /////////////////////////////////////////////


///////////// sorting first names //////////////
let sortedRows = [];
document.querySelector('th:first-of-type').onclick = () => {
    sortingFirstNames();
    document.querySelectorAll('tbody tr').forEach((row) => row.parentElement.removeChild(row));
    sortedRows.forEach((row) => tableBody.appendChild(row));
    document.querySelector('th:first-of-type').addEventListener('click', () => {
        sortedRows.reverse();
        document.querySelectorAll('tbody tr').forEach((row) => row.parentElement.removeChild(row));
        sortedRows.forEach((row) => tableBody.appendChild(row));
    });
}

//this funcion used to sort the first names column in ascending order
function sortingFirstNames() {
    sortedRows = Array.from(document.querySelectorAll('tbody tr')).sort(function(a, b) {
        let nameA = a.children[0].textContent.toUpperCase(); // ignore upper and lowercase
        let nameB = b.children[0].textContent.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
}


/////////////// sorting last names //////////////
document.querySelector('th:nth-of-type(2)').onclick = () => {
    sortingLastNames();
    document.querySelectorAll('tbody tr').forEach((row) => row.parentElement.removeChild(row));
    sortedRows.forEach((row) => tableBody.appendChild(row));
    document.querySelector('th:nth-of-type(2)').addEventListener('click', () => {
        sortedRows.reverse();
        document.querySelectorAll('tbody tr').forEach((row) => row.parentElement.removeChild(row));
        sortedRows.forEach((row) => tableBody.appendChild(row));
    });
}

//this funcion used to sort the last names column in ascending order
function sortingLastNames() {
    sortedRows = Array.from(document.querySelectorAll('tbody tr')).sort(function(a, b) {
        let nameA = a.children[1].textContent.toUpperCase(); // ignore upper and lowercase
        let nameB = b.children[1].textContent.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
}


///////////// sorting ages //////////////
document.querySelector('th:nth-of-type(3)').onclick = () => {
    sortingTheAges();
    document.querySelectorAll('tbody tr').forEach((row) => row.parentElement.removeChild(row));
    sortedRows.forEach((row) => tableBody.appendChild(row));
    document.querySelector('th:nth-of-type(3)').addEventListener('click', () => {
        sortedRows.reverse();
        document.querySelectorAll('tbody tr').forEach((row) => row.parentElement.removeChild(row));
        sortedRows.forEach((row) => tableBody.appendChild(row));
    });
}

//this funcion used to sort the ages column in ascending order
function sortingTheAges() {
    sortedRows = Array.from(document.querySelectorAll('tbody tr')).sort(function(a, b) {
        let numberA = +a.children[2].textContent;
        let numberB = +b.children[2].textContent;
        return numberA - numberB;
    });
}


