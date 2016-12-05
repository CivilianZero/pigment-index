var EventEmitter = require('eventemitter3'),
	$ = require('jquery');

var pigmentStore = Object.create(EventEmitter.prototype);
EventEmitter.call(pigmentStore);

var resourceRoot = '/devTools/';
var index = [];

function findById (id) {
	return index.find(function (p) {
		return p.id === id;
	});
}

pigmentStore.get = function(id) {
	if(id) {
		return findById(id);
	} else {
		return index;
	}
}

pigmentStore.fetch = function (id) {
	if (id) {
		$.ajax({
			url: resourceRoot + id,
			success: function (response) {
				var existing = findById(response.id);
				if (!existing) {
					index.push(response);
				} else {
					// Will splice the existing object and insert the new one
					// from the server.
					index.splice(index.indexOf(existing), 1, response);
				}
				pigmentStore.emit('update');
			}
		});
		return findById(id);
	} else {
		$.ajax({
			url: resourceRoot,
			success: function (response) {
				index = response;
				pigmentStore.emit('update');
			}
		});
		return index;
	}
}

pigmentStore.add = function(
		common,
		pronunc,
		etym,
		altNames,
		shortDescript,
		descript,
		source,
		location,
		sourceDescript,
		production,
		useStart,
		useEnd,
		anecdote,
		iconImg,
		sourceImg,
		pigImg,
		prodImg,
		primary,
		colorFamily) 
{
	$.ajax({
		url: resourceRoot,
		method: 'POST',
		data: {
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
			images: {
				iconImg: iconImg,
				sourceImg: sourceImg,
				pigImg: pigImg,
				prodImg: prodImg,
				primary: primary,
			},
			colorFamily: colorFamily
		},
		success: function(response) {
			index.push(response);
			pigmentStore.emit('update');
		}
	});
}

pigmentStore.edit = function (
		id, 
		common,
		pronunc,
		etym,
		altNames,
		shortDescript,
		descript,
		source,
		location,
		sourceDescript,
		production,
		useStart,
		useEnd,
		anecdote,
		iconImg,
		sourceImg,
		pigImg,
		prodImg,
		primary,
		colorFamily) {
	var pigment = findById(id);
	if (pigment) {
		$.ajax({
			url: resourceRoot + id,
			method: 'PUT',
			data: {
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
				images: {
					iconImg: iconImg,
					sourceImg: sourceImg,
					pigImg: pigImg,
					prodImg: prodImg,
					primary: primary,
				},
				colorFamily: colorFamily
			},
			success: function(response) {
				index.splice(index.indexOf(pigment), 1, response);
				pigmentStore.emit('update');
			}
		});
	}
}

window.index = index;

module.exports = pigmentStore;