"use strict";
let statArr = []
function clicker(param)
 {
    if (statArr.length == 0 || statArr == "O")
    {
       param.innerHTML = "X"
       statArr[0] = "X"
       param.classList.add("X")
       
    }
    else if (statArr == ("X"))
    {
        param.innerHTML = "O"
        statArr[0] = "O"
        param.classList.add("O")
        
    }
 }

 function addHover (param)
 {
    param.classList.add("hover")
 }

 function removeHover (param)
 {
    param.classList.remove("hover")
 }

window.onload = function (){//this enables the window to load
    let myDiv = document.getElementById("board").children//gets the children of the div element with ID = board and stores it in a variable, myDiv

    for (let count = 0; count<myDiv.length; count++)
    {
        myDiv[count].className = "square"
        myDiv[count].setAttribute("onclick","clicker(this)")
        myDiv[count].setAttribute("onmouseover","addHover(this)")
        myDiv[count].setAttribute("onmouseout","removeHover(this)")
    }
}