const elements = document.querySelectorAll("body > section > *")
for (let i = 0; i < elements.length; i++) {
    const getOrder = Number(elements[i].getAttribute("data-order"))
    elements[i].style.order = getOrder
}