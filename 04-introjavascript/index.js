console.log
//Variables: espacios de memoria para almacenar datos
//1. con var
// palabras reservadas: son utilizadas solo para las definiciones del lenguaje de programacion
var nombre; //caracter/letras
var email// numeros
var edad;
var pais;

//no
/*  
var 12345;
var nombre apellido;
var =pais;
var -edad;
var nombre-apellido;
*/

//si
var $provincia;
var _nombre;
var nombreApellidoPersona; //camelcase
var nombre_apellido; //underscore

let provincia;

//const representa una constante: no cambia en la ejecucion del programa

//esto es una declaracion de una variable y asignacion de un valor
const DNI = 12345678;

nombre = 'Juan'
apellido = 'Perez'

// = representa asignacion de datos

provincia = 'Buenos Aires'; //string

provincia = 'CABA'

provincia = 'Cordoba';

provincia = 15; //numeros - int

provincia = true; //boolean

provincia = false

//funciones
console.log(nombre + apellido + provincia)

DNI = 'Pepe'; //error en tiempo de ejecucion


