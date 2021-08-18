const boxes= Array.from(document.getElementsByClassName('box')); 
const restart = document.getElementById("restartBtn")
const board = document.getElementById("board")
const name1 = document.getElementById("name")
const msg = document.getElementById("msg")
console.log(boxes);
let user
let spaces =[null,null,null,null,null,null,null,null,null];
const o_player ="O";
const x_player ="X";

console.log(`https://www.youtube.com/results?search_query=${user}+funny+video`)

let CurrentPlayer = o_player;
let playCount =0

const boxClicked =(e) => { 
    
    const id = e.target .id;
    console.log (id);
    
    if(!spaces[id-1]){
        spaces[id-1] =CurrentPlayer;
        CurrentPlayer= CurrentPlayer ===  o_player ? x_player : o_player;
        playCount +=1
        render()
        checkWin()
        
    }
}
const render = ()=>{
    console.log("render")
    boxes.forEach((box,id)=>{
        if(spaces[id] !=box.innerHTML ){
            box.innerHTML = spaces[id]
        }
    })
    
    
    console.log(spaces)


}
const winMsgRender=(id)=>{
        msg.innerText = spaces[id]==='O'?"O WINS":"X WINS"
        board.style.display = "none"
        setTimeout(()=>{
            window.location.href=`https://www.youtube.com/results?search_query=${user}+funny+video`
        },1000) 
    

}
//checking 3 of a kind in roe, coumn or diagonal
const checkWin= ()=>{
    console.log('check')
    user = name1.value
    if(spaces[0]!=null &&spaces[0]===spaces[1]&&spaces[1]===spaces[2]){
        console.log("1")
        winMsgRender(0)
    }
    else if(spaces[3]!=null &&spaces[3]==spaces[4]&&spaces[4]==spaces[5]){
        console.log("2")
        winMsgRender(3)
    }
    else if(spaces[6]!=null &&spaces[6]==spaces[7]&&spaces[7]==spaces[8]){
        console.log("3")
        winMsgRender(6)
    }
    else if(spaces[0]!=null &&spaces[0]==spaces[3]&&spaces[3]==spaces[6]){
        console.log("4")
        winMsgRender(0)
    }
    
    else if(spaces[2]!=null &&spaces[2]==spaces[5]&&spaces[5]==spaces[8]){
        console.log("5")
        winMsgRender(2)
    }
    else if(spaces[1]!=null &&spaces[1]==spaces[4]&&spaces[4]==spaces[7]){
        console.log("6")
      
        winMsgRender(1)
    }
    else if(spaces[0]!=null &&spaces[0]==spaces[4]&&spaces[4]==spaces[8]){
        console.log("7")
        winMsgRender(0)
    }
    else if(spaces[2]!=null &&spaces[2]==spaces[4]&&spaces[4]==spaces[6]){
        console.log("8")
        winMsgRender(2)
    }
          
        
}
 
const boardf = () => {
    boxes.forEach((box , index) =>{
        let styleString ='';
        if(index < 3){
            styleString += 'border-bottom: 3px solid var(--purple);'
        };
        if(index % 3 === 0 ){
            styleString += 'border-right: 3px solid var(--purple);'

        };
         if(index % 3 === 2){
            styleString += 'border-left: 3px solid var(--purple);'
         };
         if(index > 5){
            styleString += 'border-top: 3px solid var(--purple);'

         }; 
         box.style =styleString;
         box.addEventListener('click' , boxClicked);

    });
    
    
 
};
restart.addEventListener("click", (e)=>{
    spaces .fill(null)
    msg.innerText=""
    board.style.display = "flex"
    render()
    
})

boardf();