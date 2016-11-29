var d3 = require('d3');

var d3Colors = {};

d3Colors.create = function(dataset, w, h, id) {
	d3.select('.color-filter').selectAll('div.bars')
		.data(dataset)
}