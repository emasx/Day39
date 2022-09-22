'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for(let i = 0; i < btnsOpenModal.length; i++) {

    // 80 Working With Classes
    btnsOpenModal[i].addEventListener('click', openModal); //function(){
    //     console.log('Button clicked.');
    //     modal.classList.remove('hidden');
    //     overlay.classList.remove('hidden');
    // });
}


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal); //function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })









// 81 Handling an "Esc" Keypress Event

document.addEventListener('keydown', function(e){
    
    console.log(e.key);

    // if the pressed key is ESCAPE
    if(e.key === 'Escape'){
        // and if the modal DOES NOT contain the hidden class then close the modal
        if(!modal.classList.contains('hidden')) {
            // then execute this function to close the modal
            closeModal();
        }
    }
})