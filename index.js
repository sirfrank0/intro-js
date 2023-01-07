// VARIABLES


//let miVariable = 24;                     //Se asigna valor a let , let obliga a que si se usa dentro de una funcion el valor de esa varible solo va a servir dentro de esa funcion y no se mezcle con otros.
   

//console.log("mi edad es " + miVariable)         // muestra 24


miVariable = 12;                                    // Se asigna nuevo valor a let 
//console.log("mi edad ahora es " + miVariable)               // cambia su valor , muestra 12





//const miConstante = 3;                  // const varibale que no cambia su valor aun si se le asigna otro despues

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





// //Ej #2
//  function saludar(nombre, edad){                                // Se pueden agreagr varios argumentos a una funcion
//     console.log('Hola, mi nombre es: '+ nombre)             // Se muestra 'Hola, mi nombre es: Frank y miu edad es 19'
//     console.log('y mi edad es: '+ edad) 
//  }


//  saludar('Frank',19);                      // Al invocar la funcion se agregea los valores 'Frank' y 19 al argumento 'nombre'y 'edad' de la funcion 'saludar'





// Ej de retornos                       // Return se utiliza para utiliar varias veces y con difrentes resultados el valor de la salida de una funcion

// function mutiplicar(num1, num2){
//     let resultado = num1 * num2;
//     return resultado;                   // Con return se guarda un valor pero no se muestra hasta que se invoque en otra variable, se 'devuelve'
// }

// let recibidor = mutiplicar(2,5);        // Se crea la variable 'recibidor' para invocar el valor de resultado

// console.log (recibidor);                //se imprime '10'





















// ARREGGLOS o ARRAYS                   // Son como listas con valores adentro, por lo general se declaran con Const porque son inmutables


//let miArreglo = ["Felipe", 'Duvan', 'Mono', 'David', 'Harry'];          //Pueden contener cualquier tipo de variable pero se recomienda que sean del mismo tipo

//console.log(miArreglo)                  // Se imprime el arreglo con los 5 valores

//for (let i =0; i < 5; i++){                         // Se crea un bucle para imprimir los valores del arreglo, estrcutura  (se define el contador; hasta cuando se desea contar, i++ sirve para sumar 1 al contador )

    // let mostrar = miArreglo[0];             //Solo se mostrara el arreglo 0=Felipe (.. 1=Duvan, etc)
    // console.log(mostrar)  



    // console.log("Accediendo al indice: " + i);      // Se imprime este texto para verlo en cada valor impreso
    // let mostrar = miArreglo[i];                         // Se coloca [i] para mostrar los valores del contador en el bucle, o sea los nombres
    // console.log(mostrar)  
//}









// OBJETOS          // permiten crear algo con varias propiedades, ej Persona con cualidades. Se usan { } llaves y , comas

let persona = {             //Cualidades persona
    nombre: 'Frank',
    edad: 23,
    masculino: true,
};


persona.comidaFavorita = 'Lasagna';        // Se agrega una cualidad a un arreglo , con (.) + cualidad. con (.) se Accede a las propiedades del objeto 

persona.nombre = 'Sebastian';           // Se modifica una cualidad existente a un arreglo  



let persona2 = {            //Cualidades persona2
    nombre: 'Mi flaca hermosa',
    edad: 19,
    masculino: false,
};

console.log(persona);       //Se imprimen los datos del objeto persona (cualidades)
console.log(persona2);      //Se imprimen los datos del objeto persona2 (cualidades)


let arregloDeObjetos = [persona,persona2];

console.log(arregloDeObjetos);          // Ejemplo de arreglo con Objetos

console.log(persona.comidaFavorita);   //Solo se imprime la cualidad 'comidaFavorita' del objeto 'persona'