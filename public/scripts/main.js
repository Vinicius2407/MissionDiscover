import Modal from './modal.js';

const modal = Modal();

//Pegar todos os botões com a class "check"
const checkButtons = document.querySelectorAll('a.check');

checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", event => {
        //abrir modal
        modal.open();
    });
});

//Pegar quando o 'marcar como lido' for clicado