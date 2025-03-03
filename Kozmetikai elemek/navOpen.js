function Nyitas() {
    function Valtas() {
        if (window.innerWidth <= 820) {
            menunyitocska = document.getElementsByClassName("navJobb")[0]
            if (menunyitocska.style.display == "none") {
                menunyitocska.style.display = "block"
            }
            else (
                menunyitocska.style.display = "none"
            )
        }

    }

    window.onresize = Valtas()
}