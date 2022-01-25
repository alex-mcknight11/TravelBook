// Buisness Logic for Adding Places
function TravelBook() {
	this.place = {};
	this.currentId = 0;
}

TravelBook.prototype.addPlace = function (place) {
	place.id = this.assignId();
	this.place[place.id] = place;
};

TravelBook.prototype.assignId = function () {
	this.currentId += 1;
	return this.currentId;
};

TravelBook.prototype.findPlace = function (id) {
	if (this.place[id] != undefined) {
		return this.place[id];
	}
	return false;
};

TravelBook.prototype.deletePlace = function (id) {
	if (this.place[id] === undefined) {
		return false;
	}
	delete this.place[id];
	return true;
};

// Buisness Logic for Places
function Place(landmark, city, country) {
	this.landmark = landmark;
	this.city = city;
	this.country = country;
}
Place.prototype.fullPlace = function () {
	return this.city + ', ' + this.country;
};
