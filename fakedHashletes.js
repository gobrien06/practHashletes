var id = setInterval(frame, 5);

//base of the animation
function frame() {
    if (/* test for finished */) {
        clearInterval(id);
    } else {
        /* code to change the element style */
    }

//creating the animation
function myMove() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
      if (pos == 350) {
          clearInterval(id);
      } else {
          pos++;
          elem.style.top = pos + 'px';
          elem.style.left = pos + 'px';
      }
  }
}


