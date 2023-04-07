let count = 0;
document.getElementById(`increasebtn`).onclick= function(){
 count=+1;
 document.getElementById(`countlabel`).innerHTML= count;
}
document.getElementById(`RESET`).onclick= function(){
    count=0;
    document.getElementById(`countlabel`).innerHTML= count;
   }
   document.getElementById(`DECREASEbtn`).onclick= function(){
    count=-1;
    document.getElementById(`countlabel`).innerHTML= count;
   }