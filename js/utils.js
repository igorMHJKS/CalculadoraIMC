
/*Validar dados, verificar se o que está colcoando é números*/
export function notANNuumber(value){
    return isNaN(value) ||  value  == ""
  }
  notANNuumber()
  /* Calcular IMC*/
  export function calculateIMC (weigth, heigth){
      return (weigth / ((heigth / 100 ) ** 2 )).toFixed(2)
  }
  