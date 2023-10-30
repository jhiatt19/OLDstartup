const uname = document.getElementById('uname');
const output = document.getElementById('output');

function printUname(){
    output.innerHTML = uname.value;
}

function addTableElement(){
    const newCategory = prompt("Category name?");
    localStorage.setItem("category", newCategory);

}

const tableBody = document.querySelector('#budgetRows');
const tableHead = document.querySelector('#budgetHead');
function generateTable() {
    const numRows = prompt("How many rows?");
    const numColumns = prompt("How many columns?");
    const tableHead = document.createElement("th");
    const tableRow = document.createElement("tr");
    tbl.appendChild(row);
    tbl.appendChild(tableBody);
}

function changeHeader() {
    const headerName = prompt("Column Name?");
    localStorage.setItem("columnName", headerName);
    return localStorage.getItem('columnName');
}