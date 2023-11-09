// text.onmousedown = function(event) { //  start the process
//     // get ready to move: make an absolute and top z-index
//     text.style.position = 'absolute';
//     text.style.zIndex = 1000;
//     // move it from any existing parents directly to the body
//     // to position it relative to the body
//     document.body.append(text);
//     // and put this absolutely positioned text under the pointer
//     moveAt(event.pageX, event.pageY);

//     // centers the text on the coordinates (pageX, pageY)
//     function moveAt(pageX, pageY) {
//       text.style.left = pageX - text.offsetWidth / 2 + 'px';
//       text.style.top = pageY - text.offsetHeight / 2 + 'px';
//     }
//     function onMouseMove(event) {
//       moveAt(event.pageX, event.pageY);
//     }
//     //  move the text on mousemove
//     document.addEventListener('mousemove', onMouseMove);
//     // drop the text, remove unneeded handlers
//     document.onmouseup = function() {
//       document.removeEventListener('mousemove', onMouseMove);
//       text.onmouseup = null;
//     };
//   };

  var x = document.createElement("BUTTON");

  function play() {
    var audio = document.getElementById("audio");
    audio.play();
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