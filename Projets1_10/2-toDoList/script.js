var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField')

addToDoButton.onclick = function(){
    // verifier si l'imput n'est pas vide
    if(inputField.value != ""){
        //si l'imput n'est pas vide , créer un paragraphe
        var paragraph = document.createElement('p')
    }
    //valorisé ce paragraphe avec le contenu de l'input
    paragraph.innerText = inputField.value ;

    //stylisé le paragraphe
    paragraph.classList.add('paragraphe_style')

    //inserer le paragraphe dans l'element toDoContainer
    toDoContainer.appendChild(paragraph);

    //vider l'input quand le paragraphe est ajouté
    inputField.value = "";

    //barré le paragraphe quand on clique dessus
    paragraph.addEventListener('click',function(){
     paragraph.classList.add('paragraph_click')
    })

    //supprimer la tache quand on double clik sur la tache
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph)
       })
   
}