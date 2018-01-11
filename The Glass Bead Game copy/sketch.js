/* The inspiration for this sketch came from the book The Glass Bead Game by Hermann Hesse. Here's a link to a the cover:
https://www.penguin.com.au/books/the-glass-bead-game-9780099283621 .I've also included a picture of the cover in my zip
file. My first degree was in English Nonfiction Writing, so part literature, part journalism. I decided to come to Sydney
to do this degree because I want to explore the intersection between writing and technology, or "writ-tech" as I call it
sometimes. I think that digital books and journalism are going to change a massive amount over the next few decades. Technology 
has become integrated into our daily lives, and we consume a massive amount of information through a screen, which means there
is tremendous opportunity to use technology to change the way that stories and news are presented. I want to be an experience
designer so I can hopefully help to answer this question: how can technology augment writing and bring the reader deeper
into stories in a thoughtful, beautiful and engaging way?

So the idea behind the sketch is that most digital books are boring. They are simple plug and chug conversions of print to 
digital text. Digital books can be so much more than that. A book could change based on real-time data from the Internet; 
grow, morph or change based on a reader’s decision; change based on algorithms and incorporate generative art; plunge the 
reader into a different world using virtual reality; or follow a reader around the web using cookies. This is my first 
attempt to experiment with what a digital book cover could look like and the advantages that technology and digital art
can bring to the table.
*/


var pg6;
var pg9;
var pg12;
var imgtext;


function preload() {
  pg6 = createVideo("Marble6_video.mov");
  pg9 = createVideo("Marble9_videoII.mov");
  pg12 = createVideo("Marble12_video.mov");
  /* Here I have a 'code within code thing going on.' I made a sketch and then recorded it and uploaded the video to create my 
  texture. Code from the video is generative, but the video is a 45 sec loop. I'm going to place the code from the video at 
  the bottom of this sketch so that you can see it. I created a video texture for this marble instead of passing a graphic
  because I wanted to keep the effect of moving along the y and z axis and changing the frame count. It loses it's generative effect 
  but creates the effect that I wanted and is more interesting to look at. I have pasted the code for marble 6 and marble 12 at the 
  bottom of this sketch so that you can see the code behind the videos.
  
  I also created a video for marble 9, the title marble, because of current limitations with WEBGL. I think they're still developing
  text functions. I got text to appear using createSpan and the DOM library but it was very difficult to tweak it in WEBGL 
  mode, and I needed HTML skills to mess with positioning and font. So my work around was to create a 2D version with text 
  and place it as a texture, though this caused it to lose its generative quality.*/
  pg6.hide();
  pg6.loop();
  pg9.hide();
  pg9.loop();
  pg12.hide();
  pg12.loop();
  
  imgtext = loadImage("vintage_hesse.png");
}

var pg1;
var pg2;
var pg3;
var pg4;
var pg5;
var pg7;
var pg8;
var pg10;
var pg11;

var diameterone;
var diameterfour;
var diameterfive;
var diameterseven;
var diametereight;
var diameterten;

var angleone = 0;
var anglefour = 0;
var anglefive = 0;
var angleseven = 0;
var angleeight = 0;
var angleten = 0;

var fireballtwo = [];
var fireballthree = [];
var fireballfive = [];
var fireballseven = [];
var fireballeleven = [];


function setup() {

  createCanvas(425, 790, WEBGL);

  //marble one defining sine wave height and width
  diameterone = 600 - 250 && 600 - 350;

  //marble four defining sine wave height and width
  diameterfour = 600 - 250 && 600 - 350;

  //marble five defining sine wave height and width
  diameterfive = 500 - 250 && 500 - 350;

  //marble seven defining sine wave height and width
  diameterseven = 500 - 250 && 500 - 350;

  //marble eight defining sine wave height and width
  diametereight = 600 - 250 && 600 - 350;

  //marble ten defining sine wave height and width
  diameterten = 600 - 250 && 600 - 350;

  background(255);

  //for loop for marble two
  for (var martwo = 0; martwo < 5; martwo++) {
    fireballtwo[martwo] = new FireballTwo();
  }
  
  //for loop for marble three
  for (var marthree = 0; marthree < 10; marthree++) {
    fireballthree[marthree] = new FireballThree();
  }

  //for loop for marble five
  for (var marfive = 0; marfive < 10; marfive++) {
    fireballfive[marfive] = new FireballFive();
  }

  //for loop for marble seven 
  for (var marseven = 0; marseven < 10; marseven++) {
    fireballseven[marseven] = new FireballSeven();
  }

  //for loop for marble eleven
  for (var mareleven = 0; mareleven < 10; mareleven++) {
    fireballeleven[mareleven] = new FireballEleven();
  }


  pg1 = createGraphics(600, 600);
  pg2 = createGraphics(400, 400);
  pg3 = createGraphics(400, 400);
  pg4 = createGraphics(600, 600);
  pg5 = createGraphics(400, 400);
  pg7 = createGraphics(400, 400);
  pg8 = createGraphics(600, 600);
  pg10 = createGraphics(600, 600);
  pg11 = createGraphics(400, 400);

}

