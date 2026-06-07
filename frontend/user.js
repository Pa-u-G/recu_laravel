document.getElementById("email").innerHTML = sessionStorage.getItem('email')

let boton = document.getElementById("button")

boton.addEventListener("click", (e)=>{
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('email');
    window.location.href = "login.html";

})