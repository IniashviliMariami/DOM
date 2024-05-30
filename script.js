let click=document.getElementById("btn")


click.addEventListener("click",function(){
    let text=document.getElementById("div1");
    text.style.display="none"
})


let newDiv=document.createElement("div");
let newH2=document.createElement("h2");
let newA=document.createElement("a");
newA.innerHTML="Go to profile";
document.body.appendChild(newDiv).id="card";
newDiv.appendChild(newH2).innerHTML="Gandalf";
let aElement=newDiv.appendChild(newA).href="#";




let FirstQuestion=document.getElementById("FirstQuestion")
let red=document.getElementById("red")
let blue=document.getElementById("blue")
let SecondQuestion=document.getElementById("SecondQuestion")
let black=document.getElementById("black")
let green=document.getElementById("green")

red.addEventListener("click",function(){
   red.style.backgroundColor="red"
})

blue.addEventListener("click",function(){
    blue.style.backgroundColor="green"
    FirstQuestion.style.color="green"
 })

 black.addEventListener("click",function(){
    black.style.backgroundColor="red"
 })

 green.addEventListener("click",function(){
    green.style.backgroundColor="green"
 })