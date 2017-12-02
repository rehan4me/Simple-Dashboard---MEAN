var dashboardService = require('../services/dashboard.service');

_this = this;

// Async Controller function to get the Employee List

exports.getRecords = async function(req,res,next){
	// Check the existence of the query parameters, If the exists doesn't exists assign a default value
	var page = req.query.page? Number(req.query.page):1;
	var limit = req.query.limit?Number(req.query.limit):1;

	try{
		var records = await dashboardService.getRecords({},page,limit);
		return res.status(200).json({status:200,data:records,message:"Success"});
	}catch(e){
		return res.status(400).json({status: 400, message: e.message});
	}
};

