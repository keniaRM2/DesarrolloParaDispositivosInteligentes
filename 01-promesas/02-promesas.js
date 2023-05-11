function sumarNumeroPromesa(numero){
    console.log(numero);
    var promesa = new Promise(function(resolve,reject){
     if (numero >= 7) {
         reject('El numero es muy alto');
         return;
     }
         setTimeout( function (){
             resolve(numero +1) 
         }, 2000)
 
    })
    return promesa
 }

sumarNumeroPromesa(5)
.then((nuevoValor)=>{  
    return sumarNumeroPromesa(nuevoValor);
})
.then(nuevoValor=>sumarNumeroPromesa(nuevoValor))
//.then(sumarNumeroPromesa)
//.then(sumarNumeroPromesa)
.then(sumarNumeroPromesa)
.catch((err)=>{
    console.log(err);
})










/*
sumarNumeroPromesa(5).then(function(nuevoValor){
console.log(nuevoValor);
sumarNumeroPromesa(nuevoValor).then(function(nuevoValor){
    console.log(nuevoValor);
    sumarNumeroPromesa(nuevoValor).then(function(nuevoValor){
        console.log(nuevoValor);
        })
    })
})
*/