function draw() {

  background(255);
  


// Here I am drawing all the parts of the marbles that use sine waves. Placing it here makes it appear above the generative backgrounds


  //marble one//
  //Basic setup of my math: https://p5js.org/examples/math-sine.html
  var d1 = 10 + (sin(angleone) * diameterone * 3) + diameterone;
  var d2 = 10 + (sin(angleone + PI / 6) * diameterone * 3) + diameterone;

  pg1.background(241, 198, 92, 100);
  pg1.fill(168, 205, 179, 200);
  pg1.noStroke();
  pg1.ellipse(200, 200, d1, d1);

  pg1.fill(250, 242, 57, 100);
  pg1.ellipse(200, 500, d2, d2);

  angleone += 0.02;


  //marble four//

  var d3 = 10 + (sin(anglefour) * diameterfour * 3) + diameterfour;
  var d4 = 10 + (sin(anglefour + PI / 6) * diameterfour * 3) + diameterfour;

  pg4.background(225, 94, 80);
  pg4.noStroke();
  pg4.fill(224, 118, 97);
  pg4.ellipse(220, 200, d3, d3);
  pg4.fill(225, 105, 88);
  pg4.ellipse(200, 500, d4, d4);

  anglefour += 0.02;


  //marble five//
  //Here I am drawing the green sine ellipse to keep drawing on top of my generative background

  var d5 = 10 + (sin(anglefive + PI / 6) * diameterfive / 2) + diameterfive / 3;

  pg5.fill(127, 165, 128, 200);
  pg5.noStroke();
  pg5.ellipse(300, 300, d5, d5);

  anglefive += 0.02;


  //marble seven//
  //Here I am drawing the two green sine ellipses to keep drawing on top of my generative background

  var d6 = 10 + (sin(angleseven + PI / 6) * diameterseven / 2) + diameterseven / 3;
  var d7 = 10 + (sin(angleseven + PI / 6) * diameterseven / 6) + diameterseven / 6;

  pg7.fill(108, 174, 157);
  pg7.ellipse(300, 300, d6, d6);
  pg7.fill(173, 210, 143);
  pg7.ellipse(300, 300, d7, d7);

  angleseven += 0.02;


  //marble eight//

  var d8 = 10 + (sin(angleeight) * diametereight * 3) + diametereight;
  var d9 = 10 + (sin(angleeight + PI / 6) * diametereight * 3) + diametereight;

  pg8.background(209, 225, 145, 100);
  pg8.fill(222, 154, 178, 200);
  pg8.noStroke();
  pg8.ellipse(200, 200, d8, d8);
  pg8.fill(219, 225, 224, 125);
  pg8.ellipse(200, 500, d9, d9);

  angleeight += 0.02;


  //marble ten//

  var d10 = 10 + (sin(angleten) * diameterten / 10) + diameterten / 10;
  var d11 = 10 + (sin(angleten + PI / 6) * diameterten / 6) + diameterten / 4;
  var d12 = 10 + (sin(angleten + PI / 2) * diameterten / 6) + diameterten / 2;

  pg10.background(58, 86, 72);
  pg10.fill(168, 74, 81);
  pg10.ellipse(300, 300, d10, d10);
  pg10.noFill();
  pg10.stroke(168, 74, 81);
  pg10.strokeWeight(14);
  pg10.ellipse(300, 300, d11, d11);
  pg10.ellipse(300, 300, d12, d12);

  angleten += 0.02;


  // FOR LOOP FOR GENERATIVE MARBLES USING FIREBALL CLASS 
  /* I definitely recognize that this is a very messy, long and inefficent way to create objects that all have a fairly similar structure.
  Since I had to pass a graphic for most of the marbles and place videos, it got kind of tricky and buggy to structure. 
  Ideally, I would have one array and would use the classes and methods to individualise each marble, but it became tricky 
  since each marble has its own pgraphic and seemed to be the only way to apply the individual textures to the 3D objects. 
  */

  for (var i = 0; i < 5; i++) {
  
   //marble two//
    fireballtwo[i].bounce();
    fireballtwo[i].display();
   
  }

  for (var j = 0; j < 10; j++) {
    
    //marble three//
    fireballthree[j].bounce();
    fireballthree[j].display();

    //marble five//
    fireballfive[j].bounce();
    fireballfive[j].display();

    //marble seven//
    fireballseven[j].bounce();
    fireballseven[j].display();

    //marble eleven//
    fireballeleven[j].bounce();
    fireballeleven[j].display();

  }


  // DRAWING ALL !2 MARBLES I.E. SPHERES 


  push();
  
  /* The camera function controls the zoom of the sketch. By using a sine function, the perspective moves in and out with 
  a nice fluid motion. Multiplying by 450 makes the camera zoom in pretty far along the z-axis, which creates the effect 
  that you're going "into the marbles" when the camera gets close. I didn't allow the user to control the camera change 
  because it can be kind of jarring, especially with everything else going on and being able to control the y and x axis rotation.
  https://p5js.org/reference/#/p5/camera 
  */
  camera(0, 0, sin(frameCount * 0.0065) * 450 , 0, 0, 0, 0, 0, 0);
  rotateX(mouseY * 0.02);
  rotateY(mouseX * 0.02);
  
  // Learned how to control point light from the p5 example: https://p5js.org/reference/#/p5/pointLight 
  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;
  
  // The randomness creates the glowing effect on the marbles 
  ambientLight(random (124,130));
  pointLight(225, 225, 225, locX, locY, 0);

  //marble one//
  push();
  translate(-140, -255, 0);
  texture(pg1);
  sphere(70);
  pop();


  //marble two//
  push();
  translate(0, -255, 0);
  texture(pg2);
  sphere(70);
  pop();


  //marble three// 
  push();
  translate(140, -255, 0);
  texture(pg3);
  sphere(70);
  pop();


  //marble four//
  push();
  translate(-140, -110, 0);
  texture(pg4);
  sphere(70);
  pop();


  //marble five//
  push();
  translate(0, -110, 0);
  texture(pg5);
  sphere(70);
  pop();


  //marble six//
  push();
  translate(140, -110, 0);
  texture(pg6);
  sphere(70);
  pop();


  //marble seven//
  push();
  translate(-140, 35, 0);
  texture(pg7);
  sphere(70);
  pop();


  //marble eight//
  push();
  translate(0, 35, 0);
  texture(pg8);
  sphere(70);
  pop();


  //marble nine//
  push();
  translate(140, 35, 0);
  texture(pg9);
  sphere(70);
  pop();


  //marble ten//
  push();
  translate(-140, 180, 0);
  texture(pg10);
  sphere(70);
  pop();


  //marble eleven//
  push();
  translate(0, 180, 0);
  texture(pg11);
  sphere(70);
  pop();


  //marble twelve//
  push();
  translate(140, 180, 0);
  texture(pg12);
  sphere(70);
  pop();
  
  
  // VINTAGE HESSE text//
  push();
  translate(110, -360, 0);
  rotateY(mouseX * 0.02);
  texture(imgtext);
  plane(170, 25);
  pop();
  
  pop();

}


