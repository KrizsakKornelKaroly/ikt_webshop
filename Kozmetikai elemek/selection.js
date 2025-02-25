let tomb=[
     adat1={
        ar:"20$",
        id:"N",
        img:"./Kepek/lilaPoloN",
        nev:"Lila Póló"
    }
];
function NoiAdatok()
{

    for(let i=0;i<tomb.length;i++)
    {
        let ar1=document.querySelectorAll(".ar")[0];
        ar1.innerHTML="Szia";

    }
    document.getElementsByClassName('.ar').addEventListener('click', function(event) {
        event.preventDefault();  // Prevents the default action (navigating)
        
      });

}