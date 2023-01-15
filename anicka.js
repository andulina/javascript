
var radky = 0;
var sloupce = 0;
var sirka = 20;

var pos = [1, 3]

function setup() {
  createCanvas(500, 400);

  radky = width / sirka;
  sloupce = height / sirka;

  console.log(radky, sloupce);

}




function draw() {
  background(51);

  stroke(151);
  

  for (var j = 0; j < sloupce; j++) {
    for (var i = 0; i < radky; i++) {
      if (i == pos[0] && j == pos[1]) {
        fill(151, 0, 151);
      } else {
        noFill();
      }
      rect(sirka*i, sirka*j, sirka, sirka);
    }
  }
}


function keyPressed() {
  if (keyCode === UP_ARROW && pos[1] > 0) {
    pos[1] -= 1;
  }
  if (keyCode === DOWN_ARROW && pos[1] < sloupce - 1) {
    pos[1] += 1;
  }
  if (keyCode === RIGHT_ARROW && pos[0] < radky - 1) {
    pos[0] += 1;
  }
  if (keyCode === LEFT_ARROW && pos[0] > 0) {
    pos[0] -= 1;
  }
}