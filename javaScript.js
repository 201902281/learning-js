/*Tipos de variables*/

let numero=15; /*variable es como let pero está obsoleto*/ 
const texto="Ignacio";

let lista = [9,"string",false];
lista.push(16);

let persona ={
    nombre:"Ignacio",
    edad: 20,
    hola: false
};

/*if, for, while*/

let a = "5";
let b = 5;

if(a == b){
    console.log("Son identicos en número");/*Aunque sean de distinto tipo me dice que dan lo mismo*/
    console.log(persona);
}else if(a != b){
    console.log("bye");
}

a = 5;
b = 5;

if(a === b){
    console.log("Son identicos en forma y número");
}

a = 5;
b = 6;
if(a !== b){
    console.log("Son distintos en forma y número");
}


/*for*/
console.log("Bucle tipo 1");
for(let i=0;i < lista.length;i++){
    console.log(lista[i]);
}

console.log("Bucle tipo 2");
for(let item of lista){
    console.log(item);
}

/*while*/
let contador=0;
console.log("Comienzo del while");
while(contador <= 10){
    console.log(contador);
    contador++;
}


/*Funciones*/
function helloWorld(argumento1,argumento2){
    console.log(argumento1);
}

helloWorld("Salida como una función");


/* EMPIEZA EL HTML*/ 
/*document comunica el archivo html y a js*/


let inputB = document.getElementById("b"); /*accedo a un elemento por su id*/
/*inputB.innerHTML = TELECOMUNICACIONES;  (Accedo al html interno de inputB y lo cambio)*/



inputB = document.getElementsByClassName("form-input"); /*accedo a un elemento por su su clase*/
for(let formInput of inputB){
    /*formInput.innerHTML = "HOLA";*/
}

let etiquetas = document.getElementsByTagName("div");  /*Accedes a un grupo de etiquetas entero*/

let inputNombre = document.getElementById("nombre");
inputNombre.value = "Ignacio";


/*Eventos (Permite que tu página reacciones a cosas que pasan en ella)*/
let cuenta = 0;
function contarClick(){
    cuenta++;
    console.log(cuenta);
}




/*JQUERY*/
let input = document.getElementById("nombre");