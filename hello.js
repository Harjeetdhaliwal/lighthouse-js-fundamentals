const sayHello = function(name){
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

//------RETURN AND CONSOLE-------
const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}

sayHelloToConsole("John");

const returnSayHello = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello('john');
console.log(greeting);