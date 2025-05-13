let blogbejegyzesek = 
[
    {
        cim: "Tejszínhabos lókolbász",
        ar: "25.99",
        shortContent: "Lorem ipse dolor sit amet illumine patris és társai kft részvénytársaság kolbász paprika",
        kepeleres: "./Kepek/taskaBlog.jpg",
        longContent: {
            bejegyzCim: "Az új tejszínhabos lókolbász megjelentetett",
            tempSzov: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare pharetra turpis, non efficitur massa elementum quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas in porttitor erat. Vivamus sed orci id est porta laoreet vel vel quam. Nulla pellentesque gravida nibh et auctor. Morbi vitae ligula eu quam accumsan ullamcorper in at mauris. Donec nec convallis velit. Suspendisse faucibus nisl non est sagittis, pretium luctus est ullamcorper.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare pharetra turpis, non efficitur massa elementum quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas in porttitor erat. Vivamus sed orci id est porta laoreet vel vel quam. Nulla pellentesque gravida nibh et auctor. Morbi vitae ligula eu quam accumsan ullamcorper in at mauris. Donec nec convallis velit. Suspendisse faucibus nisl non est sagittis, pretium luctus est ullamcorper.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare pharetra turpis, non efficitur massa elementum quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas in porttitor erat. Vivamus sed orci id est porta laoreet vel vel quam. Nulla pellentesque gravida nibh et auctor. Morbi vitae ligula eu quam accumsan ullamcorper in at mauris. Donec nec convallis velit. Suspendisse faucibus nisl non est sagittis, pretium luctus est ullamcorper.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare pharetra turpis, non efficitur massa elementum quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas in porttitor erat. Vivamus sed orci id est porta laoreet vel vel quam. Nulla pellentesque gravida nibh et auctor. Morbi vitae ligula eu quam accumsan ullamcorper in at mauris. Donec nec convallis velit. Suspendisse faucibus nisl non est sagittis, pretium luctus est ullamcorper. Vivamus sed orci id est porta laoreet vel vel quam. Nulla pellentesque gravida nibh et auctor. Morbi vitae ligula eu quam accumsan ullamcorper in at mauris. Donec nec convallis velit. Suspendisse faucibus nisl non est sagittis, pretium luctus est ullamcorper. Vivamus sed orci id est porta laoreet vel vel quam. Nulla pellentesque gravida nibh et auctor. Morbi vitae ligula eu quam accumsan ullamcorper in at mauris. Donec nec convallis vel"
            
        }
    }
]

function OpenTest(){
    let popupMain = document.createElement("div")

    let leftSide = document.createElement("div")
    let rightSide = document.createElement("div")
    let popupBg = document.createElement("div")
    let popupContent = document.createElement("div")
    let popupClose = document.createElement("button")


    leftSide.classList.add("popupBaloldal")
    let kepLeft = document.createElement("img") 
    kepLeft.classList.add("popupKepLeft")
    kepLeft.src = blogbejegyzesek[0].kepeleres

    let termekLeft = document.createElement("h3")
    termekLeft.classList.add("popupLeftTermekCim")
    termekLeft.textContent = blogbejegyzesek[0].cim

    let arLeft = document.createElement("h3")
    arLeft.classList.add("popupLeftAr")
    arLeft.textContent = `$${blogbejegyzesek[0].ar}`

    let atcLeft = document.createElement("button")
    atcLeft.textContent = "Add to cart"
    atcLeft.classList.add("atcGombLeft")

    rightSide.classList.add("popupJobboldal")
    let cimJobb = document.createElement("h2")
    cimJobb.textContent = blogbejegyzesek[0].longContent.bejegyzCim
    cimJobb.classList.add("popupCimRight")

    let szovegJobb = document.createElement("div")
    szovegJobb.textContent = blogbejegyzesek[0].longContent.tempSzov
    szovegJobb.classList.add("popupSzovegRight")


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
    leftSide.appendChild(termekLeft)
    leftSide.appendChild(arLeft)
    leftSide.appendChild(atcLeft)
    rightSide.appendChild(cimJobb)
    rightSide.appendChild(szovegJobb)
    popupContent.appendChild(rightSide)
}



