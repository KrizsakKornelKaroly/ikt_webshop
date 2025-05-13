let blogbejegyzesek = 
[
    {
        cim: "Tejszínhabos lókolbász",
        shortContent: "Lorem ipse dolor sit amet illumine patris és társai kft részvénytársaság kolbász paprika",
        kepeleres: "./Kepek/taskaBlog.jpg",
        longContent: {
            bejegyzCim: "Az új tejszínhabos lókolbász megjelentetett"
            
        }
    }
]

function OpenTest(){
    let popupMain = document.createElement("div")

    let leftSide = document.createElement("div")
    let popupBg = document.createElement("div")
    let popupContent = document.createElement("div")
    let popupClose = document.createElement("button")


    leftSide.classList.add("popupBaloldal")
    let kepLeft = document.createElement("img") 
    kepLeft.classList.add("popupKepLeft")
    kepLeft.src = blogbejegyzesek[0].kepeleres

    let termekLeft = document.createElement("h3")
    termekLeft.classList.add("popupLeftTermekCim")

    popupClose.onclick = function()
    {
        popupMain.remove();
    }
    popupClose.textContent = "X"


    /*popupMain.classList.add("popupBg")*/
    
    popupBg.classList.add("popupBgOpaque")
    popupContent.classList.add("popupCont")
    popupClose.classList.add("popupCloseBtn")

    popupBg.textContent = " "
    popupMain.appendChild(popupBg)
    popupMain.appendChild(popupContent)
    popupContent.appendChild(popupClose)
    document.body.appendChild(popupMain)
    popupContent.appendChild(leftSide)
    leftSide.appendChild(kepLeft)
}



