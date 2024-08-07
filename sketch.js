function setup() {
    createCanvas(1000, 1000);
    background("black")
  }
  
  function draw() {
    stroke("green");
    fill("black");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }