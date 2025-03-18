let nyitoGomb = document.getElementById("menuOpen")
let teljesMenu = document.getElementsByClassName("navJobb")[0]

function Nyitas() {
    if (window.innerWidth <= 820) {
        if (teljesMenu.style.display == "none") {
            teljesMenu.style.display = "block"
        }
        else {
            teljesMenu.style.display = "none"
        }
    }
}

setInterval(() => {
    if (window.innerWidth > 820) {
        if (teljesMenu.style.display == "none") {
            teljesMenu.style.display = "block"
        }
    }
}, 10);

function mobileShopOpen(){
    alert("Ezjó")
}