const hamburger = document.querySelector("#hamburger");
const navConts = document.querySelectorAll("nav ul li");
const navLinks=document.querySelectorAll(".nav-links")
let opened = false;

hamburger.addEventListener("click",e=>{
    if (!opened){
        navConts.forEach(link=>link.classList.add("opened"));
        hamburger.classList.add("turned")
        opened=true;
    }
    else{
        navConts.forEach(link=>link.classList.remove("opened"));
        hamburger.classList.remove("turned")
        opened=false;
    }
})

navLinks.forEach(link=>link.addEventListener("click",e=>{
    navConts.forEach(cont=>{
        cont.classList.remove("opened");
        hamburger.classList.remove("turned")
    })
}))