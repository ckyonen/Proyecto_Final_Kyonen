//DECLARACION
var nombre;
//ASIGNACION
nombre = "Felipe";

var edad = 20;

var precio = 617.16;

console.log("Nombre: "+nombre);
console.log("Edad: "+edad);
console.log("Precio: "+precio);

canal = "Youtube";
console.log("Canal: "+canal);

edad = edad / 15;
console.log("Edad dividido en 20: "+edad);

var numero1 = 4;
var numero2 = 3;

console.log("Modulo: "+numero1%numero2);

console.log("Numero de euler: "+Math.E);
console.log("Valor absoluto de 9: "+Math.abs(-9));

var nombre = "Felipe";
var apellido = "Sotomayor";
var nombreCompleto = nombre+" "+apellido;
console.log("Nombre completo: "+nombreCompleto);
console.log("Largo del nombre completo: "+nombreCompleto.length);
console.log("Primer caracter del nombre completo: "+nombreCompleto.charAt(0));
console.log("Primer caracter del nombre completo: "+nombreCompleto[0]);

console.log("Texto no encontrado: "+nombreCompleto.indexOf("dhasjkhdajk"));

var variableUno = false;
var variableDos = true;


var numeroUno = 30;
var numeroDos = "30";

if(numeroUno == numeroDos){
    console.log("IGUAL CON ==");
}

if(numeroUno === numeroDos){
    console.log("IGUAL CON ===");
}

if(numeroUno != numeroDos){
    console.log("DIFERENTE CON !=");
}

if(numeroUno !== numeroDos){
    console.log("DIFERENTE CON !==");
}


var meGustaElCafe = false;

if(meGustaElCafe == true){
    console.log("SI ME GUSTA EL CAFE");
}else{
    console.log("NO ME GUSTA EL CAFE");
}



if(numeroUno){
    console.log("EL NUMERO UNO ESTA DEFINIDO");
}
// if(!variableDos){
//     console.log("ENTRO A LAS LLAVES CONDICIONALES");
// }

// // 23 > 30
// if(numeroUno < numeroDos){
//     console.log("NUMERO UNO ES MENOR QUE NUMERO DOS");
// }

// var contador = 0;
// while(contador<11){
//     contador = contador + 1; // contador = 11
//     if(contador % 2 == 0 ){
//         console.log(contador); // 2 4 6 8 10
//     }
// }

// var contador = 0;
// do{
//     contador = contador + 1; // 5
//     console.log(contador); // 1 2 3 4 5
// }while(contador < 5);

// for(var contador = 0; contador<10; contador = contador+2 ){
//     console.log(contador);
// }

var numeroTypeOf = null;
// console.log(numeroTypeOf);
console.log(typeof numeroTypeOf);

document.addEventListener('DOMContentLoaded', function(event){
    document.getElementById('divpadre').addEventListener('click', alertaPadre, false);
    document.getElementById('button').addEventListener('click', alerta, true);
});


function alerta(){
    alert("Quieres hacer un comentario?");
}

function alertaPadre(){
    alert("Quieres hacer un comentario padre?");
}

//ARREGLO
var arreglo = [20, "Hola a todos", []];
console.log("Arreglo con distintos tipos de datos: ");
console.log(arreglo);

console.log("Posición 0 del arreglo: "+ arreglo[0]);
console.log("Posición 1 del arreglo: "+ arreglo[1]);
console.log("Cantidad de elementos del arreglo: "+ arreglo.length);
arreglo.push(10);
console.log("Nuevo arreglo: ");
console.log(arreglo);
arreglo.unshift(5);
console.log("Nuevo arreglo: ");
console.log(arreglo);
arreglo.shift();
console.log("Nuevo arreglo: ");
console.log(arreglo);
arreglo.pop();
console.log("Nuevo arreglo: ");
console.log(arreglo);
console.log("Recorrer el arreglo con un for: ");
for(var indice = 0; indice < arreglo.length; indice=indice+1){
    console.log(arreglo[indice]); //20     Hola a todos     []
                                  //0           1            2
}

for(var indice = arreglo.length-1 ; indice >=0; indice = indice-1){
    console.log(arreglo[indice]);
}

function suma (valor1, valor2){
    return valor1 + valor2;
}

console.log(suma(5, 10));
