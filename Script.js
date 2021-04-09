'use strict';

// Get the modal
var modal = document.getElementById('prihlasit');
var modal1 = document.getElementById('registrace');

// Když uživatel klikne kdekoli do modalu, zavøete jej
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";}
    if (event.target == modal1) {
        modal1.style.display = "none";}
}