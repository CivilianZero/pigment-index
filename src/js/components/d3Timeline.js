var d3 = require('d3');

var timeConverter = require('./timeConverter.js');

var d3Timeline = {};

d3Timeline.create = function(dataset, width) {
	var w = parseInt(width),
		start,
		end,
		maxY = 0;

	var xScale = d3.scaleLinear()
		.domain([0, 28])
		.range([0, w - 33]);

	var axisScale= d3.scaleLinear()
		.domain([0, 30])
		.range([-20, w-30]);

	for (var i = 0; i < dataset.length; i++) {
		let tempY,
			y = i * 15;

		tempY = y + 10;
	
		if ( tempY >= maxY ) { 
			maxY = tempY; 
		}

	}

	var axis = d3.axisBottom(axisScale)
			.ticks(5)
			.tickSize(999);

	var svg = d3.select('.timeline-filter')
		.append('svg')
		.attr('height', maxY + 10)
		.attr('width', '100%');

	d3.select('svg')
		.append('g')
		.attr('class', 'axis')
		.call(axis)
		.selectAll("text")
		.remove();

	svg.selectAll('rect')
		.data(dataset)
		.enter()
		.append('rect')
		.attr('id', function(d) {
			return d.name.common;
		})
		.attr('x', function(d) {
			start = timeConverter(d.origins.useStart)
			return xScale(start);
		})
		.attr('y', function(d, i) {
			return ((i * 15)+5);
		})
		.attr('fill', function(d) {
			return d.images.primary;
		})
		.attr('height', 10)
		.attr('width', function(d) {
			start = timeConverter(d.origins.useStart);
			end = timeConverter(d.origins.useEnd);
			return xScale(end - start);
		})
		.attr('stroke', function(d) {
			if(d.name.common === 'Lead white') {
				return 'black';
			}
		});
};

d3Timeline.update = function (dataset, width) {

	var w = parseInt(width);

	var xScale = d3.scaleLinear()
		.domain([0, 28])
		.range([0, w - 33]);

	var axisScale= d3.scaleLinear()
		.domain([0, 30])
		.range([-20, w-30]);

	var start,
		end,
		axis= d3.axisBottom(axisScale)
			.ticks(5)
			.tickSizeInner(999);

	d3.select('svg')
		.call(axis)
		.selectAll("text")
		.remove();

	w = width;
	d3.selectAll('rect')
		.data(dataset)
		.attr('x', function(d) {
			start = timeConverter(d.origins.useStart)
			return xScale(start);
		})
		.attr('width', function(d) {
			start = timeConverter(d.origins.useStart);
			end = timeConverter(d.origins.useEnd);
			return xScale(end - start);
		});
}

module.exports = d3Timeline;