// Drawing all marbles that use the fireball class to create a generative background 


//marble two//
function FireballTwo() {

  this.xpos = random(width);
  this.ypos = random(8, 800);

  this.xspeed = random(0.4, 0.8);
  this.yspeed = random(0.4, 0.8);

  this.size = random(25, 75);

  this.c = color(random(180, 188), random(100, 102), random(110, 113), 5);

  this.d = dist(random(0, 70), random(0, 70), 0, 0);


  // move method
  this.bounce = function() {

    push();

    //bouncing horizontally -- I modeled my bounce method off this example: https://gist.github.com/rlieberman/f9a4a0f09603fe2ce136
    this.xpos = this.xpos + this.xspeed;
    if (this.xpos > windowWidth || this.xpos < 0) {
      this.xspeed = -this.xspeed;
    } else {
      scale((1.3), (1.0));
    }

    //bouncing vertically
    this.ypos = this.ypos + this.yspeed;
    if (this.ypos > windowHeight || this.ypos < 0) {
      this.yspeed = -this.yspeed;
    } else {
      scale((1.3), (1.0));
    }
  }
  
  // display method for marble two
  this.display = function() {
    pg2.noStroke();
    pg2.ellipse(this.xpos, this.ypos, this.size);
    pg2.fill(this.c);

    pop();
  }
}


//marble three//
function FireballThree() {
   this.xpos = random(width);
  this.ypos = random(8, 800);

  this.xspeed = random(0.4, 12);
  this.yspeed = random(0.4, 12);

  this.size = random(5, 75);

  this.c = color(random(100, 150), random(160, 200), random(205, 255), 150);

  this.d = dist(random(0, 70), random(0, 70), 0, 0);


  // move method
  this.bounce = function() {

    push();

    this.xpos = this.xpos + this.xspeed;
    if (this.xpos > windowWidth || this.xpos < 0) {
      this.xspeed = -this.xspeed;
    } else {
      scale((1.3), (1.0));
    }

    //bouncing vertically
    this.ypos = this.ypos + this.yspeed;
    if (this.ypos > windowHeight || this.ypos < 0) {
      this.yspeed = -this.yspeed;
    } else {
      scale((1.3), (1.0));
    }
  }

  // display method 
  this.display = function() {
    pg3.noStroke();
    pg3.ellipse(this.xpos, this.ypos, this.size);
    pg3.fill(this.c);

    
    pop();
  }
  
}
  
  
  

