// VARIABLES


let miVariable = 24;                     //Se asigna valor a let 
   

//console.log("mi edad es " + miVariable)         // muestra 24


miVariable = 12;                                    // Se asigna nuevo valor a let 
//console.log("mi edad ahora es " + miVariable)               // cambia su valor , muestra 12





const miConstante = 3;                  // const varibale que no cambia su valor aun si se le asigna otro despues

//console.log("mi edad constante es " + miConstante)       // no cambia su valor , muestra 12


//miConstante = 4;                                // Se asigna nuevo valor a const 
//console.log("mi edad constante ahora es " + miConstante)            // no cambia su valor y da error




//CONDICIONALES
// Tablas de verdad: = igual a , != distinto a , > mayor a , < menor a,  ><=, mayor o menor a, 

// let miNumero = 6
// let miNombre = 'Frank'


// if (miNombre == 'Frank')    {                         // 1 igual = significa asigancion y dos igulaes == significan comparacion, 3 iguales === significa comparar el tipo de variable, si es texto o numero
//     console.log('Si')
// }else{
//     console.log('No')
// }


// // AND &&

// if (miNumero < 2 && miNombre == 'Frank')    { 
//     console.log('Si')                        
// }else{
//     console.log('No')
// }

// // OR ||

// if (miNumero < 2  || miNombre == 'Frank')    { 
//     console.log('Si')                        
// }else{
//     console.log('No')
// }






///FUNCIONES                                            //Las funciones se pueden invocar desde cualquier lado del archivo, ni importa si esta arriba o abajo.

// //Ej #1
//  function saludar(nombre){                                //Entre parentesis se colocan los argumentos de una funcion (son como variables para la funcion, sin nececidad de let ni var)
//     console.log('Hola, mi nombre es: '+ nombre)             // Se muestra 'Hola, mi nombre es: Frank'
//  }


//  saludar('Frank');                      // Al invocar la funcion se agregea el valor 'Frank' al argumento 'nombre' de la funcion 'saludar'





//Ej #2
 function saludar(nombre, edad){                                // Se pueden agreagr varios argumentos a una funcion
    console.log('Hola, mi nombre es: '+ nombre)             // Se muestra 'Hola, mi nombre es: Frank y miu edad es 19'
    console.log('y mi edad es: '+ edad) 
 }


 saludar('Frank',19);                      // Al invocar la funcion se agregea los valores 'Frank' y 19 al argumento 'nombre'y 'edad' de la funcion 'saludar'
