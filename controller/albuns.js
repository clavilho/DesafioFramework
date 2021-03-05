function getAlbuns() {
    let res = fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => json)
    return res;
}


function createHeader(table) {
    let thead = document.createElement("thead");
    let theadRow = document.createElement("tr");
    let cellId = document.createElement("td")

    let cellTitle = document.createElement("td");

    let celluserId = document.createElement("td");

    let contentId = document.createTextNode("Identificador do post");
    let contentTitle = document.createTextNode("Titulo");

    let cellUserId = document.createTextNode("Identificador do usuário");

    cellId.appendChild(contentId);
    cellTitle.appendChild(contentTitle);
    
    celluserId.appendChild(cellUserId);
    theadRow.appendChild(cellId);
    theadRow.appendChild(cellTitle);

    theadRow.appendChild(celluserId);

    thead.appendChild(theadRow);
    table.appendChild(thead);
}

function createAlbunsTable(id, albuns) {
    var tbl = document.createElement("table");
    createHeader(tbl)

    var tblBody = document.createElement("tbody");
    const div = document.getElementById(id);


    
    for (let index = 0; index < albuns.length; index++) {
        let row = document.createElement("tr");
        for (let albunsIndex = 0; albunsIndex < 1; albunsIndex++) {

            let cellId = document.createElement('td');
            let cellTitle = document.createElement('td');
            let cellUserId = document.createElement('td');

            let contentId = document.createTextNode(albuns[index].id);
            let contentTitle = document.createTextNode(albuns[index].title);
            let contentUserId = document.createTextNode(albuns[index].userId);

            cellId.appendChild(contentId);
            cellTitle.appendChild(contentTitle);
            cellUserId.appendChild(contentUserId);

            row.appendChild(cellId);
            row.appendChild(cellTitle);
            row.appendChild(cellUserId);

        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    div.appendChild(tbl);

}



window.onload = async function () {
   
    const albuns = await getAlbuns();

    createAlbunsTable("albuns-wrapper", albuns);
}