let boxes = document.querySelectorAll(".box");
let r = document.querySelector(".t");
let msgContainer = document.querySelector(".msg-container");
let h2 = document.querySelector("h2");
let c=0;
const re = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
let turn0 = true;
const winp = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
] 

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turn0){
            box.innerText = "O";
            box.classList.add("g");
            box.classList.remove("l");
            turn0 = false;
            
        }
        else{
            box.classList.remove("g");
            box.classList.add("l");
            box.innerText = "X"
            turn0 = true;
        }
        box.disabled = true;
        c++;
        let is = cwinner();
        if(c==9 && !is){
            draw();
        }
    } )
}); 
const draw = () =>{
    h2.innerText = "The Game Has Been Drawn";
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const Show = (winner) =>{
    h2.innerText = `Congratulations Player ${winner},\n You are the Winner`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const cwinner = () =>{
    for(p of winp){
        let p1 = boxes[p[0]].innerText;
        let p2 = boxes[p[1]].innerText;
        let p3 = boxes[p[2]].innerText;

        if(p1!="" && p2!="" && p3!=""){
            if(p1==p2 && p2==p3){
                Show(p1);
                return true;
            }
        }
    }
}
r.addEventListener("click",re);