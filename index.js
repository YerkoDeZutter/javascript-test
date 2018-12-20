var topH = document.getElementById("topH");
var midH = document.getElementById('mid');
var botH = document.getElementById('bot');
var scrollE = true;
var selections = document.querySelectorAll(".section");
var selectionNum = 0;

var contai = document.getElementById("container");




contai.addEventListener("wheel", MoveLayer);




function MoveLayer(evt) {
  if(scrollE == true){
    if (evt.deltaY > 0) {
      topH.style.color = "red";
      var colChange = setTimeout(grayC, 800);
      scrollE = false;


      if (selectionNum < 3) {
        selectionNum++
      } else {

      }



    } else {
      topH.style.color = "blue";
      var colChange = setTimeout(grayC, 800);
      scrollE = false;

      if (selectionNum > -1) {
        selectionNum--
      } else {

      }
    }

    selections[selectionNum].classList.add = "front";
    selections[selectionNum].classList.remove = "toFar back";

    console.log(selectionNum)

    if (selectionNum == 4) {

    }

    selections[selectionNum+1].classList.remove = "front";
    selections[selectionNum-1].classList.remove = "front";

    selections[selectionNum-1].classList.add = "toFar";
    selections[selectionNum+1].classList.add = "back";

  } else {

  }
}

function grayC(evt) {
  topH.style.color = "gray";
  scrollE = true;
}
