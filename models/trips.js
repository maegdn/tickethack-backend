const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
	departure: String,
	arrival: String,
	date: Date,
	price: Number,
	status: {type: String, enum: ['available', 'booked', 'payed'], default: available}
});

const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;
