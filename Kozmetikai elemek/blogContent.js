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

    let popupBg = document.createElement("div")
    let popupContent = document.createElement("div")
    let popupClose = document.createElement("button")
    popupClose.onclick = function()
    {
        popupMain.remove();
    }
    popupClose.textContent = "X"


    /*popupMain.classList.add("popupBg")*/
    
    popupBg.classList.add("popupBgOpaque")
    popupContent.classList.add("popupCont")
    popupClose.classList.add("popupCloseBtn")
    

    popupContent.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    popupBg.textContent = " "
    popupMain.appendChild(popupBg)
    popupMain.appendChild(popupContent)
    popupContent.appendChild(popupClose)
    document.body.appendChild(popupMain)
}



