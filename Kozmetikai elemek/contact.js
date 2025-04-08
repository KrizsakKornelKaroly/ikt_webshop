let adatok=[];
function Adatfelvetel()
{
    let adat={vnev:document.getElementById("veznev").value,
            kernev:document.getElementById("kernev").value,
            telo:document.getElementById("telefon").value,
            email:document.getElementById("email").value,
            orszag:document.getElementById("orszagok").value,
            regio:document.getElementById("regio").value,
            nem:document.getElementById("nem").value,
            megjegyzes:document.getElementById("megjegyzes").value

    }
    if(adat.email!="" && adat.email.includes("@")&& adat.vnev!="" && adat.kernev!="" &&adat.telo!="" && adat.telo.includes("+") && adat.orszag!="" && adat.regio!=""&& adat.megjegyzes!="" )
    {
        adatok.push(adat);
        alert("Adatok sikeresen felvéve. Köszönjük a visszajelzésed! \nNév: "
        +adatok[adatok.length-1].vnev+" "+adatok[adatok.length-1].kernev+
        "\nTelefon: "+adatok[adatok.length-1].telo+
        "\nEmail: "+adatok[adatok.length-1].email+
        "\nOrszág, régió: "+adatok[adatok.length-1].orszag+", "+adatok[adatok.length-1].regio+
        "\nNem: "+adatok[adatok.length-1].nem+
        "\nMegjegyzés: "+adatok[adatok.length-1].megjegyzes)

        let tarolo=document.createElement("div");
        let nevSzoveg=document.createElement("h3");
        nevSzoveg.innerHTML=adat.vnev+" "+adat.kernev;
        nevSzoveg.classList.add("nevSzoveg");
        tarolo.classList.add("komment");
        let panel=document.getElementById("formos");
        tarolo.appendChild(nevSzoveg);
        panel.appendChild(tarolo);
        
        

        

        

    }
    else
    {
        alert("Probléma akadt az adatokkal. Próbálja újra");

    }


        
    
}
