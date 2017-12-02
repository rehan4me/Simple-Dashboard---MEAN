var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var dataSchema = new mongoose.Schema({
	id: String,
	username: String,
	game: String,
	level: String,
	startdate: String,
	enddate: Date,
	score: Number
}, { collection: 'usage' });

dataSchema.plugin(mongoosePaginate);

const usageData = mongoose.model('usagedate',dataSchema);

module.exports = usageData;