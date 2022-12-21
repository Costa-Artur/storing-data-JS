const form = document.querySelector("#novoItem")
const lista = document.querySelector(".lista")
const items = []

form.addEventListener("submit", (event) => {

    event.preventDefault()

    const name = event.target.elements['nome']
    const quantity = event.target.elements['quantity']

    createElement(nome.value, quantidade.value)

    name.value = ""
    quantity.value = ""

})

function createElement(name, quantity) {

    const newItem = document.createElement("li")
    newItem.classList.add("item")

    const itemNumber = document.createElement("strong")
    itemNumber.innerHTML = quantity

    newItem.appendChild(itemNumber)

    newItem.innerHTML += name

    lista.appendChild(newItem)

    const recentItem = {
        "name": name,
        "quantity": quantity
    }

    items.push(recentItem)
    
    localStorage.setItem("item", JSON.stringify(items))

}