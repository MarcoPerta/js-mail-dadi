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

function GetAnswer(){
  let emailValue = email.value
  console.log(emailValue)
  let elementoDaTrovare = false;
  

  for(let i=0; i < members.length ; i++){
    if (emailValue===members[i]){
        console.log('la mail è presente nella lista')
        outEmail.innerHTML = `la mail : ${emailValue} può accedere` 
        elementoDaTrovare = true;
    }
    else {
        console.log('la mail non è presente nella lista')
        outEmail.innerHTML = `la mail : ${emailValue} non è presente nella lista` 
    }
  }  
}


// ===================================================
let playernumber = document.getElementById('inputPlayerNumber')
let pcnumber = document.getElementById('inputPcNumber')

let btncube = document.getElementById('btncube');
btncube.addEventListener("click", getWinner);


function getWinner(){

    let plnumberrandom = Math.round(Math.random()*6)+1;
    console.log(plnumberrandom)
    let pcnumberrandom = Math.round(Math.random()*6)+1;
    console.log(pcnumberrandom)

    playernumber.innerHTML = `${plnumberrandom}`
    console.log(playernumber)
    pcnumber.innerHTML = `${pcnumberrandom}`
    console.log(pcnumber)

    if (plnumberrandom > pcnumberrandom){
        outWinner.innerHTML = 'The winner is the player' 
        console.count("playervincitore");
    }
    else{
        outWinner.innerHTML = 'The winner is pc' 
        console.count("pcvincitore"); 
    }
    // else (plnumberrandom == pcnumberrandom){
    //     outWinner.innerHTML = 'This is a draw'
    // }
}