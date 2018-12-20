var topH = document.getElementById("topH");
var midH = document.getElementById('mid');
var botH = document.getElementById('bot');
var scrollE = true;

var contai = document.getElementById("container");

contai.addEventListener("wheel", MoveLayer);

function MoveLayer(evt) {
  if(scrollE == true){
    if (evt.deltaY > 0) {
      topH.style.color = "red";
      var colChange = setTimeout(grayC, 800);
      scrollE = false;
    } else {
      topH.style.color = "blue";
      var colChange = setTimeout(grayC, 800);
      scrollE = false;
    }
  } else {

  }
}

function grayC(evt) {
  topH.style.color = "gray";
  scrollE = true;
}
