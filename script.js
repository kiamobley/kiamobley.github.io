// alert("Welcome to Exit 4 Bullies");

function clickFunction() {

  document.getElementById("title").style.fontSize = "100px";
}

var audioelement = document.getElementById("player");
audioelement.addEventListener("ended", function(){
  document.getElementById("player").src = "music2.mp3";
});
