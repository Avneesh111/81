var mouseEvent="empty";
var last_position_of_x ,last_position_of_y;
var color="black";
var width=1;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e) {
    color=document.getElementById("iptclr").value;
    width=document.getElementById("iptwdh").value;
    mouseEvent="mousedown"; 
}
 canvas.addEventListener("mousemove",mymousemove);
 function mymousemove(e){
     current_position_of_x=e.clientX-canvas.offsetLeft;
     current_position_of_y=e.clientY-canvas.offsetTop;
     if(mouseEvent=="mousedown"){
         ctx.beginPath();
         ctx.strokeStyle=color;
         ctx.lineWidth=width;
         ctx.moveTo(last_position_of_x,last_position_of_y);
         ctx.lineTo(current_position_of_x,current_position_of_y);
         ctx.stroke();
     }
     last_position_of_y=current_position_of_y;
     last_position_of_x=current_position_of_x;
 }
 canvas.addEventListener("mouseup",mymouseup);
 function mymouseup(e){
     mouseEvent="mouseup";
 }

 canvas.addEventListener("mouseleave",mymouseleave);
 function mymouseleave(e){
     mouseEvent="mouseleave";
 }
function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}