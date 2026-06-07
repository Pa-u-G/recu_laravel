let table = document.getElementById("productos")

let productos

fetch("http://localhost:8000/api/productos", {
    method: "GET",
    headers: {
        "content-type" : "aplication/json"
    }
}).then(response => response.json()) // recoger y mostrar datos del php
.then(data =>{
    productos = data
    console.log(productos)

    productos.forEach(element => {
        console.log(element)
        let tr = document.createElement("tr")
        let name = document.createElement("td")
        let price = document.createElement("td")
        let edit = document.createElement("td")
        
        tr.appendChild(name)
        tr.appendChild(price)
        tr.appendChild(edit)

        table.appendChild(tr)

        name.innerHTML=element["name"]
        price.innerHTML=element["price"]

        let button = document.createElement("a")
        let del = document.createElement("button")

        button.href = "edit.html?id="+element["id"]
        del.id = "d_"+element["id"]
        
        button.innerHTML = "editar"
        del.innerHTML = "borrar"

        edit.appendChild(button)
        edit.appendChild(del)

        del.addEventListener("click",(e) => {
            let id = e.target.id.split("_")[1]
            fetch("http://localhost:8000/api/delete", {
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
                window.location.href = "products.html";
            })
        })

    });
})

