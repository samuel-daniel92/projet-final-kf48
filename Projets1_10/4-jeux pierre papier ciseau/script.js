const contenantchoixordinateur = document.getElementById('choix-ordinateur');
const contenantchoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultal = document.getElementById('resultat');

const choixPossible = document.querySelectorAll('button');

let choixUtilisateur,resultat, choixOrdinateur

// Evenement click sur les buttons
choixPossible.forEach(choixPossible => choixPossible.addEventListener('click',(e)=>{
//récuperation de l'ID du boutton cliqué
 choixUtilisateur = e.target.id;
 // on ajoute l'image correspondanr au choix
 contenantchoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png">`;
 generer_choix_ordinateur()
 verification()
}))

//fonction pour générer le choix de l'ordinateur

function generer_choix_ordinateur(){
   let random = Math.floor(Math.random() * 3) +1; // Generer des nombre compris entre 1et 3
    if(random === 1){
        choixOrdinateur = "pierre"
    }
    if(random === 2){
        choixOrdinateur = "papier"
    }
    if(random === 3){
        choixOrdinateur = "ciseaux"
    }

 contenantchoixordinateur.innerHTML = `<img src="${choixOrdinateur}.png">`;

}

//fonction pour verifier si le joueur a gagner ou pas
function verification(){
    if(choixUtilisateur === choixOrdinateur){
        resultat =  "Egalité !" ;
    }
     if(choixUtilisateur ==="pierre" && choixOrdinateur=== "papier"){
         resultat =  "perdu !" ;
    }
    if(choixUtilisateur ==="papier" && choixOrdinateur==="ciseaux"){
            resultat =  "perdu !" ;
    }
    if(choixUtilisateur ==="ciseaux" && choixOrdinateur=== "pierre"){
        resultat =  "perdu !" ;
    }
    // les cas ou le joueur gagne
    if(choixUtilisateur ==="pierre" && choixOrdinateur=== "ciseaux"){
        resultat =  "gagné !" ;
    }
    if(choixUtilisateur ==="ciseaux" && choixOrdinateur=== "papier"){
        resultat =  "gagné !" ;
    }
    if(choixUtilisateur ==="papier" && choixOrdinateur=== "pierre"){
        resultat =  "gagné !" ;
    };
    contenantResultal.innerHTML = resultat;
}
