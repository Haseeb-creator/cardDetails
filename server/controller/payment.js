const CardModel = require('../model/paymentModel');


const createData = async (req, res) => {
	try {
		const { cardNumber, cardExpDate, cardCVV, currency, amount } = req.body;

		const generateRecipientToken = () => {
			const uuid = require('uuid');
			return uuid.v4();
		};
		// Generate recipientToken (You can use a library like 'uuid' for unique tokens)
		const recipientToken = generateRecipientToken();

		const newData = new CardModel({
			recipientToken,
			cardNumber,
			cardExpDate,
			cardCVV,
			currency,
			amount
		});

		// Save the data to MongoDB
		await newData.save();

		res.status(201).json({ message: 'Data saved successfully', data: newData });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};


module.exports = {
	createData,
};
