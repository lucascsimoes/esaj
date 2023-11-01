const tableRows = document.querySelectorAll("div.data-table tbody tr");

tableRows.forEach((row) => {
    row.addEventListener("click", function () {
        const url = this.getAttribute("data-url");

        if (url) {
            window.open(url, "_blank");
        }
    });
});