console.log('Hello Jee');

// let lastName = 'Babbar';
// //we can use different methods to above string 
// let firstName = new String('love');

// let message=
// `This is 
// my first 
// message`;//backtics use krenge to exactly same dikhega console me
// console.log(message);

// let words=message.split(' ');
// console.log(words);

 
// let message=
// `Hello ${lastName},

// Thanks for the Opportunity

// Regards,
// Babbar`;// ` `->it is tempelate literal
// console.log(message);

// //Date and Time
// let date=new Date();
// console.log(date);

// let date2=new Date('June 20 1998 07:15');
// console.log(date2);

// let date3=new Date(1998,5,20,7);//year,month,date,hour->month is 0 indexed
// console.log(date3);
// //getters and setters 
// date3.setFullYear(1947);
// console.log(date3);





// //ARRAYS
// let numbers=[1,4,5,7];
// console.log(numbers); 

// //Insertion
// numbers.push(9);//insert at back
// console.log(numbers);

// numbers.unshift(8);//insert at beginning
// console.log(numbers);

// //middle
// numbers.splice(2,0,'a','b','c','d');//2nd index pe 0 elements remove krna hai aur a,b,c,d inser krna hai
// console.log(numbers);


// //Searching
//searching->indexOf,includes
// let numbers=[1,4,5,7];
// console.log(numbers); 

// console.log(numbers.indexOf(7));//if not present then returns -1

// //We want to check if a number exists in an array
// if(numbers.indexOf(4)!=-1)
// {
//     console.log('Present');
// }
// else{
//     console.log('Absent');
// }

// numbers.includes(numbers.includes(7));

// console.log(numbers.indexOf(4,2));//second argument bata raha hai ki search kon se index se start karna hai


//Lets try these things with references
// let courses=[
//     {no:1,naam:'Love'},
//     {no:2,naam:'Rahul'} 
// ];
// console.log(courses);

// console.log(courses.indexOf({no:1, naam:'Love'}));//ye ek object hai to isko hum indexOf nhi use kr skte kyonki dono alag address pe honge
// console.log(courses.includes({no:1, naam:'Love'}));//ye ek object hai to isko hum indexOf nhi use kr skte kyonki dono alag address pe honge

//for searching objects we use call back functions
//jis function se hme data milega use call back function bolenge


//A callback function is a function passed into another function as an argument, 
//which is then invoked inside the outer function to complete some kind of routine or action.


//Call back function concept to search object 
//find function takes input as predicate function and returns that object

// let course=courses.find(function(course){
//     return course.naam ==='Love';
// });

// console.log(course);
//arrow function can be used to make above function more readable
//another way of writing above function
// let course=courses.find(course=> course.naam ==='Love');//agar single variable hai to bracket,return aur curly braces hata skte hain aur ek arrow laga denge
// console.log(course);

//Removing element
//end->pop()
//beginning->shift()
//middle->splice(index,no.of element we want to delete )

// let numbers=[1,2,3,4,5,7];
// //end
// numbers.pop();
// //beginning
// numbers.shift();
// //middle
// numbers.splice(2,1);

// console.log(numbers);

// //Emptying an array
// let numbers=[1,2,3,4,5];
// let numbers2=numbers;
// //Method1->not good practice because numbers2 doesn't gets empty
// numbers=[];

// console.log(numbers);
// console.log(numbers2);

// //Method2
// // numbers.length=0;//ab dono khali honge 

// //Method3
// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);



// //Combining and Slicing Arrays
// let first=[1,2,3];
// let second=[4,5,6];

// let combined=first.concat(second);
// console.log(combined);

// let sliced=combined.slice(2,4);//start aur end index as argument aur end ke ek index pehle tak leta hai
// console.log(sliced);

// let marks =[10,20,30,40,50,60,70,80];
// let sliced_marks=marks.slice(3,6);
// console.log(sliced_marks);
// let sliced_upto_last=marks.slice(2);//2 se end tak slice krega
// console.log(sliced_upto_last);
//agar koi argument nhi likha hai to poore array ki copy ban jaati hai

//TODO:combining and slicing on objects












// //Spread operator->(...)
// let first=[1,2,3];
// let second=[4,5,6];
// let combined=[...first,...second];
// let combined2=[...first,'a',false,...second,'b',true];
// console.log(combined);
// console.log(combined2);

// //copy kaise create karu
// let another=[...combined];
// console.log(another);


//Iterating an array
//for-of loop
// let arr=[10,20,30,40,50];
// for(let value of arr)
// {
//     console.log(value);
// }

// //for each loop
// arr.forEach(function(numbers){
//     console.log(numbers);
// })

// //convert into arrow function
// arr.forEach(numbers=>console.log(numbers));


// //Joining Arrays
// let numbers=[10,20,30,40,50];
// const joined=numbers.join(',');
// console.log(joined);

// // //Split
// let message='This is my first message';
// let parts=message.split(' ');
// console.log(parts);

// let joined=parts.join('_');
// console.log(joined);

// //Sort Arrays
// let numbers=[5,10,4,40];
// numbers.sort();//sort internally first converts into string then sorts
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

//TODO:sort objects using predicate function

const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
console.log(items);
// sort by value
items.sort((a, b) => a.value - b.value);
console.log(items);






// //Filtering Arrays
// let numbers=[1,2,-1,-4];

// let filtered=numbers.filter(function(value){
//     return value>=0;//positive values
// });

// let filtered=numbers.filter(value=>value>=0);//positive values
// console.log(filtered);




// //Mapping arrays->maps each element of array to something else
// let numbers=[7,8,9,10];
// console.log(numbers);

// let items=numbers.map(function(value){
//     return 'student_no '+value;
// });

// // let items=numbers.map(value=>'student_no '+value);

// console.log(items);


//Mapping with objects
// let numbers=[1,2,-6,-9];
// let filtered=numbers.filter(value=>value>=0);//positive values

// let items=filtered.map(function(num){
//     return {value:num};
// });

//chaining 
// let items=numbers
//         .filter(value=>value>=0)
//         .map(num=>{value:num});

// console.log(items);