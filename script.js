text.onmousedown = function(event) { //  start the process
    // get ready to move: make an absolute and top z-index
    text.style.position = 'absolute';
    text.style.zIndex = 1000;
    // move it from any existing parents directly to the body
    // to position it relative to the body
    document.body.append(text);
    // and put this absolutely positioned text under the pointer
    moveAt(event.pageX, event.pageY);

    // centers the text on the coordinates (pageX, pageY)
    function moveAt(pageX, pageY) {
      text.style.left = pageX - text.offsetWidth / 2 + 'px';
      text.style.top = pageY - text.offsetHeight / 2 + 'px';
    }
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    //  move the text on mousemove
    document.addEventListener('mousemove', onMouseMove);
    // drop the text, remove unneeded handlers
    document.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      text.onmouseup = null;
    };
  };

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
