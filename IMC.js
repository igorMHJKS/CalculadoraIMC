/*Variaveis */
const form = document.querySelector('form');
const inputWeitgh = document.querySelector('#weigth')
const inputHeitgh = document.querySelector('#heigth')

const modalWrapeer  = document.querySelector(".modal-wrapeer")
const modalMessage = document.querySelector(".modal #title span")
const modalBtnClose = document.querySelector(".modal .close")



/*Essa função só vai ser executada quando clicar no botão submit*/

form.onsubmit = (event) => {
event.preventDefault()

/*Mosntrar o valor*/
  const weigth = inputWeitgh.value
  const heigth = inputHeitgh.value

  const result = IMC (weigth, heigth)
  const message = `Seu IMC é de ${result}`

  /*Mudar a mensgaem conforme muda o valor*/ 
  modalMessage.innerText = message

  /*Adicionar pop com o calculo do IMC*/
  modalWrapeer.classList.add('open')
}

/*Clicar no botão X para remover pop do resultado*/
modalBtnClose.onclick = () =>  modalWrapeer.classList.remove('open')


/* Calcular IMC*/

function IMC (weigth, heigth){
    return (weigth / ((heigth / 100 ) ** 2 )).toFixed(2)
}

/*Adicionar modal*/

