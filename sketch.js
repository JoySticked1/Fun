var readyToJump = false
var countdown = 10
function setup() {
	world.gravity.y = 10;
	player = new Sprite()
	player.bounciness = 0
	player.friction = 1
	player.rotationLock = false
	player.d = 60
    player.x = windowWidth/2
	player.y = windowHeight/2
	createCanvas(windowWidth, windowHeight);
	ground = new Sprite()
	ground.width = windowWidth*3
	ground.x = windowWidth/2
	ground.y = windowHeight - 1
	ground.collider = "s"
	ground.bounciness = 0.3
	background(100)
}
function draw() {
	background(100)
  	countdown += 1
	if(countdown==10){
		readyToJump = false
	}
  background(random(0,25),random(0,25),random(0,25))
	if (kb.pressing('space') || kb.pressing('up') || kb.pressing('w')) {
		readyToJump = true
		countdown = 0
	}
	if (kb.pressing('down') || kb.pressing('s')) {
		player.velocity.y += 0.1 
	}
	if (kb.pressing('right') || kb.pressing('d')) {
		player.velocity.x += 0.15
	}
	if (kb.pressing('left') || kb.pressing('a')) {
		player.velocity.x -= 0.15
	}
	if(player.colliding(ground) > 0){
		player.velocity.y = 0
	}
  if(player.colliding(ground) > 0 && readyToJump == true){
		player.velocity.y = -10
		readyToJump = false
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
