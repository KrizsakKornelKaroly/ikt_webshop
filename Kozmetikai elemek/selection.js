let tomb=[
     adat1={
        ar:"20",
        id:"N",
        img:"./Kepek/lilaPoloN.jpg",
        nev:"Lila Póló"
    },
    adat2={
        ar:"200",
        id:"N",
        img:"./Kepek/szormeKabatN.jpg",
        nev:"Szőrme kabát"
    },
    adat3={
        ar:"10",
        id:"N",
        img:"./Kepek/feketePoloN.jpg",
        nev:"Fekete Női Póló"
    },
    adat4={
        ar:"45",
        id:"N",
        img:"./Kepek/feketeTaskaN.jpg",
        nev:"Fekete női táska"
    },
    adat5={
        ar:"1000",
        id:"N",
        img:"./Kepek/nyaklancN.jpg",
        nev:"Női gyémánt nyaklánc"
    },
    adat6={
        ar:"25",
        id:"N",
        img:"./Kepek/nyariRuhaN.jpg",
        nev:"Női nyári ruha"
    },
    adat7={
        ar:"25",
        id:"F",
        img:"./Kepek/feherFelsoF.jpg",
        nev:"Fehér férfi felső"
    },
    adat8={
        ar:"120",
        id:"F",
        img:"./Kepek/feherKabatF.jpg",
        nev:"Fehér férfi kabát"
    },
    adat9={
        ar:"30",
        id:"F",
        img:"./Kepek/feketefelsoF.jpg",
        nev:"Fekete férfi felső"
    },
    adat10={
        ar:"45",
        id:"F",
        img:"./Kepek/kekfelsoF.jpg",
        nev:"Kék férfi felső"
    },
    adat11={
        ar:"500",
        id:"F",
        img:"./Kepek/leatherJacketF.jpeg",
        nev:"Fekete bőrkabát"
    },
    adat12={
        ar:"25",
        id:"F",
        img:"./Kepek/szurkeoltonyF.jpg",
        nev:"Szürke férfi öltöny"
    },
    {
        ar:"60",
        id:"K",
        img:"./Kepek/barnaTaskaK.jpg",
        nev:"Barna férfi hátitáska"
    },
    {
        ar:"13",
        id:"K",
        img:"./Kepek/borosUvegK.jpg",
        nev:"Fekete üvegpalack"
    },
    {
        ar:"50",
        id:"K",
        img:"./Kepek/keresztnyaklK.jpg",
        nev:"Kereszt nyaklánc"
    },
    {
        ar:"45",
        id:"K",
        img:"./Kepek/rozsaTaskaK.jpg",
        nev:"Rózsaszín hátitáska"
    },
    {
        ar:"12",
        id:"K",
        img:"./Kepek/rozsaUvegK.jpg",
        nev:"Rózsaszín üvegpalack"
    },
    {
        ar:"35",
        id:"K",
        img:"./Kepek/sportTaskaK.jpg",
        nev:"Férfi sporttáska"
    },
    adat19={
        ar:"70",
        id:"R",
        img:"./Kepek/barnaBorcipoR.jpg",
        nev:"Bana férfi bőrcipő"
    },
    adat20={
        ar:"60",
        id:"R",
        img:"./Kepek/feketeCipoR.jpg",
        nev:"Fekete női cipő"
    },
    adat21={
        ar:"90",
        id:"R",
        img:"./Kepek/feketecsizmaR.jpg",
        nev:"Fekete Férfi Csizma"
    },
    adat22={
        ar:"15",
        id:"R",
        img:"./Kepek/feketeKesztyuR.jpg",
        nev:"Fekete téli kesztyű"
    },
    adat23={
        ar:"100",
        id:"R",
        img:"./Kepek/feketeNőiCsizmaR.jpg",
        nev:"Fekete Női csizma"
    },
    adat24={
        ar:"75",
        id:"R",
        img:"./Kepek/keksportcipoR.jpg",
        nev:"Kék sportcipő"
    },
    adat25={
        ar:"30",
        id:"C",
        img:"./Kepek/farmerekC.jpg",
        nev:"Farmer nadrágok választható színben"
    },
    adat26={
        ar:"60",
        id:"C",
        img:"./Kepek/ingekC.jpg",
        nev:"Ingek választható színben"
    },
    adat27={
        ar:"90",
        id:"C",
        img:"./Kepek/polokC.jpg",
        nev:"Pólók választható színben"
    },
    adat28={
        ar:"15",
        id:"C",
        img:"./Kepek/pulcsikC.jpg",
        nev:"Pulóverek választható színben"
    },
    adat29={
        ar:"100",
        id:"C",
        img:"./Kepek/sapiC.jpg",
        nev:"Baseball sapkák több színben"
    },
    adat30={
        ar:"75",
        id:"C",
        img:"./Kepek/sportcipokC.jpg",
        nev:"Sportcipők több színben"
        
    },
    adat31={
        ar:"30",
        id:"C",
        img:"./Kepek/feherNaciC.jpg",
        nev:"Fehér farmer nadrágok"
    },
    adat32={
        ar:"60",
        id:"C",
        img:"./Kepek/feketeIngekC.jpg",
        nev:"Fekete ingek"
    },
    adat33={
        ar:"90",
        id:"C",
        img:"./Kepek/feherPolokC.jpg",
        nev:"Fehér pólók"
    },
    adat34={
        ar:"15",
        id:"C",
        img:"./Kepek/gatyaC.jpg",
        nev:"Fehérneműk több színben"
    },
    adat35={
        ar:"10",
        id:"C",
        img:"./Kepek/kesztyuC.jpg",
        nev:"Munkás kesztyűk több színben"
    },
    adat36={
        ar:"5",
        id:"C",
        img:"./Kepek/zokciC.jpg",
        nev:"Zoknik több színben"
        
    }


    

];
function NoiAdatok()
{
    for(let i=0;i<tomb.length;i++)
    {
        if(tomb[i].id=="N")
        {
            let kep = document.querySelectorAll('.kartyaKep')[i];
            kep.src=tomb[i].img;
            kep.title=tomb[i].nev;
            kep.setAttribute("title",tomb[i].nev)
            let termAr=document.querySelectorAll('.price')[i];
            termAr.innerHTML="$"+tomb[i].ar;
            let titleK=document.querySelectorAll('.title')[i];
            titleK.textContent="";
            titleK.innerHTML=tomb[i].nev;
        }


    }
}

