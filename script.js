let data = JSON.parse(localStorage.getItem("books")) || [];

function add() {
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let category = document.getElementById("category").value;

    data.push({
        name: name,
        author: author,
        category: category
    });

    localStorage.setItem("books", JSON.stringify(data));

    view();
}

function view() {
    let output = "";

    data.forEach((book, i) => {
        output += `
        <div class="border p-2 m-2">
            <b>${book.name}</b><br>
            ${book.author}<br>
            ${book.category}<br>

            <button class="btn btn-warning btn-sm" onclick="update(${i})">
                Update
            </button>

            <button class="btn btn-danger btn-sm" onclick="del(${i})">
                Delete
            </button>
        </div>`;
    });

    document.getElementById("books").innerHTML = output;
}

function update(i) {
    data[i].name = prompt("Book Name", data[i].name);
    data[i].author = prompt("Author", data[i].author);
    data[i].category = prompt("Category", data[i].category);

    localStorage.setItem("books", JSON.stringify(data));
    view();
}

function del(i) {
    data.splice(i, 1);

    localStorage.setItem("books", JSON.stringify(data));
    view();
}

view();