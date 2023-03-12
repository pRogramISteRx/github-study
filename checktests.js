// var a = 1, b = function a(x) {x && a(--x);};
// console.log(a);

//--------------------

// function foo(a, b) {
//     console.log(a*b);
//     return a * b;
// }

// const bar = foo.bind(null, 2);
// bar(2);

//---------------------

// function foo() {
//     // console.log(Function.getArguments(this));
//     // console.log(arguments);
//     // console.log(foo.getArguments());
//     // console.log(this.arguments);
// }

//--------------------

// console.log(message);
// var message = "Hello";

//--------------------

// for(var i = 0; i < 10; i++){

// }
// console.log(i);

//----------------------

// function foo() {
//     return { bar: 1 };
// }

// console.log(typeof foo().bar);

//------------------------

// "use strict";

// const details = {
//     message: 'Hello!'
// }

// function getMessage() {
//     return this.message;
// }

// console.log(getMessage.call(details));

//----------------------

// let f = function g() { return 23; };

// console.log(typeof g());

//-----------------------

// let name = 'John';

// function printName() {
//     console.log(name);
// }

// setTimeout(() => {
//     let name = "Peter";
//     printName();
// }, 1000);

// --------------------

// console.log(message);
// let message = "Hello";

//----------------------

// function getThis() {
//     return this;
// }

// console.log(getThis());

//--------------------

// const details = {
//     name: 'John!'
// }

// function getMessage(message) {
//     return `${message} ${this.name}`;
// }

// console.log(getMessage.apply(details, ['Hello']));

//----------------------

// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000)
// }

//-----------------------

// var name = 'John';

// var user = {
//     name: "Peter",
//     printMessage() {
//         console.log(`Hello, ${this.name}!`);
//     }
// };

// var printMessage = user.printMessage;

// printMessage();

//---------------------

// printMessage();

// function printMessage() {
//     console.log("Hello!");
// }

//---------------------

// let name = 'John';

// function printName() {
//     let name = "Peter";
//     console.log(name);
// }

// printName();

//----------------------

// // let f = function(a,b) { return a+b };
// let f = new Function("a,b", "return a+b");
// // let f = new Function("a", "b", "return a+b");
// // let f = (a, b) => a + b;
// // let f = (a, b) => { a + b };

// console.log(f(7, 3));

//----------------

// for (let i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000)
// }

//---------------------

// const foo = bar();
// const number = 2;

// function bar() { return number; }

//---------------------

// "use strict";

// function getThis() {
//     return this;
// }

// console.log(getThis());

//----------------------

// var name = 'John';

// function printName() {
//     console.log(name);
//     var name = 'Peter';
//     console.log(name);
// }

// printName();

//-----------------------

// function foo() { console.log(this); }
// foo.call(null);

//------------------------

// (
//     function(a) {
//         arguments[0] = 10;
//         console.log(a);
//         return a;
//     }
// )(5);