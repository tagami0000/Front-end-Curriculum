const arr = ["nice", "nice2"];
const list = document.getElementById("list");

const renderList = () => {
    list.innerHTML = "";
    arr.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
};

document.getElementById("add-button").addEventListener("click", () => {
    arr.push(Math.floor(Math.random() * 100));
    renderList();
});

document.getElementById("remove-button").addEventListener("click", () => {
    arr.pop();
    renderList();
})

document.getElementById("copy-button").addEventListener("click", () => {
    if (arr.length > 0) {
        navigator.clipboard.writeText(arr[arr.length - 1]);
        alert("コピー完了");
    }
});

renderList();