console.log('Lets start')

//object create

// let rectangle={
//     length:1,
//     breadth:2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

// let rectangle1={
//      length:1,
//      breadth:2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

// let rectangle2={
//     length:1,
//     breadth:2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };




// //Factory function->creates an object and returns it
// function createRectangle(len,bre) {
//     return rectangle={
//         length:len,
//         breadth:bre,
        
//         draw() {
//             console.log('drawing rectangle');
//         }

//     };
// }

// //now object creation will be equal to the object inside factory function
// let rectangleObj1=createRectangle(4,5);//output of factory function will be stored in the variable
// let rectangle1=createRectangle(7,8);
// let rectangle2=createRectangle(4,9);





// //Camelcase ->example: numberOfStudents
// //Constructor Function ->Pascal Notation->example:NumberOfStudent
// //constructor function ->props/methods->define/initialise
// function Rectangle(len,bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw=function()
//     {
//         console.log('drawing');
//     }
// }
// Rectangle.length;//since a function is also an object so we can access some features using dot operator

// //object creation using constructor
// let rectangleObject=new Rectangle(3,6);

// //Dynamic addition of new feature
// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// //Deletion of feature
// delete rectangleObject.length;
// console.log(rectangleObject);


//constructor property    

// //Internally kisi bhi constructor ka constructor aise implement hota hai
// let Rectangle1=new Function(
// 'length','breadth',
// `this.length=length;
// this.breadth=breadth;
// this.draw=function()
// {
//     console.log('drawing');
// }`);

// //object creation using Rectangle1
// let rect=new Rectangle1(2,3);
// rect.length=5;//function is an object so we can access its features using dot operator
// console.log(rect);


//Functions are objects

// //Types in JS
// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);


// let a={
//     value:10
// }
// let b=a;
// a.value++;
// console.log(a.value);
// console.log(b.value);



// let a=10;
// function inc(a)
// {//primitive pass hota hai to copy banti hai
//     a++;
// }
// inc(a);
// console.log(a);


// let a={
//     value:10
// };
// function inc(a)
// {
//     a.value++;
// }
// inc(a);
// console.log(a.value);


// //LOOPS

// let rectangle = {
//     length:2,
//     breadth:4
// };
// // //for-in loop
// for(let key in rectangle)
// {   //keys are reflected through key variable 
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

// //for-of loop
// for(let key of Object.entries(rectangle))
// {
//     console.log(key); 
// }

// //kisi object ke andar koi property exist krti hai ya nhi ye check kaise hofa
// if('color' in rectangle)
// {
//     console.log('Present');
// }
// else{
//     console.log('Absent');
// }




//Object cloning

// //Iterartion->clone#1
// let src={
//     a:10,
//     b:20,
//     c:30
// };
// let dest={};
// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);

// //object cloning #2
// let src={
//     a:10,
//     b:20,
//     c:30
// };

// let src2={
//     value:25
// };


// let dest=Object.assign({},src,src2);//multiple objects can be copied
// console.log(dest);

// src.a++;
// console.log(dest);

// //object clone #3
// let src={
//     a:10,
//     b:20,
//     c:30
// };
// let dest={...src};
// console.log(dest);
// src.a++;
// console.log(dest);