function FerfiAdatok()
{
    let j=0;
    for(let i=0;i<tomb.length;i++)
    {
        if(tomb[i].id=="F")
        {
            
            let kep = document.querySelectorAll('.kartyaKep')[j];
            kep.src=tomb[i].img;
            kep.title=tomb[i].nev;
            kep.setAttribute("title",tomb[i].nev)
            let termAr=document.querySelectorAll('.price')[j];
            termAr.innerHTML="$"+tomb[i].ar;
            let titleK=document.querySelectorAll('.title')[j];
            titleK.textContent="";
            titleK.innerHTML=tomb[i].nev;
            j++;
        }


    }
}

function KiegAdatok()
{
    let j=0;
    for(let i=0;i<tomb.length;i++)
    {
        if(tomb[i].id=="K")
        {
            
            let kep = document.querySelectorAll('.kartyaKep')[j];
            kep.src=tomb[i].img;
            kep.title=tomb[i].nev;
            kep.setAttribute("title",tomb[i].nev)
            let termAr=document.querySelectorAll('.price')[j];
            termAr.innerHTML="$"+tomb[i].ar;
            let titleK=document.querySelectorAll('.title')[j];
            titleK.textContent="";
            titleK.innerHTML=tomb[i].nev;
            j++;
        }


    }
}

function RuhaAdatok()
{
    let j=0;
    for(let i=0;i<tomb.length;i++)
    {
        if(tomb[i].id=="R")
        {
            
            let kep = document.querySelectorAll('.kartyaKep')[j];
            kep.src=tomb[i].img;
            kep.title=tomb[i].nev;
            kep.setAttribute("title",tomb[i].nev)
            let termAr=document.querySelectorAll('.price')[j];
            termAr.innerHTML="$"+tomb[i].ar;
            let titleK=document.querySelectorAll('.title')[j];
            titleK.textContent="";
            titleK.innerHTML=tomb[i].nev;
            j++;
        }


    }
}

function CasualAdatok()
{
    let j=0;
    for(let i=0;i<tomb.length;i++)
    {
        if(tomb[i].id=="C")
        {
            
            let kep = document.querySelectorAll('.kartyaKep')[j];
            kep.src=tomb[i].img;
            kep.title=tomb[i].nev;
            kep.setAttribute("title",tomb[i].nev)
            let termAr=document.querySelectorAll('.price')[j];
            termAr.innerHTML="$"+tomb[i].ar;
            let titleK=document.querySelectorAll('.title')[j];
            titleK.textContent="";
            titleK.innerHTML=tomb[i].nev;
            j++;
        }


    }
}

if(document.title=="Női ruhák")
{
    NoiAdatok();
}

if(document.title=="Férfi ruhák")
{
    FerfiAdatok();
}
if(document.title=="Kiegészítők")
{
    KiegAdatok();
}
if(document.title=="Egyéb ruházatok, cipők")
{
    RuhaAdatok();
}
if(document.title=="Casual")
{
    CasualAdatok();
}


//N, F, K, R, C
function RendezSorrend(valaszottoldal, irany)
{
    let szuroFeltetel;
    let szurtRuhak = [];
    switch (valaszottoldal) {
        case "Női ruhák":
            szuroFeltetel = "N"
            break;
        case "Férfi ruhák":
            szuroFeltetel = "F";
            break;
        case "Kiegészítők":
            szuroFeltetel = "K";
            break;
        case "Egyéb ruházatok, cipők":
            szuroFeltetel = "R";
            break;
        case "Casual":
            szuroFeltetel = "C";
            break;
        default:
            alert("Hiba történt a szűrés közben!");
            break;
    }
    for (let i = 0; i < tomb.length; i++) {
        if(tomb[i].id == szuroFeltetel){
            szurtRuhak.push(tomb[i]);
        }
    }

    szurtRuhak.sort((a, b) => a.ar - b.ar)

    let j=0;
    for(let i=0;i<tomb.length;i++)
    {
            let kep = document.querySelectorAll('.kartyaKep')[j];
            kep.src=szurtRuhak[i].img;
            kep.title=szurtRuhak[i].nev;
            kep.setAttribute("title",szurtRuhak[i].nev)
            let termAr=document.querySelectorAll('.price')[j];
            termAr.innerHTML="$"+szurtRuhak[i].ar;
            let titleK=document.querySelectorAll('.title')[j];
            titleK.textContent="";
            titleK.innerHTML=szurtRuhak[i].nev;
            j++;
    }

}

function Atrendezes()
{
    let sortErtek=document.getElementById("sortdropdown").value;
    if(sortErtek=="csök")
    {
        RendezSorrend(document.title, "csok")
    }
    else{
        RendezSorrend(document.title, "nov")
    }
}