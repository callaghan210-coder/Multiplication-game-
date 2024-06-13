const num1  = Math.ceil(Math.random()*30)
const num2  = Math.ceil(Math.random()*30)

const questionE= document.querySelector("#question")
const formE = document.getElementById("form")
const inputE = document.getElementById("input")
const scoreE = document.getElementById("score")

questionE.innerHTML= `What is ${num1}multiply by${num2}`

const handlerefresh=()=>{
    setTimeout(function(){
        location.reload();

    },5000);//5000 milliseconds= 5 seconds
}
handlerefresh()

let score = JSON.parse(localStorage.getItem('score'));
if(!score){
    score=0
}
scoreE.innerText=`score :${score}`

const correctAns=num1 * num2;
formE.addEventListener("submit",()=>{
  const userAns =+ inputE.value
  if(userAns==correctAns){
    score++
    updateScore()
  }
  else{
    score--
    updateScore()

  }
})

function updateScore(){
    localStorage.setItem("score",JSON.stringify(score))
}