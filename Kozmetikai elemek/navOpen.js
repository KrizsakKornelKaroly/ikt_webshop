let nyitoGomb = document.getElementById("menuOpen")
let teljesMenu = document.getElementsByClassName("navJobb")[0]
let ruhaKategoriak = document.getElementsByClassName("shopDDtartalom")[0]
let ruhaGomb = document.getElementsByClassName("shopDDgomb")[0]

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

function mobileShopOpen(){
    if (window.innerWidth <= 820) {
        if (ruhaKategoriak.style.display == "none") {
            ruhaKategoriak.style.display = "block"
        }
        else {
            ruhaKategoriak.style.display = "none"
        }
    }
}
/*
if(window.innerWidth > 820)
    {
        location.reload()
    }
*/

setInterval(() => {
    if (window.innerWidth > 820) {
        if (teljesMenu.style.display == "none") {
            teljesMenu.style.display = "block"
        }
    }
}, 10);