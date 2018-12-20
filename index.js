var topH = document.getElementById("topH");
var midH = document.getElementById('mid');
var botH = document.getElementById('bot');

var contai = document.getElementById("container");

contai.addEventListener("wheel", MoveLayer);

function MoveLayer(evt) {
  if(evt.deltaY >0){
               topH.style.color = "red";
               var colChange = setTimeout(grayC, 800);
           } else {
               topH.style.color = "blue";
           }
}

function grayC(evt){
  
}
