let cardContainerDetails = document.getElementById("cardContainerDetails")

let queryString = location.search
let params = new URLSearchParams(queryString)

const id = params.get("id")

console.log(id)

const newDetailsEvent = data.events.find(event =>  event._id == id )
console.log(newDetailsEvent)

cardContainerDetails.innerHTML = `<div class="cardDetails d-flex col-11 col-sm-11 col-md-9 col-lg-8">
                                    <div class="imgCardContainerDetails">
                                        <img src="${newDetailsEvent.image}" class="card-img-top" alt="eventoCine">
                                    </div>
                                    <div class="card-bodyDetails text-center d-flex">
                                        <h1 class="card-title text-bg-dark" id="cardTitle">${newDetailsEvent.name}</h1>
                                        <h2>${newDetailsEvent.date}</h2>
                                        <h5 class="card-text">${newDetailsEvent.description}</h5>
                                        <p>Category: ${newDetailsEvent.category}</p>
                                        <p>Place: ${newDetailsEvent.place}</p>
                                        <div class="d-flex infoDetails">
                                            <h5>Capacity: ${newDetailsEvent.capacity}</h5>
                                            <h5>Estimated Attendance: ${newDetailsEvent.assistance}</h5>
                                            <h6>Price: $ ${newDetailsEvent.price}</h6>
                                            <a class="nav-link back" href="./index.html">Back</a>
                                        </div>
                                    </div>
                                </div>`

