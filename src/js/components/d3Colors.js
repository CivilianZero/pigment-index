var d3 = require('d3');

var d3Colors = {};

d3Colors.create = function(dataset, total) {
	d3.select('.color-filter').selectAll('div')
		.data(dataset)
		.enter()
		.append('div')
		.attr('class', 'bar')
		.attr('id', function(d) {
			return d.color;
		})
		.style('width', function(d) {
			return (d.number / total) * 100 + '%';
		})
		.style('height', '100px')
		.style('background', function(d){
			return d.color
		});
};

module.exports = d3Colors;