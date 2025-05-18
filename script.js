document.getElementById('button1').onclick = changeColor;

/* define a function to change the color of the background*/
function changeColor() {
  document.body.style.background = getRandomColor();
  return false;
}
/* define a function to return a random color */
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

function showContent() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text1 = document.getElementById("text1");
  var img1 = document.getElementById("img1");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text1.style.display = "block";
    img1.style.display = "block";
  } else {
    text1.style.display = "none";
    img1.style.display = "none";
  }
}