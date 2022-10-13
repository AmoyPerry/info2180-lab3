"use strict";
let statArr=[]
function clicker(param)
 {
    if (statArr.length==0 || statArr=="O")
    {
       param.innerHTML="X"
       statArr[0]="X"
       param.classList.add("X")
       
    }
    else if (statArr==("X"))
    {
        param.innerHTML="O"
        statArr[0]="O"
        param.classList.add("O")
        
    }
 }

window.onload=function (){
    let myDiv=document.getElementById("board").children

    for (let count=0;count<myDiv.length;count++)
    {
        myDiv[count].className="square"
        myDiv[count].setAttribute("onclick","clicker(this)")
    }
}