var Dashboard = require('../models/dashboard.model');

_this = this;

// Async function to get records from mongoDB
exports.getRecords = async function(query,page,limit){
	// Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }

    try{
    	var records = await Dashboard.paginate(query,options);
    	return records;
    }catch(e){
		throw Error('Error when paginating data.');
    }
}
