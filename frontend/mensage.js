let enviar = document.getElementById("enviar")
let cancelar = document.getElementById("cancelar")

cancelar.addEventListener("click", (e)=>{
    window.location.href = "user.html";

})

enviar.addEventListener("click", (e)=>{
    let des = document.getElementById("destinatario").value
    let assu = document.getElementById("assunto").value
    let texto = document.getElementById("texto").value
    let id = sessionStorage.getItem('id')

    fetch("http://localhost:8000/api/message/store", {
        method: "POST",
        headers: {
            "content-type" : "aplication/json"
        },
        body: JSON.stringify({
            remitente: id,
            destinatario: des,
            asunto: assu,
            mensage: texto,
        })
    })
    .then(response => response.json()) // recoger y mostrar datos del php
    .then(data =>{
        console.log(data)
        window.location.href = "user.html";
    })
})

let select = document.getElementById("destinatario")

fetch("http://localhost:8000/api/users")
.then(response => response.json())
.then(data =>{
    console.log(data)
    data.forEach(element => {
        let option = document.createElement("option")
        option.value = element.id
        option.innerHTML = element.name
        select.appendChild(option)
    });
})