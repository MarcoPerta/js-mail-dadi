// variabile button
let btn = document.getElementById('btn');
btn.addEventListener("click", GetAnswer);
// variabile email
let email = document.getElementById('InputEmail');
// variabile output email
let outEmail = document.getElementById('OutEmail');

// Definisco il gruppo di mail accettate
// let members = ["pertamarco@mail.com","lucalioni@mail.com","marcellobo@mail.com","paolono@mail.com","andreasi@mail.com"]

 function GetAnswer(){
  let emailValue = email.value
  console.log(emailValue)

  let members = ["pertamarco@mail.com","lucalioni@mail.com","marcellobo@mail.com","paolono@mail.com","andreasi@mail.com"]


  for(let i=0; i> members.length ; i++){
    if (i===members.length){
        console.log('la mail è presente nella lista')
        outEmail.innerHTML = `la mail : ${emailValue} può accedere` 
        // outEmail.innerHTML.style.color = 'red'
    }
    else {
        console.log('la mail non è presente nella lista')
        outEmail.innerHTML = `la mail : ${emailValue} non è presente nella lista` 
    }
  }  
}