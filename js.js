var openNav = document.getElementById("openNav");
var menu = document.getElementById("menu");
var closeNav = document.getElementById("closeNav");



openNav.addEventListener("click", () => {
    menu.classList.add("block");
    menu.classList.remove("none");
    closeNav.style.display = "block";
    openNav.style.display = "none";

});
closeNav.onclick = () => {
    menu.classList.add("none");
    menu.classList.remove("block");
    closeNav.style.display = "none";
    openNav.style.display = "block";
}

// alert("c")



// document.onclick = function() {
//     menu.classList.remove("block");
// };

// alert("g")