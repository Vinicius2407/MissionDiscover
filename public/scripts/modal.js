export default function Modal(){
    function open(){
        //funcionalidade de atribuir a classe active para o modal
        document.querySelector(".modal-wrapper").classList.add("active");
    }
    function close(){

    }

    return {
        open,
        close
    }
}