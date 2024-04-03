console.log('kya haal chal');



// run();//pehle bhi chalega JS me
// //Isko Hoisting bolte hain->process of moving functions declaration to the top automatically while executing by JS Engine
// function run(){
//     console.log('running');
// }
// //function call or invoke
// run();




// //stand();//cannot call this before function in case of assignment 
// //Named function assignment
// let stand = function walk(){
//     console.log('walking')
// }
// // walk();//cant use to call
// // stand();
// let jump=stand;
// jump();

// //Anonymous function assignment->no name is given to function
// let stand2 = function (){
//     console.log('walkings')
// }
// stand2();


//Js is a dynamic language
// let x=1;
// x='a';
// console.log(x);



// //Can functions be dynamic
// function sum(){
//     let total=0;
//     console.log(arguments);//saara data aayega jo bhi input me aaye honge
//     for(let value of arguments)//arguments are special objects which stores all data
//     total=total+value;
//     return total;
//     // return a+b;
// }

// // // console.log(sum(1,2));
// // // console.log(sum(1));//output->NaN
// // // console.log(sum());//Output->NaN
// // // console.log(sum(1,2,3,4,5));//baaki saare waste ho jaayenge

// let ans=sum(1,2,3,4,5,6);//kitne bhi parameters pass kr skte hain
// console.log(ans);
// // let ans2=sum(1,2,3,4,5,6,7,8);



//Rest operator->...
// ... ->spread operator->concatenate->array
//another use of ...
//Rest parametre
// function sum(num,value,...args)//args ke baad koi parametre nahi jhona chahiye
// {
//     console.log(args);
// }

// sum(1,2,3,4,5,6);


//Default parameters
// function interest(p,r=6,y=10){//default parametre jaha se shuru hoga waha se end tak saare parameters default hone chahiye
//     return p*r*y/100;
// }

// console.log(interest(1000,8));

// console.log(interest(1000,undefined,8));//hack of without using default after first default argument




//Getter Setter
//getter->access properties
//setter->change or mutate properties


let person={
    fName:'Love',
    lName:'babbar', 
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        if(typeof value!== String){
            throw new Error("You have not sent a string");
        }
        let parts=value.split(' ');
        this.fName=parts[0];
        this.lName=parts[1];
    },
};


// //read only function
// function fullName(){
//     return `${person.fName} ${person.lName}`;
// }
// console.log(fullName());


// console.log(person);

// console.log(person.fullName);

// person.fullName='Rahul Kumar';


//Try and catch Error Handling
//Agar code me chances hai ki error aa sakta hai usko try block me daalenge
// try{
//     // person.fullName='Rahul Kumar';//koi error nhi hai
//     person.fullName=true;//error aane ka chance hai->ye number me input nahi lega
// }
// catch(e){
//     alert('You have a sent a number in fullName');
//     alert(e);
// }

// // console.log(person.fullName);


//SCOPE


// {
//     // let a=5;
//     var a=5;
//     console.log(a);
// }
// console.log(a);


//scope of var ->1. if var is defined inside a function then its scope is in that function only and it cannot be accessed outside
//if var is defined outside a function then it can be accesses anywhere in file
//but let is only accessable indide the code block it is defined
// function walk(){
//     var a=5;
// }
// console.log(a);//can't be accessed

// for(var i=0;i<10;i++)
// {

// }
// console.log(i);//can be accessed outside because it is var

// for(let i=0;i<10;i++)
// {

// }
// console.log(i);//error aayega

// if(true){
//     // let a=5;
//     var a=5;

// }
// console.log(a);


// function a(){
//     const ab=5;
// }
// const ab=5;
// function b(){
//     const ab=5;
// }

// console.log(ab);




// // Reducing an array
let arr=[1,2,3,4];
// let total=0;

// for(let value of arr)
// {
//     total=total+value;
    
// }
// console.log(total);


// let totalSum=arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);//agar last argument 0 nhi bhejte to accumulator first value se initialise hota aur current value 2nd value se
// console.log('Printing Sum Value');
// console.log(totalSum);


