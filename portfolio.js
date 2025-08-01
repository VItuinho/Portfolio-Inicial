var path = window.location.pathname;
var btn = document.getElementById("menu-btn")
var menu = document.getElementById("menu")

if (path.includes("index.html") || path === "/") {
    menu.style.display = "none"
    btn.addEventListener("click", () => {
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "block"
            menu.style.animation = "fadeMenu 0.5s ease-out"
        } else {
            menu.style.display = "none"
        }
    });
} else {
    menu.style.display = "block";
    btn.addEventListener("click", () => {
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "block"
            menu.style.animation = "fadeMenu 0.5s ease-out"
        } else {
            menu.style.display = "none"
        }
    });
}

