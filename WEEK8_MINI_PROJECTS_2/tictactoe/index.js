const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const newGameBtn=document.querySelector(".btn");


let currentPlayer;
let gameGrid;


const winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//Let's create a function to initialise a game in it
function initGame(){
    currentPlayer="X";
    gameGrid=["","","","","","","","",""];
    //UI pr bhi empty krna padega sabko
    boxes.forEach((box,index)=>{
        box.innerText="";
        boxes[index].style.pointerEvents="all";
        //one more thing is missing,initalise boxes with css properties again
        box.classList=`box box${index+1}`;

    })

    newGameBtn.classList.remove("active");
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
}
initGame();
function swapTurn(){
    if(currentPlayer=="X")
        {
            currentPlayer="O";
        }
        else{
            currentPlayer="X";
        }
        //UI update
        gameInfo.innerText=`Current Player - ${currentPlayer}`;
}
function handleClick(index){
    if(gameGrid[index]===""){
        boxes[index].innerText=currentPlayer;//UI ko update krega
        gameGrid[index]=currentPlayer;//inner logic ko update kr rha hai
        boxes[index].style.pointerEvents="none";
        //swap turn 
        swapTurn();
        //check koi jeet to nhi gya
        checkGameOver(); 
    }
}

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
    })
});
function checkGameOver(){
    //TODO
    let answer="";

    winningPositions.forEach((position)=>{
        //all three boxes should be non-empty snd exactly same in value
        if((gameGrid[position[0]]!=="" || gameGrid[position[1]]!=="" || gameGrid[position[2]]!=="" )
        && (gameGrid[position[0]]===gameGrid[position[1]])
        && (gameGrid[position[1]]===gameGrid[position[2]])){
            //check if winner is X
            if(gameGrid[position[0]]==="X")
                answer="X";
            else
                answer="O";

                //disable pointer event
                boxes.forEach((box)=>{
                    box.style.pointerEvents="none";
                })
            //now we know X/O is the winner
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });
    if(answer!=""){
        //means we have a winner
        gameInfo.innerText=`Winner Player - ${answer}`;
        newGameBtn.classList.add("active");
        return;
    }
    // We know, No winner Found let's check wheteher there is a tie
    let fillCount=0;
    gameGrid.forEach((box)=>{
        if(box !== "")
            fillCount++;
    });
    //board is filled game is tied
    if(fillCount === 9){
        gameInfo.innerText="Game Tied !";
        newGameBtn.classList.add("active");
    }

}

newGameBtn.addEventListener("click",initGame);