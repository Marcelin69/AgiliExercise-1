/**
 * Rédige ton code JavaScript en dessous
 * et n'oublie pas de lier ta feuille JavaScript avec ta feuille HTML
**/

// Commence par déclarer les variabls necessaires
const saidebar_menu=document.querySelector(".sidebar_menu")
const saidebar = document.querySelector(".sidebar")



// Rédige les conditions ou fonctions juste ici, n'oublie pas le résultat attendu dans le README.md

saidebar_menu.addEventListener("click" ,ferme)

function ferme(){
    saidebar.classList.toggle("sidebarferme")


}
