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
    },
    adat7={
        ar:"25$",
        id:"F",
        img:"./Kepek/feherFelsoF.jpg",
        nev:"Fehér férfi felső"
    },
    adat8={
        ar:"120$",
        id:"F",
        img:"./Kepek/feherKabatF.jpg",
        nev:"Fehér férfi kabát"
    },
    adat9={
        ar:"30$",
        id:"F",
        img:"./Kepek/feketefelsoF.jpg",
        nev:"Fekete férfi felső"
    },
    adat10={
        ar:"45$",
        id:"F",
        img:"./Kepek/kekfelsoF.jpg",
        nev:"Kék férfi felső"
    },
    adat11={
        ar:"500$",
        id:"F",
        img:"./Kepek/leatherJacketF.jpeg",
        nev:"Fekete bőrkabát"
    },
    adat12={
        ar:"25$",
        id:"F",
        img:"./Kepek/szurkeoltonyF.jpg",
        nev:"Szürke férfi öltöny"
    },
    adat13={
        ar:"25$",
        id:"F",
        img:"./Kepek/feherFelsoF.jpg",
        nev:"Fehér férfi felső"
    },
    adat14={
        ar:"120$",
        id:"F",
        img:"./Kepek/feherKabatF.jpg",
        nev:"Fehér férfi kabát"
    },
    adat15={
        ar:"30$",
        id:"F",
        img:"./Kepek/feketefelsoF.jpg",
        nev:"Fekete férfi felső"
    },
    adat16={
        ar:"45$",
        id:"F",
        img:"./Kepek/kekfelsoF.jpg",
        nev:"Kék férfi felső"
    },
    adat17={
        ar:"500$",
        id:"F",
        img:"./Kepek/leatherJacketF.jpeg",
        nev:"Fekete bőrkabát"
    },
    adat18={
        ar:"25$",
        id:"F",
        img:"./Kepek/szurkeoltonyF.jpg",
        nev:"Szürke férfi öltöny"
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
            termAr.innerHTML=tomb[i].ar;
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
            termAr.innerHTML=tomb[i].ar;
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
        if(tomb[i].id=="")
        {
            
            let kep = document.querySelectorAll('.kartyaKep')[j];
            kep.src=tomb[i].img;
            kep.title=tomb[i].nev;
            kep.setAttribute("title",tomb[i].nev)
            let termAr=document.querySelectorAll('.price')[j];
            termAr.innerHTML=tomb[i].ar;
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
