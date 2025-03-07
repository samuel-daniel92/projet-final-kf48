//definir les variables
var myInput = document.getElementById('psw');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
const taille = document.getElementById('taille');
const letter = document.getElementById('letter');

//lorsque l'utilisateur clique sur le champ du mot de passe

myInput.onfocus = function(){
    document.getElementById("message").style.display = "block"
}

//lorsque l'utilisateur clique en dehors

myInput.onblur = function(){
    document.getElementById("message").style.display = "none"
}

//lorsque l'utilisateur commence a taper quelque chose dans le champ 

myInput.onkeyup = function(){
    //valide les lettres minuscule
    var lowerCaseLetters = /[a-z]/g
    if(myInput.value.match(lowerCaseLetters)){
        //si le mot de passe contient une lettre minuscule, enlever la classe 'invalid et ajouter la classe valid
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }else{
        //si non, enlever la classe "valid" et ajouter la classe "invalid"
        letter.classList.add('invalid');
        letter.classList.remove('valid');
    }

    //valide les lettres majuscules
     var upperCaseLetters = /[A-Z]/g
     if(myInput.value.match(upperCaseLetters)){
         //si le mot de passe contient une lettre majuscule, enlever la classe 'invalid et ajouter la classe valid
         capital.classList.remove('invalid');
         capital.classList.add('valid');
     }else{
         //si non, enlever la classe "valid" et ajouter la classe "invalid"
         capital.classList.remove('valid');
         capital.classList.add('invalid');
     }


    //valide les nombre
    var numbers = /[0-9]/g
    if(myInput.value.match(numbers)){
        //si le mot de passe contient un chiffre, enlever la classe 'invalid et ajouter la classe valid
        number.classList.remove('invalid');
        number.classList.add('valid');
    }else{
        //si non, enlever la classe "valid" et ajouter la classe "invalid"
        number.classList.remove('valid');
        number.classList.add('invalid');
    }

    //valide lA LONGEUR
    
    if(myInput.value.length >= 8){
        //si le mot de passe contient le minimum de 8 caralength, enlever la classe 'invalid et ajouter la classe valid
        taille.classList.remove('invalid');
        taille.classList.add('valid');
    }else{
        //si non, enlever la classe "valid" et ajouter la classe "invalid"
        taille.classList.remove('valid');
        taille.classList.add('invalid');
    }
}