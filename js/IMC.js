/*inportando do modal,js*/
import { modal } from "./modal.js";


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

  const result = IMC (weigth, heigth)
  const message = `Seu IMC é de ${result}`


  

  /*Mudar a mensgaem conforme muda o valor*/ 
  modal.message.innerText = message

  modal.open()
}



/* Calcular IMC*/

function IMC (weigth, heigth){
    return (weigth / ((heigth / 100 ) ** 2 )).toFixed(2)
}

/*Adicionar modal*/

