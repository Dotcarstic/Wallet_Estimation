

function calculateWeeks() {
    // Récupérer la date mise par l'utilisateur
    var userDate = new Date(document.getElementById("dateInput").value);
    // Récupérer la date actuelle
    var currentDate = new Date();
    // Calculer la différence en millisecondes
    var diffInMs = userDate - currentDate;
    // Convertir la différence en nombre de semaines
    var diffInWeeks = diffInMs / 1000 / 60 / 60 / 24 / 7;
    // Afficher le résultat
    document.getElementById("result").innerHTML =
      "Nombre de semaines : " + diffInWeeks;
  }


function changeElement(checkboxId, elementId) {
        let checkoutCheckbox = document.getElementById(checkboxId);
        checkoutCheckbox.addEventListener("change", function() {
          let element = document.getElementById(elementId);
          if (this.checked) {
            element.style.visibility= "visible";
          } else {
            element.style.visibility= "hidden";
          }
        });
      }

            

function investissement(ath,current, semaine, q,z){
  
  
    const A= math.matrix([
        [0, 0,1], 
        [q**2, q, 1 ], 
        [semaine**2, semaine,1]]);
        const A1= math.inv(A);
    const B= math.matrix([[current,z,ath]]) ;
    const C= math.multiply(B,A1);
    document.getElementById("matrice").innerHTML= C;

    const x= Array.from({ length: semaine }, (v, i) => i);
    let y = new Array();
    console.log(y);
    console.log(C.get([0, 1]));
    for (let step = 0; step < semaine; step++) {
      y.push(C.get([0,2])*step**2+ C.get([0,1])*step+ C.get([0,0]))

      
    }
    console.log(y)
}


function creategraph(data){  
  var xyValues = [
{x:50, y:7},
{x:60, y:8},
{x:70, y:8},
{x:80, y:9},
{x:90, y:9},
{x:100, y:9},
{x:110, y:10},
{x:120, y:11},
{x:130, y:14},
{x:140, y:14},
{x:150, y:15}
];

new Chart(data, {
type: "scatter",
data: {
datasets: [{
pointRadius: 4,
pointBackgroundColor: "rgb(0,0,255)",
data: xyValues
}]
},
options: {
legend: {display: false},
scales: {
xAxes: [{ticks: {min: 40, max:160}}],
yAxes: [{ticks: {min: 6, max:16}}],
}
}
})
}





