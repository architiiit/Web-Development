const inputSlider=document.querySelector("[data-lengthSlider]");
const lengthDisplay=document.querySelector("[data-lengthNumber]")

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password="";
let passwordLength=10;
let checkCount=0; 
handleSlider();
//set Strength circle color to grey
setIndicator("#ccc");

//Functions
// 1.copy conntent
// 2.handleSlider
// 3.generate password
// 4.setIndicator
// 5.getr random integer(min,max)
// 6.get random uppprcase
// 7. get random lower case
// 8. get random number
// 9. get random symbol
// 10.calculate strength


//set password Length to UI
function handleSlider(){
    inputSlider.value=passwordLength;
    lengthDisplay.innerText=passwordLength;

    const min=inputSlider.min;
    const max=inputSlider.max;
    inputSlider.style.backgroundSize=((passwordLength-min)*100/(max-min))+"% 100%";
}

//Input parametre se t kr deta hai
function setIndicator(color){
    indicator.style.backgroundColor=color;
    //shadow
    indicator.style.boxShadow=`0px 0px 12px 1px ${color}`;
}       


function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min))+min;//min se max ke beech me ek random integer

}

//0-9 ke bich me ek number deta hai
function generateRandomNumber(){
    return getRndInteger(0,9);
}
// a-z
function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123));//small alphabets ascii
}
// A-Z
function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91));//large alphabets ascii
}

function generateSymbol(){
    const randNum=getRndInteger(0,symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

async function copyContent(){
     try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText="copied";
     }
     catch(e){
        copyMsg.innerText="Failed";
     }  
     //to make copy wala span visible
     copyMsg.classList.add("active");
     setTimeout(()=>{
        copyMsg.classList.remove("active");
     },2000);

}

function shufflePassword(array){
    //Fisher Yates Method->used algorithm for shuffling
    for (let i = array.length - 1; i > 0; i--) {
        //random j findout 
        const j = Math.floor(Math.random() * (i + 1));
        //swapping number at i index and j index
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}
function handleCheckBoxChange()
{
    checkCount=0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked)
            checkCount++;
    });
    //special condition
    if(passwordLength<checkCount){
            passwordLength=checkCount;
            handleSlider();
    }
}
allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange);
})
inputSlider.addEventListener('input',(e)=>{
    passwordLength=e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click',()=>{
    if(passwordDisplay.value)//agar value padi hogi tab hi copy hoga
        copyContent();
})

generateBtn.addEventListener('click',()=>{
    //none of the checkbox are selected
    if(checkCount<=0) return;

    if(passwordLength<checkCount)
        {
            passwordLength=checkCount;
            handleSlider();
        }
        console.log("starting the journey");
        //let's start the journey to find new password
        //remove old password
        password="";

        //let's put the stuff mentioned by checkboxes
        // if(uppercaseCheck.checked){
        //     password+=generateUpperCase();
        // }
        // if(lowercaseCheck.checked){
        //     password+=generateLowerCase();
        // }
        // if(numbersCheck.checked){
        //     password+=generateRandomNumber();
        // }
        // if(symbolsCheck.checked){
        //     password+=generateSymbol();
        // }

        let funcArr=[];
        if(uppercaseCheck.checked)
            funcArr.push(generateUpperCase);

        if(lowercaseCheck.checked)
            funcArr.push(generateLowerCase);

        if(numbersCheck.checked)
            funcArr.push(generateRandomNumber);

        if(symbolsCheck.checked)
            funcArr.push(generateSymbol);

        //compulsury addition
        for(let i=0;i<funcArr.length;i++)
            {
                password+=funcArr[i]();
            }
            console.log("compulsory addition done");
        //remaining addition
        for(let i=0;i<passwordLength-funcArr.length ;i++)
            {
                let randIndex=getRndInteger(0,funcArr.length);
                password+=funcArr[randIndex]();
            }
            console.log("Remaining adddition done");
            //shuffle the  password
            password=shufflePassword(Array.from(password));
            console.log("Shuffling done");
            //show in UI
            passwordDisplay.value=password;
            console.log("UI adddition done");
            //calculate strength
            calcStrength();

});