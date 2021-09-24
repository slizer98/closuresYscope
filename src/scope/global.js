var hello = 'HELLO';
let world = 'hello world';
const helloWorld = 'hello world!';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);

}
anotherFunction();
// Mala practica 
// crear una variable global dentro de una funcion
const helloWorld = () => {
    globalVar = 'im global';
}
helloWorld();
console.log(helloWorld);

const anotherFunction = () =>{
    var localVar = globalVar = 'im global';
}

anotherFunction ()
console.log(localVar);