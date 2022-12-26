const menu = document.querySelector("#mobile-menu")
const close = document.querySelector("#close")
const modal = document.querySelector(".nav-bar")
const navBar = document.querySelector(".nav-links")

function openMenu() {
    modal.classList.add("open")
    navBar.classList.add("open")
}

function closeMenu() {
    modal.classList.remove("open")
    navBar.classList.remove("open")
}

menu.addEventListener("click", openMenu)
close.addEventListener("click", closeMenu)

// async function getWeather (){
//     const response = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b504163a096b470c92de710494fe399f");
//     const result = await response.json(); 

//     console.log(result);
// }    

// getWeather ()