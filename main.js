//Ciclos/Bucles/Iteraciones
//¿Qué es un ciclo y para qué sirve?
/*Los ciclos son una herramiento que nos permiten repetir un bloque de código
o intrucciones CIERTA CANTIDAD DE VECES y DE MANERA CONTROLADA */

//TIPOS DE CICLOS:

/*1) Ciclo por conteo: va a ir sumando una unidad por cada vuelta
y cuando llegue al límite que le hayamos indicados deja de iterar (ej: For)*/

/*2) Ciclos condicionales: va a iterar siempre y cuando 
se cumpla una condición (while y do while)*/

//Conteo: FOR
//Lo voy a usar cuando se de la cantidad de repeticiones que debe tener mi código.
//Sintaxis:
// for (desde, hasta, actualización)
//desde: es el primer valor que va a pedir el código y va a ser un valor inicial.
//hasta: va a ser el valor hasta donde va a iterar mi código
//actualización: en cada vuelta del bucle el contador nos da el valor que debe cambiar
//en cada vuelta. Por lo general suma de a uno. 

//Ejemplo A: Quiero mostrar "Hola Brasil" por consola.
/*for ( let i = 0; i>10; i = i+2){
    console.log("Hola Brasilll");
}*/

//Si yo quiero mostrar en consola números pares entre 0 y 10

/*for (let i = 0; i <= 10; i= i+2){
    console.log(i)
}*/

//Continue: bajo una cierta condición el cliclo saltea una repetición y sigue con la próxima

//Mostrar los número del 0 al 6 salteando los pares
//* este simbolo % es para realizar una operación tipo módulo, retorna el RESTO de una división.
// Si yo quiero dividir voy a usar /
//Si el resto es 0, el número es par. Si me da otro número, es impar

/*for (let i=0; i <=6; i++){
    if(i % 2 == 0){
        continue
    }
    console.log(i)
}*/

//Ciclo while: 
// es un ciclo que se ejecuta mientras la condición evaluada ser verdadera. 

/*let nombre = prompt("Ingrese su nombre: (para salir ingrese la palabra cancelar)");

while (nombre != "cancelar"){
    console.log(nombre);
    nombre = prompt("Ingrese su nombre: (para salir ingrese la palabra cancelar)");
}*/

// do while.. la diferencia del ciclo do while y while es que: el cliclo do while se ejecuta al menos una vez.

/*const passAutorizado = 1234;
let passUser;
do {
    passUser = prompt("Ingrese su password: ");
} while (passUser!=passAutorizado)*/

/*Switch: no es un ciclo. No es un bucle. Es una estructura de selección.*/
//Condicional.
//Está diseñado para múltiples condciones sobre la misma variable y 
//después de la condición de la variable vamos a ejecutar cierta instrucción de código;

let clima = prompt ("Ingrese en clima de su ciudad: lluvia, nublado, frio, campeón del mundo ");

switch (clima){
    case "lluvia":
        alert("Te recomiendo ver Engaños en Netflix");
        break;
    
    case "nublado":
        alert("Te recomiendo llevar paraguas");
        break;

    case "frio":
        alert("Sí, más que el corazón de tu ex. LLeva abrigo.");
        break;

    case "campeón del mundo":
        alert("Y bueno.. segundo Francia");
        break;
}




