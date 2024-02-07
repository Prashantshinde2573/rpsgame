let userScore=0;
let compScore=0;

const icons= document.querySelectorAll(".icon");




const gencompChoise=() =>{
    const options=["rock", "paper", "seasor"];
    //get random indx no to gen computer choise
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}
//match drow function
const matchDrow=() =>{
    console.log("match drow");
    msg.innerText="MATCH DROW!";
    msg.style.backgroundColor="black";
}

//for restart button
function restart()
{
    userScore=0;
    us.innerText=userScore;
    compScore=0;
    cs.innerText=compScore;
    msg.innerText="Play Your Move !";
    msg.style.backgroundColor="darkslategrey"

}


//changing the score board

let cs=document.querySelector("#cs");
const us=document.querySelector("#us");

const msg=document.querySelector(".msg");


//WINNER FINDING
const showWinner=(userresult)=>{
    if (userresult)
    {
        console.log("YOU WILL WIN !");
        msg.innerText="YOU WIN!";
        msg.style.backgroundColor="green";
        userScore++
        us.innerText=userScore;
       

    }
    else 
    {
        console.log("You will lose !");
        msg.innerText="YOU LOSE!";
        msg.style.backgroundColor="red";
        compScore++;
        cs.innerText=compScore;
    }

}



const playGame=(userChoise) =>{
    //user choise is
    console.log("user choise is",userChoise);
    //computer choise is
    const compChoise=gencompChoise();
    console.log("comp choise is= ",compChoise)
    //for match drow
    if(userChoise===compChoise)
    {
        matchDrow();
    }
    else
    {
        let userresult=true;
        if(userChoise==="rock")
        {
            if(compChoise==="paper")
            {
                userresult=false;
            }
            else{
                userresult=true;
            }
        }
        else if(userChoise=="paper")
        {
            if(compChoise==="rock")
            {
                userresult=true;

            }
            else{
                userresult=false;
            }
        }
        else if (userChoise==="seasor")
        {
            if(compChoise==="rock")
            {
                userresult=false;
            }
            else{
                userresult=true;
            }
        }
        showWinner(userresult);

    }
 
}

//GET THE USER CHOISE
icons.forEach((icon) => {
    icon.addEventListener("click",() =>{
        const userChoise=icon.getAttribute("id");
        playGame(userChoise);
        

    })
})


