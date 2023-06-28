function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function deleteLastCharacter() {
    var display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
  }
  
  function calculate() {
    var display = document.getElementById("display").value;
    var result = eval(display);
    document.getElementById("display").value = result;
  }
  