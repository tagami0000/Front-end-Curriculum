const bookObj = [
    {
    title: "絵本", 
    author: "著者名",
    date: "2024/3/1 10:00:00"
    }
]

const renderBook = () => {
    const table = document.getElementById("bookdata");
    table.innerHTML = `
        <tr>
            <th>タイトル</th>
            <th>著者</th>
            <th>日付</th>
        </tr>
    `;

    bookObj.forEach(book => {
        const newTr = document.createElement("tr");
        newTr.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.date}</td>
        `;
        table.appendChild(newTr);
    })
}

const addBook = () => {
    bookObj.push(
        {
            title: "Title-" + Math.floor(Math.random() * 100),
            author: "Author-" + Math.floor(Math.random() * 100),
            date: new Date().toLocaleString(),
        }
    );
    renderBook();
}

const removeBook = () => {
    bookObj.pop();
    renderBook();
}

renderBook();