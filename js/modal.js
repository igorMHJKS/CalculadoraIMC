/*exportando para IMC.js*/

export const modal = {
    wrapeer:  document.querySelector(".modal-wrapeer"),
    message:document.querySelector(".modal #title span"),
    botaoClose:document.querySelector(".modal .close"),
    open(){
      /*Adicionar pop com o calculo do IMC*/
      modal.wrapeer.classList.add('open')
    },
    close(){
      /*Clicar no botão X para remover pop do resultado*/
      modal.wrapeer.classList.remove('open')
    }
  }

  
/*Clicar no botão X para remover pop do resultado*/
  modal.botaoClose.onclick = () => {
    modal.close()
  }

  /*Fechando o modal com teclado*/
  window.addEventListener("keydown",handleKeydown)


  function handleKeydown(event) {
    if (event.key === "Escape"){
      modal.close()
    }
  }