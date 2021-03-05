function getTodos() {
    let res = fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => json);
    return res
}
function createHeader(table) {
    let thead = document.createElement("thead");
    let theadRow = document.createElement("tr");

    let cellId = document.createElement("td")
    let cellTitle = document.createElement("td");
    let celluserId = document.createElement("td");
    let cellCompleted = document.createElement("td");

    let contentId = document.createTextNode("Identificador do post");
    let contentTitle = document.createTextNode("Titulo");
    let contentUserId = document.createTextNode("Identificador do usuário");
    let contentCompleted = document.createTextNode("Completa");


    cellId.appendChild(contentId);
    cellTitle.appendChild(contentTitle);
    cellCompleted.appendChild(contentCompleted);
    celluserId.appendChild(contentUserId);

    theadRow.appendChild(cellId);
    theadRow.appendChild(cellTitle);
    theadRow.appendChild(celluserId);
    theadRow.appendChild(cellCompleted);


    thead.appendChild(theadRow);
    table.appendChild(thead);
}

function createTodosTable(id, todos) {
    var tbl = document.createElement("table")
    createHeader(tbl)

    var tblBody = document.createElement("tbody")
    const div = document.getElementById(id)

    for (let index = 0; index < todos.length; index++) {
        let row = document.createElement("tr")
        for (let todosIndex = 0; todosIndex < 1; todosIndex++) {


            let cellId = document.createElement('td')
            let cellTitle = document.createElement('td')
            let cellUserId = document.createElement("td")
            let cellCompleted = document.createElement("td")

            let contentId = document.createTextNode(todos[index].id)
            let contentTitle = document.createTextNode(todos[index].title)
            let contentUserId = document.createTextNode(todos[index].userId)
            let contentCompleted = document.createTextNode(todos[index].completed ? "Sim" : "Não")


            cellId.appendChild(contentId)
            cellTitle.appendChild(contentTitle)
            cellUserId.appendChild(contentUserId)
            cellCompleted.appendChild(contentCompleted)

            row.appendChild(cellId)
            row.appendChild(cellTitle)
            row.appendChild(cellUserId)
            row.appendChild(cellCompleted)

        }
        tblBody.appendChild(row)
    }
    tbl.appendChild(tblBody)
    div.appendChild(tbl)

}


window.onload = async function () {
    const todos = await getTodos()
    createTodosTable("todos-wrapper", todos)
}