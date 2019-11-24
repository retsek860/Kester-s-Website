function addTask() {
    if (document.getElementById("taskInput").value == 0) {
        return false;
    } else if (document.getElementById("taskInput").value.length>50) {
        return false;
    }
    var list = document.getElementById("list");
    var row = list.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = document.getElementById("taskInput").value;
    var date = new Date();
    cell2.innerHTML = (date.getHours() + ":" + date.getMinutes());
    cell3.innerHTML = '<button onclick="deleteRow(this.closest(\'tr\'));">✔</button>';
    return false;
}

function deleteRow(x) {
    console.log(x.rowIndex);
    document.getElementById("list").deleteRow(x.rowIndex);
    return false;
}
