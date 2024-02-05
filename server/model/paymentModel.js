const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
	recipientToken: {
		type: String,
		required: true,
		trim: true
	},
	cardNumber: {
		type: String,
		required: true,
		trim: true
	},
	cardExpDate: {
		type: String,
		required: true,
		trim: true
	},
	cardCVV: {
		type: String,
		required: true,
		trim: true
	},
	currency: {
		type: String,
		required: true,
		trim: true,
	},
	amount: {
		type: String,
		required: true,
		trim: true
	}
});

const CardModel = mongoose.model('card', cardSchema);

module.exports = CardModel;

// schema with validations

/* 	recipientToken: {
		type: String,
		required: true,
		trim: true,
	},
	cardNumber: {
		type: String,
		required: true,
		trim: true,
		// validate: {
		// 	validator: function (value) {
		// 		return /[0-9]{16}/.test(value);
		// 	},
		// 	message: 'Invalid card number format',
		// },
	},
	cardExpDate: {
		type: String,
		required: true,
		trim: true,
		// validate: {
		// 	validator: function (value) {
		// 		return /\d{2}\/\d{2}/.test(value);
		// 	},
		// 	message: 'Invalid card expiration date format',
		// },
	},
	cardCVV: {
		type: String,
		required: true,
		trim: true,
		// validate: {
		// 	validator: function (value) {
		// 		return /\d{3,4}/.test(value);
		// 	},
		// 	message: 'Invalid CVV format',
		// },
	},
	currency: {
		type: String,
		required: true,
		trim: true,
	},
	amount: {
		type: String,
		required: true,
		trim: true,
		// validate: {
		// 	validator: function (value) {
		// 		return !isNaN(parseFloat(value)) && isFinite(value);
		// 	},
		// 	message: 'Invalid amount format',
		// },
		// }, */