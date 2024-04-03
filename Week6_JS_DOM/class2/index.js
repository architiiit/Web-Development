
// //wrong way of removing event listener

// document.addEventListener('click',function eventFunction(){
//     console.log('I have clicked on the document');
// });

// document.removeEventListener('click',function eventFunction(){
//     console.log('I have clicked on the document');
// });

// function eventFunction(){
//     console.log('I have clicked on the document');
// }
// document.addEventListener('click',eventFunction);
//Right way of removing listener
// document.removeEventListener('click',eventFunction);






// const content=document.querySelector('#wrapper');

// content.addEventListener('click',function(event){
//     console.log(event);
// });


// //prevent default action
// let links=document.querySelectorAll('a');
// let thirdLink=links[2];

// thirdLink.addEventListener('click',function(event){
//     event.preventDefault();//click krne pe ab link nhi khulega
//     console.log('maza aaya ,accha laga');
// });

let myDiv=document.createElement('div');
function paraStatus(event){
    // console.log('I have clicked on para');
    console.log('Para'+event.target.textContent);//used event.target property
    // console.log(event);
}
myDiv.addEventListener('click',paraStatus);
for(let i=1;i<=100;i++)
{
    let newElement=document.createElement('p');
    newElement.textContent='This is para '+i;

    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);




// let element=document.querySelector('#wrapper');

// element.addEventListener('click',function(event){
//     if(event.target.nodeName==='SPAN')//ab sirf span pe click krne se chalega p pe click krne pe nhi chalega
//     console.log('span pr click kia hai '+event.target.textContent);
// })