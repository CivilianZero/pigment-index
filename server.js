var express = require('express'),
	lowdb = require('lowdb'),
	fileAsync = require('lowdb/lib/file-async'),
	shortid = require('shortid'),
	app = express(),
	bodyParser= require('body-parser'),
	port = 3000;

var db = lowdb('db.json', { storage: fileAsync });

db.defaults({
	index: []
}).value();

app.use(bodyParser());

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/lib'));

app.post('/devTools', function (req, res) {
	var body = req.body,
		common = body.name.common,
		pronunc = body.name.pronunc,
		etym = body.name.etym,
		altNames = body.name.altNames,
		shortDescript = body.shortDescript,
		descript = body.descript,
		source = body.origins.source,
		location = body.origins.location,
		sourceDescript = body.origins.sourceDescript,
		production = body.origins.production,
		useStart = body.origins.useStart,
		useEnd = body.origins.useEnd,
		anecdote = body.anecdote,
		author = body.author,
		iconImg = body.images.iconImg,
		sourceImg = body.images.sourceImg,
		pigImg = body.images.pigImg,
		prodImg = body.images.prodImg,
		primary = body.images.primary,
		colorFamily = body.colorFamily;

	let pigment = {
		id: shortid(),
		name: {
			common: common,
			pronunc: pronunc,
			etym: etym,
			altNames: altNames
		},
		shortDescript: shortDescript,
		descript: descript,
		origins: {
			source: source,
			location: location,
			sourceDescript: sourceDescript,
			production: production,
			useStart: useStart,
			useEnd: useEnd
		},
		anecdote: anecdote,
		author: author,
		images: {
			iconImg: iconImg,
			sourceImg: sourceImg,
			pigImg: pigImg,
			prodImg: prodImg,
			primary: primary,
		},
		colorFamily: colorFamily
	};
	db.get('index').push(pigment).value();
	res.json(pigment);
	return;
});

app.get('/devTools', function (req, res) {
	res.json(db.get('index').value());
});

app.get('/devTools/:id', function (req, res) {
	var id = req.params.id;
	var pigment = db.get('index').find({ id: id }).value();
	if (pigment) {
		res.json(pigment);
		return;
	}
	res.status(404);
	res.json({ error: 'Pigment with that id not found.' });
});

app.put('/devTools/:id', function (req, res) {
	var id = req.params.id;
	var pigment = db.get('index').find({ id: id });
	

	var body = req.body,
		common = body.name.common,
		pronunc = body.name.pronunc,
		etym = body.name.etym,
		altNames = body.name.altNames,
		shortDescript = body.shortDescript,
		descript = body.descript,
		source = body.origins.source,
		location = body.origins.location,
		sourceDescript = body.origins.sourceDescript,
		production = body.origins.production,
		useStart = body.origins.useStart,
		useEnd = body.origins.useEnd,
		anecdote = body.anecdote,
		author = body.author,
		iconImg = body.images.iconImg,
		sourceImg = body.images.sourceImg,
		pigImg = body.images.pigImg,
		prodImg = body.images.prodImg,
		primary = body.images.primary,
		colorFamily = body.colorFamily;
		
	if (pigment.value()) {
		pigment = pigment.assign({
			name: {
				common: common,
				pronunc: pronunc,
				etym: etym,
				altNames: altNames
			},
			shortDescript: shortDescript,
			descript: descript,
			origins: {
				source: source,
				location: location,
				sourceDescript: sourceDescript,
				production: production,
				useStart: useStart,
				useEnd: useEnd
			},
			anecdote: anecdote,
			author: author,
			images: {
				iconImg: iconImg,
				sourceImg: sourceImg,
				pigImg: pigImg,
				prodImg: prodImg,
				primary: primary,
			},
			colorFamily: colorFamily
		}).value();
		res.json(pigment);
		return
	}
	res.status(404);
	res.json({error: 'Pigment with that ID not found.'});
});

// Delete
app.delete('/devTools/:id', function (req, res) {
	var id = req.params.id;
	var pigment = db.get('index').find({ id: id });
	if (pigment.value()) {
		db.get('index').remove({ id: id }).value();
		res.sendStatus(200);
		return;
	}
	res.status(404);
	res.json({error: 'Pigment with that ID not found.'});
});

app.listen(port);