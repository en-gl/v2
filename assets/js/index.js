let cardContainer = document.getElementById("cardContainer")





function crearCards(data, donde) {

    cardContainer.innerHTML = ""

    data.forEach(element => {

        let card = document.createElement("div")

        card.className = `card col-12 col-sm-6 col-md-4 col-lg-1 col-lg-1 ${element.category}`

        card.innerHTML = `<div class="card-img">
                                        <img src="${element.image}">
                                    </div>`

        //creacion de div Body
        let cardBody = document.createElement("div")
        cardBody.className = `card-body`
        card.appendChild(cardBody)

        // Creacion de Titulo H5
        let cardTitle = document.createElement("h5")
        cardTitle.className = 'card-title'
        cardTitle.id = "cardTitle"
        cardTitle.textContent = `${element.name}`

        //Creacion de Descripcion P
        let cardDescription = document.createElement("p")
        cardDescription.className = 'card-text'
        cardDescription.textContent = `${element.description}`

        //Creacion de Precio H6
        let cardPrice = document.createElement("h6")
        cardPrice.textContent = `Price: $ ${element.price}`

        //Creación de Boton ver más 
        let cardBtn = document.createElement("a")
        cardBtn.className = 'btn btnSeeMore'
        cardBtn.textContent = `See more`
        cardBtn.href = `./details.html?id=${element._id}`


        donde.appendChild(card)
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardDescription)
        cardBody.appendChild(cardPrice)
        cardBody.appendChild(cardBtn)
    }

    );

}


crearCards(data.events, cardContainer);


let busqueda = document.getElementById("inputBusqueda");

busqueda.addEventListener("keyup", (e) => {
    filtroBusqueda(busqueda.value)
})

function filtroBusqueda(buscado) {
    let eventosBuscados = ""
    if (buscado.length > 0) {

        eventosBuscados = data.events.filter(evento => evento.name.toLowerCase().includes(buscado))

        console.log(eventosBuscados)

        crearCards(eventosBuscados, cardContainer)

    } else if (buscado.length == 0) {
        let eliminarEventos = eventosBuscados
    }

    return eventosBuscados
}

let checkboxs = document.querySelectorAll("input[type='checkbox']")


checkboxs.forEach(checkbox => checkbox.addEventListener("change", () => {
    let checkboxsChecked = Array.from(checkboxs).filter(check => check.checked).map(
        (e) => e.value)

    let checkboxesCheckeds = Array.from(checkboxs).map(
        (e) => e.value)
    console.log(checkboxesCheckeds)

    if (checkboxsChecked.length === 0) {

        crearCards(data.events, cardContainer);

    } else {

        let nuevoEvento = filtroEventos(data.events, checkboxsChecked)
        crearCards(nuevoEvento, cardContainer)

    }
})

)

function filtroEventos(arrayEventos, categorias) {
    let eventosFiltrados = arrayEventos.filter(evento => categorias.includes(evento.category.toLowerCase()))

    return eventosFiltrados
}