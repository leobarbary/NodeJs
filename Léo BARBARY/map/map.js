var map = require ('map');
var mongoose = require ('mongoose');
var Poz = mongoose.Poz;
var pozLocalMongoose = require('poz-local-mongoose');
var Cave = new Poz ({
	name : String,
	lon : String,
	lat : String
});

	Cave.plugin(pozLocalMongoose);

	module.exports = mongoose.model('Cave', Cave)