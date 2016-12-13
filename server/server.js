var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var app = express();
var Airline = require('./airline');
var PAGESIZE = 20;
app.use(morgan('combined'));
var dbUrl = 'mongodb://127.0.0.1/airlines';
mongoose.connect(dbUrl);
app.use(bodyParser.json({type:'*/*'}));
var port = process.env.PORT||12000;
app.use('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
  next();
});

app.get('/',function(req,res){
	res.json('welcome you')
})

app.get('/stat',function(req,res){
	var keyword = req.query.keyword||'';
	var regex = new RegExp(keyword,'i');
	Airline.count({name:regex},function(err,count){
		if (err){
			res.json({success:false,errMsg:err.toString()})
		}else{
			res.json({success:true,data:count})
		}
	})
})

app.get('/airlines',function(req,res){
	var pageNum = req.query.page||1;
	var keyword = req.query.keyword||''
	var regex = new RegExp(keyword,'i');
	Airline.
		find({name:regex}).
		skip((pageNum-1)*PAGESIZE).
		limit(PAGESIZE).
		exec(function(err,airlines){
			if (err){
				res.json({success:false,errMsg:err.toString()})
			}else{
				res.json({success:true,data:airlines})
			}
		})
})

app.listen(port,function(){
    console.log('the server is running on '+port);
})
