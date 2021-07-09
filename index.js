
// inside the $(document).ready() event handler, creating a new function
  function displayTime(){
//create a variable called currentTime and set its value to a new Date object.
  var currentTime= new Date();
  var hours= currentTime.getHours();
  var minutes= currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  // This gets a "handle" to the clock div in our HTML
  var clockDiv = document.getElementById("clock");
  // Then we set the text inside the clock div
// to the hours, minutes, and seconds of the current time
  clockDiv.innerText = hours + ":" + minutes + ":" + seconds;

  }
  
  // This runs the displayTime function the first time
  displayTime();

;