//marble five//
function FireballFive() {

  this.xpos = random(width);
  this.ypos = random(8, 800);

  this.xspeed = random(0.5, 12);
  this.yspeed = random(0.5, 12);

  this.size = random(0, 100);

  this.c = color(random(20, 83), random(60, 80), random(70, 83), random(0, 100));

  this.d = dist(random(0, 70), random(0, 70), 0, 0);


  // move method
  this.bounce = function() {
    push();

    this.xpos = this.xpos + this.xspeed;
    if (this.xpos > windowWidth || this.xpos < 0) {
      this.xspeed = -this.xspeed;
    } else {
      scale((1.3), (1.0));
    }

    //bouncing vertically
    this.ypos = this.ypos + this.yspeed;
    if (this.ypos > windowHeight || this.ypos < 0) {
      this.yspeed = -this.yspeed;
    } else {
      scale((1.3), (1.0));
    }
  }

  // display method 
  this.display = function() {
    pg5.noStroke();
    pg5.fill(this.c);
    pg5.ellipse(this.xpos, this.ypos, this.size);


    pop();
  }

}



//marble seven//
function FireballSeven() {
  this.xpos = random(width);
  this.ypos = random(8, 800);

  this.xspeed = random(0.5, 12);
  this.yspeed = random(0.5, 12);

  this.size = random(25, 75);

  this.c = color(random(100, 150), random(160, 200), random(205, 255), 30);

  this.d = dist(random(0, 70), random(0, 70), 0, 0);


  // move method
  this.bounce = function() {

    push();

    this.xpos = this.xpos + this.xspeed;
    if (this.xpos > windowWidth || this.xpos < 0) {
      this.xspeed = -this.xspeed;
    } else {
      scale((1.3), (1.0));
    }

    //bouncing vertically
    this.ypos = this.ypos + this.yspeed;
    if (this.ypos > windowHeight || this.ypos < 0) {
      this.yspeed = -this.yspeed;
    } else {
      scale((1.3), (1.0));
    }
  }

  // display method 
  this.display = function() {
    pg7.noStroke();
    pg7.fill(this.c);
    pg7.ellipse(this.xpos, this.ypos, this.size);


    pop();
  }

}


//marble eleven//
function FireballEleven() {
  this.xpos = random(width);
  this.ypos = random(8, 800);

  this.xspeed = random(0.5, 12);
  this.yspeed = random(0.5, 12);

  this.size = random(0, 100);

  this.c = color(255, random(87, 158), random(75, 118), random(100, 255));

  this.d = dist(random(0, 70), random(0, 70), 0, 0);


  // move method
  this.bounce = function() {

    push();

    this.xpos = this.xpos + this.xspeed;
    if (this.xpos > windowWidth || this.xpos < 0) {
      this.xspeed = -this.xspeed;
    } else {
      scale((1.3), (1.0));
    }

    //bouncing vertically
    this.ypos = this.ypos + this.yspeed;
    if (this.ypos > windowHeight || this.ypos < 0) {
      this.yspeed = -this.yspeed;
    } else {
      scale((1.3), (1.0));
    }
  }

  // display method 
  this.display = function() {
    pg11.noStroke();
    pg11.ellipse(this.xpos, this.ypos, this.size);
    pg11.fill(this.c);

    pop();
  }
}




/* This is the code behind the video for Marble 6 that is passed as a texture. The code for Marble 12 is very similar to this 
as well.

function setup(){
  createCanvas(800, 500, WEBGL);
  
}

function draw(){
  
  background(171,203,91);
  fill(247, 242, 73);
  ellipsoid(100,100);
  
 
  
  rotateY(frameCount * 0.01);
  
  //I learned this from the 3D sin/cosine ex. in p5 examples: https://p5js.org/examples/3d-sine-cosine-in-3d.html//
  for(var j = 0; j < 2; j++){
    push();
    for(var i = 0; i < 150; i++){
     translate(sin(frameCount * 0.0005 + j) * 150, sin(frameCount * 0.0005 + j) * 150, i * 0.1);
     rotateZ(frameCount * 0.0009);
      push();
      fill(random(150,181), random(200,255), random(200,219));
      ellipsoid(10,10); 
      pop();
    }
    pop();
  }
}
*/