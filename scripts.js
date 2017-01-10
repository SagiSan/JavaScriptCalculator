function numFunc(value) {
  alert(value);
}

function operators(value) {
  var screen = document.getElementById('answer').value;
  if(screen === "" || screen[screen.length-1] === ".") {
    alert("Enter Number First");
  }else if(screen[screen.length-1] === "*" || screen[screen.length-1] === "/" || screen[screen.length-1] === "-" || screen[screen.length-1] === "+"){
    
document.getElementById('answer').value = document.getElementById('answer').value.substr(0, document.getElementById('answer').value.length - 1) + value;
        
  }else {
    document.getElementById('answer').value+= value;
  }
}

function zero(zeros) {
    var screen = document.getElementById('answer').value;
  if(screen === "0") {
    alert("Adding nothing to nothing adds nothing ( just write 0)");
  }else {
    document.getElementById('answer').value+= zeros;
  }
}

function point(value) {
  var screen = document.getElementById('answer').value;
  if(screen[screen.length-1] === ".") {
    alert("Enter a number");
  }else {
    document.getElementById('answer').value += value;
  }
}

function eva(value) {
      var screen = document.getElementById('answer').value;
  if(screen === "") {
     document.getElementById('answer').value = "";
  }else {
     document.getElementById('answer').value = eval(document.getElementById('answer').value);
    
  }
}