function getAllPosts() {
    let res = fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => json)
    return res;

}

function createHeader(table) {
    let thead = document.createElement("thead");
    let theadRow = document.createElement("tr");
    let cellId = document.createElement("td")

    let cellTitle = document.createElement("td");
    let cellBody = document.createElement("td");
    let celluserId = document.createElement("td");

    let contentId = document.createTextNode("Identificador do post");
    let contentTitle = document.createTextNode("Titulo");
    let contentBody = document.createTextNode("Corpo do post");
    let cellUserId = document.createTextNode("Identificador do usuário");

    cellId.appendChild(contentId);
    cellTitle.appendChild(contentTitle);
    cellBody.appendChild(contentBody);
    celluserId.appendChild(cellUserId);
    theadRow.appendChild(cellId);
    theadRow.appendChild(cellTitle);
    theadRow.appendChild(cellBody);
    theadRow.appendChild(celluserId);

    thead.appendChild(theadRow);
    table.appendChild(thead);
}

function createPostsTable(id, posts) {
    var tbl = document.createElement("table");
    createHeader(tbl)


    var tblBody = document.createElement("tbody");
    const div = document.getElementById(id);

    console.log("post", posts.length)
    for (let index = 0; index < posts.length; index++) {
        let row = document.createElement("tr")
        for (let postIndex = 0; postIndex < 1; postIndex++) {

            let cellId = document.createElement("td")
            let cellTitle = document.createElement("td")
            let cellBody = document.createElement("td")
            let celluserId = document.createElement("td")

            let contentId = document.createTextNode(posts[index].id);
            let contentTitle = document.createTextNode(posts[index].title);
            let contentBody = document.createTextNode(posts[index].body);
            let contentUserId = document.createTextNode(posts[index].userId);

            cellId.appendChild(contentId);
            cellTitle.appendChild(contentTitle);
            cellBody.appendChild(contentBody);
            celluserId.appendChild(contentUserId);
            row.appendChild(cellId)
            row.appendChild(cellTitle)
            row.appendChild(cellBody)
            row.appendChild(celluserId)



        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody)
    div.appendChild(tbl);

}
window.onload = async function () {
    const posts = await getAllPosts();
    createPostsTable("table-wrapper", posts);

}