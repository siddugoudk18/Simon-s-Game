let gameSeq=[];
let userSeq=[];
let started= false;
let level=0;
let btns=["yellow","green","red","purple"];
let h2=document.querySelector("h2");
let body=document.querySelector("body");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
    }
    levelUp();
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}
function levelUp(){
    level++;
    userSeq=[];
    h2.innerText=`Level ${level}`;
let randIdx=Math.floor(Math.random() *4 );
let randColor=btns[randIdx];
let randbtn= document.querySelector(`.${randColor}`);

gameSeq.push(randColor);
console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(idx){
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length)
            setTimeout(levelUp  ,1000);
    }
    else{
        
    body.classList.add("errorFlash");
    setTimeout(function(){
        body.classList.remove("errorFlash");
    },250);
     h2.innerText= `game over at level ${level}`;
     reset();
    }
}


function btnpress(){
    let btn=this;
    console.log(this);
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length -1);
}
let allbtns= document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    level=0;
    started=false;

    gameSeq=[];
    userSeq=[];
}