"use strict";

window.onload=function (){
    let myDiv=document.getElementById("board").children
    for (let count=0;count<myDiv.length;count++){
        myDiv[count].className="square"
    }
}