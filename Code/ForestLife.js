let squirrel, birds, ground, moss1, moss2, plants, acorn, backgroundBack, backgroundFar, backgroundMiddle;

function preload() {
	//Back-Background
	backgroundBack = new Group();
	backgroundBack.addImg('backgroundBack', '../Sprites/Background/Back.png');
	backgroundBack.collider = 'none';
	backgroundBack.w = 144;
	backgroundBack.layer = 1;
	//Far-Background
	backgroundFar = new Group();
	backgroundFar.addImg('backgroundFar', '../Sprites/Background/Far.png');
	backgroundFar.collider = 'none';
	backgroundFar.w = 176;
	backgroundFar.layer = 2;
	//Middle-Background
	backgroundMiddle = new Group();
	backgroundMiddle.addImg('backgroundMiddle', '../Sprites/Background/Middle.png');
	backgroundMiddle.collider = 'none';
	backgroundMiddle.w = 192;
	backgroundMiddle.layer = 3;

	//Ground-Sprites
	ground = new Group();
	ground.addImg('ground', '../Sprites/Tiles/Ground.png');
	ground.collider = 'kinematic';
	ground.w = 48;
	ground.h = 48;
	ground.layer = 4;

	//Moss1-Sprites
	moss1 = new Group();
	moss1.addImg('moss1', '../Sprites/Plants/Moss1.png');
	moss1.collider = 'none';
	moss1.w = 27;
	moss1.h = 19;
	moss1.layer = 5;
	//Moss2-Sprites
	moss2 = new Group();
	moss2.addImg('moss2', '../Sprites/Plants/Moss2.png');
	moss2.collider = 'none';
	moss2.w = 27;
	moss2.h = 19;
	moss2.layer = 5;

	//Plant-Sprites
	plants = new Group();
	plants.addImg('moss1', '../Sprites/Plants/Plant.png');
	plants.collider = 'none';
	plants.w = 42;
	plants.h = 27;
	plants.layer = 6;

	squirrel = new Sprite(200, 10, 30, 45);

	//Right-Side Squirrel Sprites, list mode animation loading
	squirrel.addAni('IdleR', '../Sprites/Squirrel/IdleR1.png', 6);
	squirrel.addAni('Idle2R', '../Sprites/Squirrel/Idle2R1.png', 6);
	squirrel.addAni('RunR', '../Sprites/Squirrel/RunR1.png', 8);
	squirrel.addAni('DigR', '../Sprites/Squirrel/DigR1.png', 4);
	squirrel.addAni('EatR', '../Sprites/Squirrel/EatR1.png', 2);
	squirrel.addAni('DamageR', '../Sprites/Squirrel/DamageR1.png', 4);
	squirrel.addAni('DeathR', '../Sprites/Squirrel/DeathR1.png', 4);

	//Place the Squirrel on top of everything
	squirrel.layer = 10;

	//Don't rotate the Squirrel if it collides with anything
	squirrel.rotationLock = true;

	//Custom Squirrel Properties
	squirrel.eating = false;
	squirrel.eatingCount = 200;
	squirrel.digging = false;
	squirrel.diggingCount = 200;
	squirrel.looking = 'right';
	squirrel.running = false;
	squirrel.idle = true;
	squirrel.idleCount = 0;
	squirrel.shocked = false;
	squirrel.shockedCount = 10;

	// Birds
	birds = new Group();
	birds.x = () => round(random(500, 1500));
	birds.y = () => round(random(30, 150));
	birds.w = 32;
	birds.h = 32;
	birds.collider = 'none';
	// load spritesheet animations for the birds
	birds.addAni('Robin', '../Sprites/Birds/Robin.png', { frames: 3 });
	birds.addAni('Bluejay', '../Sprites/Birds/Bluejay.png', { frames: 3 });
	birds.addAni('Sparrow', '../Sprites/Birds/Sparrow.png', { frames: 3 });
	birds.anis.frameDelay = 10;
	birds.vel.x = -2;
}

function setup() {
	createCanvas(400, 288, 'pixelated');

	//Physics!
	world.gravity.y = 7;

	//Generate the Background-Back-Tiles
	for (let i = -5000; i <= 5000; i += 143) {
		new backgroundBack.Sprite(i, 120);
	}
	//Generate the Background-Far-Tiles
	for (let i = -5000; i <= 5000; i += 176) {
		new backgroundFar.Sprite(i, 120);
	}
	//Generate the Background-Middle-Tiles
	for (let i = -5000; i <= 5000; i += random(50, 300)) {
		new backgroundMiddle.Sprite(i, 120);
	}

	//Generate the Ground-Tiles
	for (let i = -5000; i <= 5000; i += 48) {
		new ground.Sprite(i, 264);
	}

	//Generate the Moss-Tiles
	for (let i = -5000; i <= 5000; i += 15) {
		new moss1.Sprite(i + floor(random(-100, 100)), floor(random(240, 300)));
	}
	for (let i = -5000; i <= 5000; i += 15) {
		new moss2.Sprite(i + floor(random(-100, 100)), floor(random(240, 300)));
	}
	//Generate the Plant-Tiles
	for (let i = -5000; i <= 5000; i += random(20, 200)) {
		new plants.Sprite(i, 230);
	}
}

function draw() {
	clear();

	handleAcorns();
	squirrelBehavior();
	handleBirds();
	moveWorld();
}
