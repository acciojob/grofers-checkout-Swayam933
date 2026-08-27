// Step 1: Get all price cells using class name
const priceCells = document.querySelectorAll('.prices');

// Step 2: Calculate total by summing all prices
let total = 0;
priceCells.forEach(function(cell) {
  total += parseFloat(cell.textContent);
});

// Step 3: Get table and create a new total row
const table = document.getElementById('grocery-table');

const totalRow = document.createElement('tr');
totalRow.classList.add('total-row');

// Single cell spanning both columns
const totalCell = document.createElement('td');
totalCell.setAttribute('colspan', '2');
totalCell.textContent = 'Total: ₹' + total;

// Step 4: Append cell to row, row to table
totalRow.appendChild(totalCell);
table.appendChild(totalRow);