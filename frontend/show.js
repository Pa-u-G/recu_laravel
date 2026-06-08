const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

let mid = urlParams.get('id');

const formato = new Intl.DateTimeFormat('es-ES', {
  dateStyle: 'medium',
  timeStyle: 'short'
});

fetch("http://localhost:8000/api/leido", {
    method: "POST",
    headers: {
        "content-type" : "aplication/json"
    },
    body: JSON.stringify({
        id: mid,
        uid: id
    })
})
.then(response => response.json()) // recoger y mostrar datos del php
.then(data =>{
    console.log(data)
})

console.log("hh")
fetch("http://localhost:8000/api/show", {
    method: "POST",
    headers: {
        "content-type" : "aplication/json"
    },
    body: JSON.stringify({
        id: mid
    })
})
.then(response => response.json()) // recoger y mostrar datos del php
.then(data =>{
    console.log(data)
    let fechajs = new Date(data.created_at)

    document.getElementById("de").innerHTML = data.remitente.name
    document.getElementById("para").innerHTML = data.destinatario.name
    document.getElementById("fecha").innerHTML = formato.format(fechajs)
    document.getElementById("assu").innerHTML = data.asunto
    document.getElementById("texto").innerHTML = data.mensage
})