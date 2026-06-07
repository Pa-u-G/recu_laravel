document.getElementById("enviar").addEventListener("click", (e)=>{
    p1=document.getElementById("name").value
    p2=document.getElementById("price").value
    fetch("http://localhost:8000/api/store", {
        method: "POST",
        headers: {
            "content-type" : "aplication/json"
        },
        body: JSON.stringify({
            name: p1,
            price: p2,
        })
    })
    .then(response => response.json()) // recoger y mostrar datos del php
    .then(data =>{
        console.log(data)
        window.location.href = "products.html";
    })
})