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
    adatok.push(adat);
    alert("Adatok sikeresen felvéve. Köszönjük a visszajelzésed! \nNév: "+adatok[0].vnev);
        
    
}
