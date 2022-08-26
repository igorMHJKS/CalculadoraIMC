/*inportando do modal,js*/
import { modal } from "./modal.js";
import {alertError} from "./alert-error.js"
import {calculateIMC, notANNuumber} from "./utils.js"
 
/*Variaveis */
const form = document.querySelector('form');
const inputWeitgh = document.querySelector('#weigth')
const inputHeitgh = document.querySelector('#heigth')

/*Essa função só vai ser executada quando clicar no botão submit*/
form.onsubmit = (event) => {
event.preventDefault()

/*Mostrar o valor*/
  const weigth = inputWeitgh.value
  const heigth = inputHeitgh.value

  /*Se não for número ou estivar vazio aparecer o erro*/
  const weitghOrheitghNotAnNumber = notANNuumber(weigth)  || notANNuumber(heigth)
  if(weitghOrheitghNotAnNumber){
   alertError.open()
    return;
  }
  alertError.close()

  /*Calcula IMC*/
  const result = calculateIMC (weigth, heigth)
  displayResultMessage(result)
}

/*Mostra o resultador: valor do IMC*/
function displayResultMessage(result){
  const message = `Seu IMC é de ${result}`

  /*Mudar a mensgaem conforme muda o valor*/ 
  modal.message.innerText = message

  modal.open()
}
/*Fechar a janela de erro ao digitar no campo input*/
inputWeitgh.onimput = () => alertError.close()
inputHeitgh.onimput = () => alertError.close()
