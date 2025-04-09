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
        let nevEsProfil=document.createElement("div");
        let nevSzoveg=document.createElement("h3");
        let uzenetSzoveg=document.createElement("p");
        let pfp=document.createElement("img");
        pfp.src="./Kepek/profilePic.png";
        nevSzoveg.innerHTML=adat.vnev+" "+adat.kernev;
        uzenetSzoveg.innerText=adat.megjegyzes;
        nevSzoveg.classList.add("nevSzoveg");
        uzenetSzoveg.classList.add("uzenetSzoveg");
        tarolo.classList.add("komment");
        pfp.classList.add("profilkep");
        nevEsProfil.classList.add("nevEsProfil");
        let panel=document.getElementById("formos");
        nevEsProfil.appendChild(nevSzoveg);
        nevEsProfil.appendChild(pfp);
        tarolo.appendChild(nevEsProfil);
        tarolo.appendChild(uzenetSzoveg);
        panel.appendChild(tarolo);
        
        

        

        

    }
    else
    {
        alert("Probléma akadt az adatokkal. Próbálja újra");

    }


        
    
}
