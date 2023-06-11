var modal = document.querySelector('.modal-container');
var closeButton = document.querySelector('.close');
var modalTriggers = document.querySelectorAll('.button-send');
var openModal = function() {
    modal.classList.add('is-open')
   }
   var closeModal = function() {
    modal.classList.remove('is-open')
   }
   modalTriggers.forEach(function(item) { 
    item.addEventListener('click', openModal)
   })
   closeButton.addEventListener('click', closeModal)