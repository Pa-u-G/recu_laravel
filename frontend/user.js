document.getElementById("email").innerHTML = sessionStorage.getItem('name')

const formato = new Intl.DateTimeFormat('es-ES', {
  dateStyle: 'medium',
  timeStyle: 'short'
});

let boton = document.getElementById("button")

boton.addEventListener("click", (e)=>{
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('email');
    window.location.href = "login.html";

})

let entrada = document.getElementById("entrada")

fetch("http://localhost:8000/api/entrada", {
        method: "POST",
        headers: {
            "content-type" : "aplication/json"
        },
        body: JSON.stringify({
            id: id,
        })
    })
    .then(response => response.json()) // recoger y mostrar datos del php
    .then(data =>{
        data.forEach(element => {
            let tr = document.createElement("tr")
            let fecha =document.createElement("td")
            let persona =document.createElement("td")
            let assu =document.createElement("td")

            let fechajs = new Date(element.created_at)

            fecha.innerHTML = formato.format(fechajs)
            persona.innerHTML = element.remitente.name
            assu.innerHTML = element.asunto


            tr.appendChild(fecha)
            tr.appendChild(persona)
            tr.appendChild(assu)
            if(element.leido === 1){
                console.log(element.id)
                tr.style.color = "green"
            }

            entrada.appendChild(tr)

            tr.addEventListener("click", (e)=>{
                window.location.href = "show.html?id="+element["id"];
                
            })
        });
    })



let salida = document.getElementById("salida")

fetch("http://localhost:8000/api/salida", {
        method: "POST",
        headers: {
            "content-type" : "aplication/json"
        },
        body: JSON.stringify({
            id: id,
        })
    })
    .then(response => response.json()) // recoger y mostrar datos del php
    .then(data =>{
        data.forEach(element => {
            let tr = document.createElement("tr")
            let fecha =document.createElement("td")
            let persona =document.createElement("td")
            let assu =document.createElement("td")

            let fechajs = new Date(element.created_at)

            fecha.innerHTML = formato.format(fechajs)
            persona.innerHTML = element.destinatario.name
            assu.innerHTML = element.asunto

            tr.appendChild(fecha)
            tr.appendChild(persona)
            tr.appendChild(assu)
            
            salida.appendChild(tr)

            tr.addEventListener("click", (e)=>{
                window.location.href = "show.html?id="+element["id"];
                
            })
        });
    })


let b_entrada = document.getElementById("b_entrada")

b_entrada.addEventListener("click", (e)=> {
    salida.style.display = "none"
    entrada.style.display = "block"
})

let b_salida = document.getElementById("b_salida")

b_salida.addEventListener("click", (e)=> {
    entrada.style.display = "none"
    salida.style.display = "block"
})