let scene = 0;
//scene 1 = intro
//scene 2 = sad
//scene 3 = happy

let arr_x = [50, 100, 200, 300, 450];
let arr_y = [400, 100, 200, 300, 350];

let button;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (scene == 0) {
    background(255);
    fill(0);
    textSize(100);
    text("START", 0, 100);
  }

  if (scene == 1) {
    background(255);

    //face

    noFill();
    strokeWeight(3);
    ellipse(width / 2, height / 2, 600, 600);

    //pimples
    fill(255, 0, 0);
    for (let i = 0; i < arr_x.length; i++) {
      ellipse(arr_x[i], arr_y[i], 80, 80);
    }

    //mouse
    translate(250, 350);
    push();
    rotate(3.1);
    fill(255);
    arc(0, 0, 50, 50, 0, radians(180));
    pop();

    //eyes
    push();
    translate(-120, -180);
    scale(0.9);
    fill(255);
    ellipse(0, 0, 150, 150);
    rotate(radians(frameCount));
    fill(0);
    ellipse(0, -50, 50, 50);
    pop();

    push();
    translate(110, -180);
    scale(0.9);
    fill(255);
    ellipse(0, 0, 150, 150);
    rotate(radians(frameCount));
    fill(0);
    ellipse(0, -50, 50, 50);
    pop();
  }
}

function mousePressed() {
  if (scene == 0) {
    scene = 1;
  } else if (scene == 1) {
    arr_x.push(mouseX);
    arr_y.push(mouseY);
  }
  // delete elements in a reverse order for-loop
  for (let i = arr_x.length - 1; i >= 0; i--) {
    if (
      mouseX > arr_x[i] - 50 &&
      mouseX < arr_x[i] + 50 &&
      mouseY > arr_y[i] - 50 &&
      mouseY < arr_y[i] + 50
    ) {
      print("okay", i);
      arr_x.splice(i, 1);
      arr_y.splice(i, 1);
      if (i == 0) {
        scene = 2;
      }

      if (scene == 2) {
        background(255);

        push();
        translate(-250, -350);

        //face
        fill(255);
        strokeWeight(3);
        ellipse(width / 2, height / 2, 600, 600);

        //mouse
        translate(250, 350);
        push();
        rotate(0);
        fill(255);
        arc(0, 0, 50, 50, 0, radians(180));
        pop();

        //eyes
        push();
        translate(-120, -180);
        scale(0.9);
        fill(255);
        ellipse(0, 0, 150, 150);
        rotate(radians(frameCount));
        fill(0);
        ellipse(0, -50, 50, 50);
        pop();

        push();
        translate(110, -180);
        scale(0.9);
        fill(255);
        ellipse(0, 0, 150, 150);
        rotate(radians(frameCount));
        fill(0);
        ellipse(0, -50, 50, 50);
        pop();
        pop();
      }
    }
  }
}
