const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');

console.log("hh")
fetch("http://localhost:8000/api/producto", {
    method: "POST",
    headers: {
        "content-type" : "aplication/json"
    },
    body: JSON.stringify({
        id: id
    })
})
.then(response => response.json()) // recoger y mostrar datos del php
.then(data =>{
    console.log(data)
    document.getElementById("name").value = data["name"]
    document.getElementById("price").value = data["price"]

})
    

document.getElementById("enviar").addEventListener("click", (e)=>{
    p1=document.getElementById("name").value
    p2=document.getElementById("price").value
    fetch("http://localhost:8000/api/edit", {
        method: "POST",
        headers: {
            "content-type" : "aplication/json"
        },
        body: JSON.stringify({
            name: p1,
            price: p2,
            id: id
        })
    })
    .then(response => response.json()) // recoger y mostrar datos del php
    .then(data =>{
        window.location.href = "products.html";
    })
})