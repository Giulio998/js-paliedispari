function pal() {
    function palChecker() {
       let parola = prompt("inserisci una parola");
 
       for (let i = 0; i < parola.length / 2; i++) {
          if (parola[i] != parola[parola.length - (1 + i)]) {
          return false 
          } 
       }
       return true;
    }
    
    if (palChecker() == true) {
       console.log("palindromo"); 
    } else {
       console.log("non palindromo");
    } 
 }

 pal()

function pariDispari() {
    let evenOdd = document.getElementById("pari-dispari").value
    let playerChoice = parseInt(document.getElementById("numero").value);
    let computerChoice = Math.floor((Math.random() * 5) + 1)

    if (playerChoice >= 1 && playerChoice <= 5) {
        let somma = playerChoice + computerChoice;
        if (somma % 2 == 0 && evenOdd == "pari") {
            console.log("hai vinto");
            console.log("somma ",somma);
            console.log("evenOdd ",evenOdd);
        } else if (somma % 3 == 0 && evenOdd == "dispari"){
            console.log("hai vinto");
            console.log("somma ",somma);
            console.log("evenOdd ",evenOdd);
        } else {
            console.log("hai perso");
            console.log("somma ",somma);
            console.log("evenOdd ",evenOdd);
        }
    } else {
        document.getElementById("numero").value = "";
        alert("inserisci un numero tra 1 e 5");
    }
}

document.getElementById("invio").addEventListener("click", pariDispari)