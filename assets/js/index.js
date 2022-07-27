let cardContainer = document.getElementById("cardContainer")


for (let i = 0; i < data.events.length; i++) {
    let card = document.createElement("div")
card.className = "card col-12 col-sm-6 col-md-4 col-lg-1 col-lg-1"

    card.innerHTML =    `<div class="card-img">
                        <img src="${data.events[i].image}">
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">${data.events[i].name}</h5>
                        <p class="card-text">${data.events[i].description}</p>
                        <h6>Price: $${data.events[i].price}</h6>
                        <a href="./details.html" class="btn ">see more</a>
                    </div>`

cardContainer.appendChild(card)
    
}