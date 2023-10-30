const uname = document.getElementById('uname');
const output = document.getElementById('output');

function printUname(){
    output.innerHTML = uname.value;
}

function addTableElement(){
    const newCategory = prompt("Category name?");
    localStorage.setItem("category", newCategory);

}


function generateTable() {
    const numRows = prompt("How many rows?");
    const numColumns = prompt("How many columns?");
    const tbl = document.createElement('table', 'class="table table-bordered table-hover"');
    const tableHead = document.createElement('thead', 'class="table-dark"');
    const tableBody = document.createElement('tbody')
    const tableRow = document.createElement('tr');
    const rowData = document.createElement('td');
    const colHead = document.createElement('th');
    for (let i = 0; i < numColumns; i++){
        const colHeadText = document.createTextNode(prompt("Table Head Column"));
        colHead.append(colHeadText);
        tableRow.appendChild(colHead);
    }
    tableHead.appendChild(tableRow);
    tbl.appendChild(tableHead);
    for (let k = 0; k < numRows; k++){
        for (let j = 0; j < numColumns; j++){
            if (j == 0){
                const rowDataText = document.createTextNode(prompt("Row Name?"));
                rowData = rowDataText;
                tableRow.appendChild(rowData);
            }
            else{
                const rowDataText = document.createTextNode(prompt(tableHead[k] + tableRow[0] + " = "));
                rowData = rowDataText;
                tableRow.appendChild(rowData);
            }
        }
        tableBody.appendChild(tableRow);
    }
    tbl.appendChild(tableBody);
}

function changeHeader() {
    const headerName = prompt("Column Name?");
    localStorage.setItem("columnName", headerName);
    return localStorage.getItem('columnName');
}