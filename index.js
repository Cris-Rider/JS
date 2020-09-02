//Para correr el archivo js se debe escribir en la terminal "node (nombre del archivo).js
//console.log('Hola Mundo, este es mi primer console.log') // imprime lo que se encuentre dentro de ('') 

//TIPOS DE DATOS EN JS
//string: cadena de "caracteres".
//boolean: true/false.
//null: nulo.
//number: como un int.
//undefinied.
//object: objeto.

//DEFINICION DE VARIABLES
//var
//let
//const

// var miPrimeraVariable = 'var'


const Alumno ={
    fecha_de_nacimiento:'26/12/1997',
    Año_escolar: 10 //contando de 1 a 12, 1 siendo primero basico, 12 siendo cuarto medio.
}

//console.log('La edad del alumno pedro es:',Alumno.fecha_de_nacimiento);

//Arrays/Arreglos
const arrayvacio=[]
const array = [1,2,'mundo', Alumno]

//console.log(arrayvacio,array);

//agregar elementos al array

array.push(5)//.push agrega elementos al final del array 

arrayvacio.push(Alumno.Año_escolar)//llenamos un array vacio
arrayvacio.push(Alumno.fecha_de_nacimiento)

//console.log(array, arrayvacio);//desplegamos ambos arrays

//OPERADORES MATEMATICOS
const suma = 1+2
const resta= 1-3
const multiplicar = 2*4
const division= 2/4//retorna valor float

//console.log(suma,resta,multiplicar,division)

const modulo = 10 % 3
//console.log(modulo)

const num= 5
//num++ , incrementa la variable en +1
//console.log(num)//al usar const como tipo de variable, el numero o la variable no cambia.

let numero= 6//let permite incrementar la variable
numero++
//console.log(numero);

numero--//decrementa la variable en -1
numero--
//console.log(numero);

let num2= 5
num2+= 5 //incrementa la variable en lo que se declara
num2-= 5//se resta 5
num2*= 5//luego se multiplica por 5
num2/= 2//y finalmente se divide en 2
//console.log(num2);

//OPERADORES DE COMPARACION
//retornan valores booleanos true/false
const resultado1 = 5 === 6 //compara los valores de las variables y el tipo de variables

const resultado2 = 3 == '3' //compara los valores de las varibles sin importar el tipo de variable

const resultado3 = 4 < 5 //true
const resultado4 = 4 > 4 //false
const resultado5 = 3 <= 4//true
const resultado6 = 4 >= 4//true

const resultado7 = 5!==6 //ve si son estrictamente desiguales o no
const resultado8 = 5!= '5'

//console.log(resultado1, resultado2, resultado3, resultado4, resultado5, resultado6, resultado7, resultado8);

//OPERADORES LOGICOS
//or ||, anda &&, not !

const resultadoOr = false || true //or retorna el primer valor true
//console.log(resultadoOr);

const resultadoAnd = true && false//and retorna el primer valor false
//console.log(resultadoAnd);

const resultadoNot = !false //not retorna el valor contrario al de la variable
//console.log(resultadoNot);


//CONTROL DE FLUJO

const edad = 20

if (edad>5 && edad < 18) {
    //console.log('el niño puede jugar')
} else {
    //console.log('el niño no puede jugar')
}

let x = 0

while(x<=5){
    //console.log(x);
    x++ 
} 

//console.log('termina el loop')

let campeonatos_en_el_colo = 3

switch (campeonatos_en_el_colo){
    case 1:
        console.log('el bicho');
        break;
    case 2:
        console.log(' messirve');
        break;
    case 3:
        console.log('felipe flores XD');
        break;
    default:
        console.log('dinho');
        break;
}

const n = 5

for (let x=0; x<n; x++){
    //console.log(x);
}

const numeros = [1,2,'dinho',4,5]

console.log(numeros[2]);//imprimir valores del arreglo

for (let i=0;i<numeros.length;i++){//recorrer e impresion de elementos de un array
    console.log(numeros[i]);
}
