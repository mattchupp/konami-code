/*
  - Konami Code
  -- keycodes --
  37 = left / 38 = up / 39 = right / 40 = down / a = 65 / b = 66
*/

// keycodes for the konami code
// [up, up, down, down, left, right, left, right, B, A]
// var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var konamiCode = ["UP","UP","DOWN","DOWN","LEFT","RIGHT","LEFT","RIGHT","b","a"];
var keysPressed = []; // empty array to store keyspressed

document.addEventListener("keydown",
  function(event) {

    // store keycode of key pressed
    var keycode = event.which;

    if(key(keycode) === "LEFT") {
      keysPressed.push("LEFT");
    } else if(key(keycode) === "UP") {
      keysPressed.push("UP");
    } else if(key(keycode) === "RIGHT") {
      keysPressed.push("RIGHT");
    } else if(key(keycode) === "DOWN") {
      keysPressed.push("DOWN");
    } else if(key(keycode) === "a") {
      keysPressed.push("a");
    } else if(key(keycode) === "b") {
      keysPressed.push("b");
    } else {
      // if messed up, reset the array
      keysPressed = [];
    }

    if(konamiCode.toString() == keysPressed.toString()) {
      /* konami code was entered, so do something */
      alert('Konami Code Entered');
      // reset the keys pressed array
      keysPressed = [];
    }
});

// get the keycode and return the key pressed
function key (keycode) {
  if(keycode === 37) {
    return "LEFT";
  } else if(keycode === 38) {
    return "UP";
  } else if(keycode === 39) {
    return "RIGHT";
  } else if(keycode === 40) {
    return "DOWN";
  } else if(keycode === 65) {
    return "a";
  } else if(keycode === 66) {
    return "b";
  } else {
    return "";
  }
}
