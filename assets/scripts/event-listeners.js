const hamburger = document.querySelector("#hamburger");
const navConts = [...document.querySelectorAll("nav ul li")];
const navContsNoBurger = navConts.slice(1)
const navLinks=[...document.querySelectorAll(".nav-links")].slice(1)
let opened = false;

hamburger.addEventListener("click",e=>{
    console.log(opened)
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
    console.log(opened)
})

navLinks.forEach(link=>link.addEventListener("click",e=>{
    navContsNoBurger.forEach(cont=>{
        cont.classList.remove("opened");
        hamburger.classList.remove("turned");
        opened = false;
    })
}))