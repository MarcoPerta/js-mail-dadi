// variabile button
let btn = document.getElementById('btn');
btn.addEventListener("click", GetAnswer);
// variabile email
let email = document.getElementById('InputEmail');
// variabile output email
let outEmail = document.getElementById('outEmail');

// Definisco il gruppo di mail accettate
let members = ["pertamarco@mail.com","lucalioni@mail.com","marcellobo@mail.com","paolono@mail.com","andreasi@mail.com"]
console.log(members)

// funzione per ottenere risposta
function GetAnswer(){
  let emailValue = email.value
  console.log(emailValue)
//   let elementoDaTrovare = false;
  
  // ciclo for concatenato con l'array
  for(let i=0; i < members.length ; i++){
    // if (emailValue===members[i]){
    //     console.log('la mail è presente nella lista')
    //     outEmail.innerHTML = `la mail : ${emailValue} può accedere` 
    //     elementoDaTrovare = true;
    // }
    if (members[i]===emailValue){
      console.log('la mail è presente nella lista')
      outEmail.innerHTML = `la mail : ${emailValue} può accedere` 
      return i;  
      return -1;
    }  
    else {
        console.log('la mail non è presente nella lista')
        outEmail.innerHTML = `la mail : ${emailValue} non è presente nella lista` 
        // elementoDaTrovare = false;
    }
  }  
}


// ===================================================
// dichiarazioni variabili
let playernumber = document.getElementById('inputPlayerNumber')
let pcnumber = document.getElementById('inputPcNumber')

let btncube = document.getElementById('btncube');
btncube.addEventListener("click", getWinner);

let playerWinCount = 0;
let pcWincCount = 0;
let winPlayer = document.getElementById("playerCount");
let winPc = document.getElementById("pcCount");

function getWinner(){
    // creazione numeri randomici
    let plnumberrandom = Math.round(Math.random()*6)+1;
    console.log(plnumberrandom)
    let pcnumberrandom = Math.round(Math.random()*6)+1;
    console.log(pcnumberrandom)

    playernumber.innerHTML = `${plnumberrandom}`
    console.log(playernumber)
    pcnumber.innerHTML = `${pcnumberrandom}`
    console.log(pcnumber)
    
    // caso vincita player con conteggio vittorie
    if (plnumberrandom > pcnumberrandom){
        outWinner.innerHTML = 'The winner is the player' 
        console.count("playervincitore");
        playerWinCount = playerWinCount + 1;
        winPlayer.innerHTML = `Player winner's n°: ${playerWinCount}`
    }
    // caso vincita pc con conteggio vittorie
    else if(plnumberrandom < pcnumberrandom){
        outWinner.innerHTML = 'The winner is pc' 
        console.count("pcvincitore"); 
        pcWincCount = pcWincCount + 1;
        winPc.innerHTML = `Pc winner's n°: ${pcWincCount}`
        
    }
    // pareggio
    else {
        outWinner.innerHTML = 'This is a draw'
        winPc.innerHTML = ''
        winPlayer.innerHTML = ''
    }
}