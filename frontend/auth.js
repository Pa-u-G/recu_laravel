let id = sessionStorage.getItem("id")

console.log(id)

if(!id){
    window.location.href = "login.html";
}