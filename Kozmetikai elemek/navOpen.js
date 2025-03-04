let alapszel = window.innerWidth;
function Nyitas() {
    menunyitocska = document.getElementsByClassName("navJobb")[0]
    menunyitocska.style.display = "block"
    console.log(window.innerWidth)
    if (szelAdat <= 820) {
        if (menunyitocska.style.display == "none") {
            menunyitocska.style.display = "block"
        }
        else (
            menunyitocska.style.display = "none"
        )
    }
    else {
        menunyitocska.style.display = "block"
    }
}
function handleResize() {
    console.log("változás")
    let mostaniSzel = window.innerWidth;
    if (alapszel !== mostaniSzel) {
        alapszel = mostaniSzel;
        console.log(window.innerWidth)
        // Your function to run when the width changes
        if (window.innerWidth <= 820) {
            if (menunyitocska.style.display == "none") {
                menunyitocska.style.display = "block"
            }
            else (
                menunyitocska.style.display = "none"
            )
        }
        else {
            menunyitocska.style.display = "block"
        }
    }
}

// Listen to the resize event
window.addEventListener('resize', console.log(window.innerWidth));