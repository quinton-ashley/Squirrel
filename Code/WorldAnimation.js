function moveWorld() {
	//If not running, don't move the World
	if (!squirrel.running) {
		backgroundBack.vel.x = 0;
		backgroundFar.vel.x = 0;
		backgroundMiddle.vel.x = 0;
		ground.vel.x = 0;
		plants.vel.x = 0;
		moss1.vel.x = 0;
		moss2.vel.x = 0;
		squirrel.vel.x = 0;
		for (let bird of birds) bird.vel.x = -2;

		//If running, move the World.
	} else {
		//If we're facing right, move toe World right
		if (squirrel.looking === 'right') {
			backgroundBack.vel.x = -0.5;
			backgroundFar.vel.x = -1;
			backgroundMiddle.vel.x = -2;
			ground.vel.x = -2;
			plants.vel.x = -2;
			moss1.vel.x = -2;
			moss2.vel.x = -2;
			squirrel.vel.x = 0.00000000001;
			acorn.vel.x = -2;
			for (let bird of birds) bird.vel.x = -4;

			//If we're facing left, move toe World left
		} else if (squirrel.looking === 'left') {
			backgroundBack.vel.x = 0.5;
			backgroundFar.vel.x = 1;
			backgroundMiddle.vel.x = 2;
			ground.vel.x = 2;
			plants.vel.x = 2;
			moss1.vel.x = 2;
			moss2.vel.x = 2;
			squirrel.vel.x = -0.00000000001;
			acorn.vel.x = 2;
			for (let bird of birds) bird.vel.x = 0;
		}
	}
}
