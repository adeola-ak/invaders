//create alien class
//*purpose is to display alien at specified position

class Alien {
	constructor(x, y, image) {
		this.x = x;
		this.y = y;
		this.image = image;
	}
	draw() {
		this.image(this.image, this.x, this.y, this.image.width / 30);
	}
}
