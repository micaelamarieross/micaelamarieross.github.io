var img;
var fireball = [];

function preload() {
 img = loadImage("Cover for p5.png");
}

function setup() {
  createCanvas(424, 665);
  background(255);

 for (var i = 0; i < 50; i++) {
   fireball[i] = new Fireball ();
 }
}

function draw() {
 
  
  for (var i = 0; i < 50; i++) {
  fireball[i].display();
  fireball[i].bounce();
  }
  imageMode(CENTER);
  image(img, width/2, height/2, 425, 660);
}
 
// fireball constructor
function Fireball() {
  
  this.xpos = random(width);
  this.ypos = random(height);
  
  this.xspeed = random(0.5, 1);
  this.yspeed = random(0.5, 1);
  
  this.size = random(50, 400);
  
  this.c = color(255, random(60, 255), random(0, 122), 75);
  
  this.d = dist(random(0,70), random(0,70), 0, 0);


	// move method
  this.bounce = function() {
   
  	//bouncing horizontally
  	this.xpos = this.xpos + this.xspeed;
  	 if (this.xpos > width || this.xpos < 0)  {
     	this.xspeed = -this.xspeed;
  	}

  	//bouncing veritcally
		this.ypos = this.ypos + this.yspeed;
  	if (this.ypos > height || this.ypos < 0) {
	 	  this.yspeed = -this.yspeed;
    }
  }
  
  // display method
  this.display = function() {
    noStroke();
  	ellipse (this.xpos, this.ypos, this.size);
		fill (this.c);
  }
}
  	
  	 
