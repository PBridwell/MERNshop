const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Brings in items
const items = require('./routes/api/items');

// Init express
const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// Parser mid ware
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose
	.connect(db, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => console.log('Mongo Connected...'))
	.catch((err) => console.log(err));

// Use routes
app.use('/api/items', items); // any route starting with '/api/items' will be directed to items file variable above

// Init server listen
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
