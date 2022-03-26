import Modal from './modal.js'
//
const modal = Modal();
const modalTittle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

//Pegar todos os botões que existe
const checkButtons = document.querySelectorAll('.actions a.check');

checkButtons.forEach(button => {
  //Adicionar a escuta
  button.addEventListener('click', handleClick);
});

//quando o botão delete for clickado ele abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach(button => {
  button.addEventListener("click", handleClick);
});

function handleClick(event, check = true) {
  
  modal.open();
}