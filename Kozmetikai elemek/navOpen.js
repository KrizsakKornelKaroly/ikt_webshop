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

setInterval(() => {
    if (window.innerWidth > 820) {
        if (teljesMenu.style.display == "none") {
            teljesMenu.style.display = "block"
        }

        /*
        ruhaGomb.addEventListener('mouseenter', () => {
            ruhaKategoriak.style.display = "block"; 
        });
        ruhaGomb.addEventListener('mouseleave', () => {
            ruhaKategoriak.style.display = "none"; 
        });
        */

        ruhaGomb.addEventListener('mouseenter', hoverTesting)
        ruhaGomb.addEventListener('mouseleave', hoverTesting)
        
    }
}, 10);

function hoverTesting(){
    if(ruhaKategoriak.style.display == "block"){
        ruhaKategoriak.style.display = "none"; 
    }
    else{
        ruhaKategoriak.style.display = "block";
    }
}


