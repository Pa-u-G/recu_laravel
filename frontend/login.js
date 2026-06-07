let boton = document.getElementById("button")

boton.addEventListener("click", (e)=>{
    let p1 = document.getElementById("email").value
    let p2 = document.getElementById("password").value
    fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
            "content-type" : "aplication/json"
        },
        body: JSON.stringify({
            email: p1,
            password: p2
        })
    })
    .then(response => response.json()) // recoger y mostrar datos del php
    .then(data =>{
        if(data["id"]){
            sessionStorage.setItem('id', data["id"]);
            sessionStorage.setItem('email', data["email"]);
            window.location.href = "index.html";

        }
        console.log(sessionStorage.getItem('id'))
        console.log(sessionStorage.getItem('email'))
    })
})