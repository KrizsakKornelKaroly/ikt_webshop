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
        let nevSzoveg=document.createElement('h3');
        nevSzoveg.innerHTML=vnev+" "+kernev;
        let tarolo=document.getElementsById('kommentek');
        

        

    }
    else
    {
        alert("Probléma akadt az adatokkal. Próbálja újra");

    }

        
    
}
