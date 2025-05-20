let adatok = [];

window.onload = function () {
    const mentett = localStorage.getItem("adatos");
    if (mentett) {
        adatok = JSON.parse(mentett);
        MegjelenitAdatok();
    }
}

function Adatfelvetel() {
    let adat = {
        vnev: document.getElementById("veznev").value,
        kernev: document.getElementById("kernev").value,
        telo: document.getElementById("telefon").value,
        email: document.getElementById("email").value,
        orszag: document.getElementById("orszagok").value,
        regio: document.getElementById("regio").value,
        nem: document.getElementById("nem").value,
        megjegyzes: document.getElementById("megjegyzes").value,
        datum: new Date().toDateString()+" "+new Date().getHours()+":"+new Date().getMinutes()
    }

    if (
        adat.email != "" && adat.email.includes("@") &&
        adat.vnev != "" && adat.kernev != "" &&
        adat.telo != "" && adat.telo.includes("+") &&
        adat.orszag != "" && adat.regio != "" &&
        adat.megjegyzes != ""
    ) {
        adatok.push(adat);
        localStorage.setItem("adatos", JSON.stringify(adatok)); 

        alert("Adatok sikeresen felvéve. Köszönjük a visszajelzésed! \nNév: "
            + adat.vnev + " " + adat.kernev +
            "\nTelefon: " + adat.telo +
            "\nEmail: " + adat.email +
            "\nOrszág, régió: " + adat.orszag + ", " + adat.regio +
            "\nNem: " + adat.nem +
            "\nMegjegyzés: " + adat.megjegyzes)

        MegjelenitAdatok();
    } else {
        alert("Probléma akadt az adatokkal. Próbálja újra");
    }
}

function MegjelenitAdatok() {
    const panel = document.getElementById("kommentszekcio");
    panel.innerHTML = ""; // Törli az eddig megjelenített kommenteket

    adatok.forEach(adat => {
        let tarolo = document.createElement("div");
        let nevEsProfil = document.createElement("div");
        let nevSzoveg = document.createElement("h3");
        let uzenetSzoveg = document.createElement("p");
        let pfp = document.createElement("img");
        let datum = document.createElement("p");

        pfp.src = "./Kepek/profilePic.png";
        nevSzoveg.innerHTML = adat.vnev + " " + adat.kernev;
        uzenetSzoveg.innerText = adat.megjegyzes;
        datum.innerText = adat.datum;

        nevSzoveg.classList.add("nevSzoveg");
        uzenetSzoveg.classList.add("uzenetSzoveg");
        tarolo.classList.add("komment");
        pfp.classList.add("profilkep");
        datum.classList.add("Kdatum");
        nevEsProfil.classList.add("nevEsProfil");

        nevEsProfil.appendChild(nevSzoveg);
        nevEsProfil.appendChild(pfp);
        tarolo.appendChild(nevEsProfil);
        tarolo.appendChild(uzenetSzoveg);
        tarolo.appendChild(datum);
        panel.appendChild(tarolo);
    });
}
