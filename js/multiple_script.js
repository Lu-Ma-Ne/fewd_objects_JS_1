// Define a constructor function template for hotels
function Hotel(name, rooms, booked) {
    // Object properties
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailablity = function() {
        return this.rooms - this.booked;
    };
}

// Define to instances of the hotel and their arguments
var clayHotel = new Hotel('Clayton', 68, 3);
var lemonHotel = new Hotel('Lemon', 56, 15);
var copaHotel = new Hotel('Copacabana', 150, 125);
var hilHotel = new Hotel('Hilton', 90, 15);

// Declare a variable to hold the name of the hotel and room availability 
var details1 = clayHotel.name + ' rooms: ';
    // add content to an existing variable----
    details1 += clayHotel.checkAvailablity();
// Get the hotel1 div
var elHotel1 = document.getElementById('hotel1');
// Add the variables created onto the empty div
elHotel1.textContent = details1;

var details2 = lemonHotel.name + ' rooms: ';
    details2 += lemonHotel.checkAvailablity();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

var details3 = copaHotel.name + ' rooms: ';
    details3 += copaHotel.checkAvailablity();
var elHotel3 = document.getElementById('hotel3');
elHotel3.textContent = details3;

var details4 = hilHotel.name + ' rooms: ';
    details4 += hilHotel.checkAvailablity();
var elHotel4 = document.getElementById('hotel4');
elHotel4.textContent = details4;

