function vermenu(){
    var menu = document.querySelector("#menu")
    var corpo_menu = document.querySelector("#corpo_menu")
    if (corpo_menu.style.display === "block") {
        corpo_menu.style.display ="none"
    } else {
        corpo_menu.style.display = "block"
    }
}
var musica = document.querySelector("#music")

musica.volume = 0.2
