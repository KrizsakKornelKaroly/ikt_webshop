let tomb=[
     adat1={
        ar:"20$",
        id:"N",
        img:"./Kepek/lilaPoloN.jpg",
        nev:"Lila Póló"
    },
    adat2={
        ar:"200$",
        id:"N",
        img:"./Kepek/szormeKabatN.jpg",
        nev:"Szőrme kabát"
    },
    adat3={
        ar:"10$",
        id:"N",
        img:"./Kepek/feketePoloN.jpg",
        nev:"Fekete Női Póló"
    },
    adat4={
        ar:"45$",
        id:"N",
        img:"./Kepek/feketeTaskaN.jpg",
        nev:"Fekete női táska"
    },
    adat5={
        ar:"1000$",
        id:"N",
        img:"./Kepek/nyaklancN.jpg",
        nev:"Női gyémánt nyaklánc"
    },
    adat6={
        ar:"25$",
        id:"N",
        img:"./Kepek/nyariRuhaN.jpg",
        nev:"Női nyári ruha"
    }
];
function NoiAdatok()
{
    for(let i=0;i<tomb.length;i++)
    {
        let kep = document.querySelectorAll('.kartyaKep')[i];
        kep.src=tomb[i].img;
        kep.setAttribute("title",tomb[i].nevs)
        let termAr=document.querySelectorAll('.price')[i];
        termAr.innerHTML=tomb[i].ar;
        let titleK=document.querySelectorAll('.title')[i];
        titleK.textContent="";
        titleK.innerHTML=tomb[i].nev;

    }
}
NoiAdatok();