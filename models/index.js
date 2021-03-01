const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/fitnessChain';

mongoose.connect(MONGODB_URI, {
	useNewUrlParser:true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
})
	.then(() => console.log(`connected at ${MONGODB_URI}`))
	.catch((err) => console.log(`connection error ${err}`));


module.exports = {
	User: require('./User'),
}	