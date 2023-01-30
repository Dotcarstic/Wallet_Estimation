


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
        const A1= Math.inv(A);
    const B= Math.matrix([[current,z,ath]]) ;
    const C= Math.multiply(A1, B);
    document.getElementById("matrice").innerHTML= C;
    alert(C)
}
