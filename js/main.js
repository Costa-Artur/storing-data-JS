const form = document.querySelector("#novoItem")
const lista = document.querySelector(".lista")
const items = JSON.parse(localStorage.getItem("items")) || []

//console.log(items)

items.forEach(element => {
    createElement(element)
})

form.addEventListener("submit", (event) => {

    event.preventDefault()

    const name = event.target.elements['nome']
    const quantity = event.target.elements['quantidade']

    const exists = items.find(elemento => elemento.name === name.value)

    
    const recentItem = {
        "name": name.value,
        "quantity": quantity.value
    }

    console.log(recentItem)

    if(exists) {

        recentItem.id = exists.id
        
        updateElement(recentItem)

        items[items.findIndex(element => element.id === exists.id)] = recentItem

    } else {

        recentItem.id = items[items.length - 1] ? items[items.length-1].id + 1 : 0

        createElement(recentItem)

        items.push(recentItem)

    }

    console.log(exists)
    
    localStorage.setItem("items", JSON.stringify(items))

    name.value = ""
    quantity.value = ""

})

function createElement(item) {

    const newItem = document.createElement("li")
    newItem.classList.add("item")

    const itemNumber = document.createElement("strong")
    itemNumber.innerHTML = item.quantity
    itemNumber.dataset.id = item.id
    newItem.appendChild(itemNumber)

    newItem.innerHTML += item.name

    newItem.appendChild(deleteButton(item.id))

    lista.appendChild(newItem)

}

function updateElement(item) {

    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantity

}

function deleteButton (id) {

    const elementButton = document.createElement("button")
    elementButton.innerText = "X"
    elementButton.classList.add("delete")

    elementButton.addEventListener("click", function(){
        deleteElement(this.parentNode, id)
    })

    return elementButton
}

function deleteElement (tag,id) {
    tag.remove()

    //console.log(id)

    items.splice(items.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("items", JSON.stringify(items))
}