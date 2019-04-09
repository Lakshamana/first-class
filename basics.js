//Syntax basica - javascript

// Comentario de uma unica linha
/* 

Comentario de multiplas linhas.

*/ 

//Primitivos

//Boolean
true
false

//Number
-123
1.141
NaN
//String
'abc'
"abc"
 
//Template strings

const a = 'abc';

console.log(`${a}def`);

//Printando para o console

console.log("abc");
console.table(['1','2','3']);

//declaracao de variaveis

let ax; //declaracao de variavel mutavel

ax = 3 * 5;

let y = 3*5

const z = 8;

//controle de fluxo

//If classico
if(ax < 0){
    console.log(true)
} else {
    console.log(false)
}

if(something){
    something
}else if(something){
    otherSomething
} 
// Switch

switch(a){
    case 1:
        break;
    case 2:
        break;
    case 'Something':
        break;
}
//operador ternario

let str = (bool ? 'yes' : 'no')

// declaracao de funcao

function add1(a,b) {
    return a+b;
}
const x = function(a,b) {
    return a+b;
}
const add2 = (a,b) => a + b;

const add3 = (a,b) => { return a+b};

add1(1,2)
add2(1,2)

//declaracao de objetos

const obj = {
    first: 'Uriel',
    last: 'Campos',
    getFullName(){
        return this.first +' ' + this.last;
    }
}
console.log(obj.first)
console.log(obj.last)
console.log(obj.getFullName())

obj1 = {}

obj2 = Object.create(obj)

console.log(obj2)

//arrays

const arr = ['a','b','c']

const arr1 = [...arr]

//Modulos

export function isEqual(a,b){
    if (a === b){
        return true
    }
    else {
        return false
    }
}

import * as equal from 'path'
import {isEqual} from 'path'

//Nomeclatura de variaveis

// let 1var; // nao pode
let var1;// pode
// let if = 'a'; //nao pode
let obj3 = {
    if:1
}

//loops

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
while (condition) {
    
}
array.forEach(element => {
    
});
