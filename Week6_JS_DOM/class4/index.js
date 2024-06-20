//  console.log('Kaise hain sab log?');


// //synchronous code example
// function sync(){
//         console.log('first');
// }

// sync();
// console.log('second');


// //asynchronous code example
// setTimeout(function(){
//     console.log('third');
// },3000)



// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');


//Promise
//It is used to write async code
//It is a best practice 
// let meraPromise1=new Promise(function(resolve,reject){//resolve matlab successfully ho jaayega execute
//     console.log('I am inside promise');
    // resolve(1998);

    // setTimeout(function(){
    //     console.log('I am inside promise 1');
    // },5000);
    
    // resolve(2233);//EXPLICITLY TOLD THAT IT IS RESOLVED
//     reject('Bhai sahab error aaye hain');
// });
// meraPromise1.then((value)=>{console.log(value)},(error)=>{console.log("Received an error")});
// meraPromise1.catch((error)=>{console.log("Received an error")});


// let meraPromise2=new Promise(function(resolve,reject){//resolve matlab successfully ho jaayega execute
//     // console.log('I am inside promise');
//     // resolve(1998);

//     setTimeout(function(){
//         console.log('I am inside promise 2');
//     },3000);

//     // resolve(2233);//EXPLICITLY TOLD THAT IT IS RESOLVED
//     // reject('Bhai sahab error aaye hain');
// });

// console.log('Pehla');



//multiple promises
// let waadaa1=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('setTimeout 1 started');
//     },2000);
//     resolve(true);
// });

// let output=waadaa1.then(()=>{
//     let waadaa2=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log('setTimeout 2 started');
//         },3000);
//         resolve('waadaa2 resolved');
//     });
//     return waadaa2;//promise return kar rha hai to output bhi ek promise hai
// });
// output.then((value)=>console.log(value));


//Async await function->always returns a promise

// async function abcd(){
//     return 'Hello';
// }



//instead of using multiplre then we can use async await function 
// if only await is used then all the promises will run parallely
// async function utility(){

//     let delhiMausam=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('Delhi me bohot garmi hai');
//         },1000);
//     });
    
    
//     let hydMausam=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('Hyderabad me bohot thand hai');
//         },5000);
//     });


//     let dM=await delhiMausam;
//     let hM=await hydMausam;

//     return [dM,hM];
// }


//FETCH API

// async function utility(){
// let content=await fetch('https://jsonplaceholder.typicode.com/posts/1');//return a promise
// let output=await content.json();//javaScript object notation format
// console.log(output);
// }
// utility();


// async function helper(){

// let options={
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//       weight:90,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
// };

// let content=await fetch('https://jsonplaceholder.typicode.com/posts',options);
// let response=content.json();
// return response;
// }

// async function utility(){
//     let ans=await helper();
//     console.log(ans);
// }

// utility();



////CLOSURE

//let->block scope
//var->global scope
// let name="Rahul";
// function init() {

//     let name = "Mozilla"; // name is a local variable created by init
//     {
//         let name="Babbar";//BLock scope
//     }
//     function displayName() {

//         let name="babbar";
//         // displayName() is the inner function, that forms the closure
//         console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
// init();


//concept of closure->A closure is the combination of a function bundled together 
//(enclosed) with references to its surrounding state (the lexical environment). 
//In other words, a closure gives you access to an outer function's scope from an 
//inner function. In JavaScript, closures are created every time a function is created,
//at function creation time.

function init() {
    let name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    return displayName;
}
// init();
let func1=init();
func1();
  