var hotel = {
    // Object properties
    name: 'Copacabana',
    rooms: 150,
    booked: 125,
    gym: true,
    roomTypes: ['double', 'twin', 'suite', 'king'],
    checkAvailablity: function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailablity();

var elGym = document.getElementById('gym');
elGym.textContent = hotel.gym;

