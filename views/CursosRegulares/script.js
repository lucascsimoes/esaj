

const tableBody = document.querySelector(".data-table tbody");

fetch("./data.json")
    .then(r => r.json())
    .then(r => fetchData(r))

function fetchData(data) {
    for (let i = 0; i < data.length; i++) {
        const tr = document.createElement("tr")
        tr.appendChild(createTd(data[i].codigo))
        tr.appendChild(createTd(data[i].curso))
        tr.appendChild(createTd(data[i].competencia))
        tr.appendChild(createTd(data[i].publico))
        tr.appendChild(createTd(data[i].ch))
        tr.setAttribute("data-url", data[i].link)
        tableBody.appendChild(tr)
    }

    const tableRows = document.querySelectorAll("div.data-table tbody tr");

    tableRows.forEach((row) => {
        row.addEventListener("click", function () {
            const url = this.getAttribute("data-url");

            if (url) {
                window.open(url, "_blank");
            }
        });
    });
}

function createTd(text) {
    const td = document.createElement("td");
    td.innerText = text
    return td
}