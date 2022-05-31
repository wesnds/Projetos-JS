
function menorMultiploComum(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const numDivisores = max - min + 1;
    
    //maior número possível fornecido
    let limiteSuperior = 1;
    for (let i = min; i <= max; i++) {
      limiteSuperior *= i;
    }
  
    //testar todos os múltiplos do número máximo
    for (let multiplo = max; multiplo <= limiteSuperior; multiplo += max) {
      //checa se todos os valores são divisíveis pelo múltiplo
      let divisorCount = 0;
      for (let i = min; i <= max; i++) {
        //conta os dividendos
        if (multiplo % i === 0) {
          divisorCount += 1;
        }
      }
      if (divisorCount === numDivisores) {
        return multiplo;
      }
    }
    return arr;
  }
  console.log(smallestCommons([1,5]))
