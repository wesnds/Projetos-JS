function validaArray(arr, num){
    try{
        if(!arr && !num){
            throw new RefenceError("array ou numero não fornecidos");
        }
            if(typeof arr !== 'object' || typeof num !== 'number'){
            throw new TypeError("array ou numero não é um array ou não é um número");
        }
        if(arr.length !== num || arr.length === 0){
            throw new RangeError("array e numero de tamanhos diferentes");
        }
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("ReferenceError!");
            console.log(e.stack);
        } else if(e instanceof RangeError){
            console.log("RangeError!");
            console.log(e.stack);
        } else {
            console.log("Outro tipo de erro!");
            console.log(e.stack);
        }
    }
}
console.log(validaArray([1, 2, 3], 0));
