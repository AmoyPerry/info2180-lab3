"use strict";
let statArr = []
let winnerStatus = false

let current_c, current_d, current_r 
 
let r_positions = {}; let c_positions = {}; let d_positions = {};

function checkr(r,options){
   for (let count = 0; count<r.length; count++){
       if (document.getElementById(r[count]).classList.contains(options) == false){
           return false
       }
   }
   return true
}
function checkC(c,options){
   
   for (let count = 0; count<c.length; count++){
       if (document.getElementById(c[count]).classList.contains(options) == false){
           return false
       }
   }
   return true
}
function checkD(d,options){
   if (d != null)
   {
       for (let count = 0; count<d.length; count++){
           if (document.getElementById(d[count]).classList.contains(options) == false){
               return false
           }
       }
       return true
   }
   return false
}

function clicker(param){
   
       if (statArr.length == 0 || statArr[0] == "O")
       { 
           param.textContent = "X"
           param.classList.add("X")
       }
       else if (statArr[0] == "X" )
       {
           param.textContent = "O"
           param.classList.add("O")
           
        }
       if(statArr[0] == "X"){
           statArr[0] = "O"
       }
       else
       {
           statArr[0] = "X"
       }
       current_r = r_positions[param.id]
       current_c = c_positions[param.id]
       current_d = d_positions[param.id]

       if (checkr(rs[current_r],statArr[0]) == true)
       {
           winnerStatus= true
       }
       else if (checkC(cs[current_c],statArr[0]) == true)
       {
           winnerStatus = true
       }
       else if (checkD(ds[current_d],statArr[0]) == true)
       {
           winnerStatus = true
       }
       if (winnerStatus== true)
       {
           let status = document.getElementById("status")
           status.classList.add("you-won")
           status.textContent = "Congratulations! " +statArr[0]+ " is the Winner!"
          
           
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

//the arrays of arrays seen below are the possible ways of getting winning combination but with rows, columns or diagnu
let rs =[[1,2,3], [4,5,6], [7,8,9]]
let cs = [[1,4,7], [2,5,8], [3,6,9]]
let ds = [ [1,5,9], [3,5,7]]

function checkD(d,options){
   if (d != null)
   {
       for (let count = 0; count<d.length; count++){
           if (document.getElementById(d[count]).classList.contains(options) == false){
               return false
           }
       }
       return true
   }
   return false
}

function checkC(c,options){
    
   for (let count = 0; count<c.length; count++){
       if (document.getElementById(c[count]).classList.contains(options) == false){
           return false
       }
   }
   return true
}

function checkr(r,options){
   for (let count = 0; count<r.length; count++){
       if (document.getElementById(r[count]).classList.contains(options) == false){
           return false
       }
   }
   return true
}
window.onload = function (){//this enables the window to load
    
    let myDiv = document.getElementById("board").children//gets the children of the div element with ID = board and stores it in a variable, myDiv
    
    for (let count = 0; count<myDiv.length; count++)
    {
         let idtracker=count+1
         myDiv[count].className = "square"
         myDiv[count].setAttribute("onclick","clicker(this)")
         myDiv[count].setAttribute("onmouseover","addHover(this)")
         myDiv[count].setAttribute("onmouseout","removeHover(this)")
         myDiv[count].setAttribute("id",(idtracker))
          //Computing the diagonal's possible position. Where the diagonal from left to right will represented by 0
          if (idtracker == 1||idtracker== 5||idtracker == 9)
          {
              d_positions[myDiv[count].id] = 0
          }
          if (idtracker == 3||idtracker== 5||idtracker== 7)
          {
              d_positions[myDiv[count].id] = 1
          }
          
         //Computing the column's possible position 
          if (idtracker == 1||idtracker == 4||idtracker == 7)
          {
              c_positions[myDiv[count].id] = 0
          }
          if (idtracker == 2||idtracker == 5||idtracker== 8)
          {
              c_positions[myDiv[count].id] = 1
          }
          if (idtracker == 3||idtracker == 6||idtracker == 9)
          {
              c_positions[myDiv[count].id] = 2
          }
          
         //Computing the row's possible position  
          if (idtracker<= 3)
          {
              r_positions[myDiv[count].id] = 0
          }
          if (idtracker > 3 && idtracker <=6)
          {
              r_positions[myDiv[count].id] = 1
          }
          if (idtracker > 6 && idtracker <= 9){
              r_positions[myDiv[count].id] = 2
          }
      }
    }

    

