// // //adding 100 paras
// const t1=performance.now();
// for( let i=1;i<=100;i++)
// {
//     let newElement=document.createElement('p');
//     newElement.textContent='This is para '+i;

//     document.body.appendChild(newElement);
// }
// const t2=performance.now();
// console.log("This took "+(t2-t1)+ "ms");



// // //optimising a bit 
// const t3=performance.now();
// let myDiv=document.createElement('div');

// for(let i=1;i<=100;i++)
// {
//     let element=document.createElement('p');
//     element.textContent='This is Para '+i;
//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4=performance.now();
// console.log("This took "+(t4-t3)+ "ms");


// const t5=performance.now();
// let fragment=document.createDocumentFragment();
// for( let i=1;i<=100;i++)
// {
//     let newElement=document.createElement('p');
//     newElement.textContent='This is para '+i;

//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);
// const t6=performance.now();
// console.log("This took "+(t6-t5)+ "ms");





// function addPara(){
//     let para=document.createElement('p');
//     para.textContent='Js is single'; 
//     document.body.appendChild(para);
// }


// function appendNewMessage(){
//     let para=document.createElement('p');
//     para.textContent='Kya Haal Hai';
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();


// setTimeout(function(){
//     console.log('hello')
//     },5000);
