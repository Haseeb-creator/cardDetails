const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const dataController = require('./controller/payment');


const app = express();
app.use(express.json());
app.use(cors())

// please replace your mongo db link
mongoose.connect('mongodb+srv://mdhaseeb769:password@foodapp.muxkw30.mongodb.net/payment');


app.post('/api/data', dataController.createData);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
