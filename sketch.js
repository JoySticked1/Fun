var readyToJump = false
var doubleJump = false
var doubleJumpAni = 60
var doubleJumpCount = 6
var countdown = 10
function setup() {
	world.gravity.y = 10;
	player = new Sprite()
    	playermid = new Sprite()
    	player.color = 'white'
    	playermid.color = 'black'
    	fun = new GlueJoint(player,playermid)
	player.bounciness = 0
	player.friction = 1
	player.rotationLock = false
	player.d = (windowHeight+windowWidth)/30
    	playermid.scale = (windowHeight+windowWidth)/3000
    	player.x = windowWidth/2
	player.y = windowHeight/2
	createCanvas(windowWidth, windowHeight);
	ground = new Sprite()
    	ground.color = 'white'
	ground.width = windowWidth*3
	ground.x = windowWidth/2
	ground.y = windowHeight - 1
	ground.collider = "s"
	ground.bounciness = 0.3
	background(100)
}
function draw() {
	background(0)
  	countdown += 1
  	doubleJumpCount += 1
  	doubleJumpAni += 1
    if (doubleJumpAni < 60){

    }
    if (doubleJumpCount == 15){
      doubleJump = true
    }
	if(countdown==10){
		readyToJump = false
	}
  background(random(0,25),random(0,25),random(0,25))
	if (kb.pressing('space') || kb.pressing('up') || kb.pressing('w')) {
        if(doubleJump == true){
          if (player.velocity.y<0){
            player.velocity.y -= 4
          }
          else{
            player.velocity.y = -6
          }          
          doubleJump = false
          doubleJumpAni = 0
        }
		readyToJump = true
		countdown = 0
      
	}
	if (kb.pressing('down') || kb.pressing('s')) {
        if(player.velocity.y<0){
		  player.velocity.y *= 0.98 
        }
	}
	if (kb.pressing('right') || kb.pressing('d')) {
		if (player.velocity.x<5){
			player.velocity.x += 0.05
		}
	}
	if (kb.pressing('left') || kb.pressing('a')) {
		if (player.velocity.x>-5){
			player.velocity.x -= 0.05
		}
	}
	if(player.colliding(ground) > 0){
		player.velocity.y = 0
	}
  if(player.colliding(ground) > 0 && readyToJump == true){
		player.velocity.y = -7.5
        readyToJump = false
        doubleJumpCount = 0
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
