function handleBirds() {
	// handle the birds
	if (birds.length < 2) {
		let bird = new birds.Sprite();
		bird.ani = ['Robin', 'Bluejay', 'Sparrow'][round(random(0, 2))];
	}

	for (let bird of birds) {
		if (abs(squirrel.x - bird.x) > 1000) bird.remove();
	}
}
