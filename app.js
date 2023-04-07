let count = 0;
document.getElementById(`increasebtn`).onclick= function(){
 count+=1;
 document.getElementById(`countlabel`).innerText= count;
}
document.getElementById(`RESET`).onclick= function(){
    count=0;
    document.getElementById(`countlabel`).innerText= count;
   }
   document.getElementById(`DECREASEbtn`).onclick= function(){
    count-=1;
    document.getElementById(`countlabel`).innerText= count;
   }