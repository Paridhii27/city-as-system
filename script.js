function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function playPause(){
  var theVideo = document.querySelector("vidPlay");
  if (theVideo.paused) {
    theVideo.play();
  }
  else  {
    theVideo.pause();
  }
}

function displaySmells() {
    document.querySelector(".textField").innerHTML =
    "hi";
    text.style.display = "block";
}

function displayImg(){
    
}

// draggable image journal:
dragElement(document.getElementById("pic"));
dragElement(document.getElementById("pic2"));
dragElement(document.getElementById("pic3"));
dragElement(document.getElementById("pic5"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

let image_node = document.createElement('i1');
      i1.addEventListener('click', () => {
        i1.parentNode.removeChild(i1);

      });