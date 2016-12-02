var d3 = require('d3');

var timeConverter = require('./timeConverter.js');

var d3Timeline = {};

d3Timeline.create = function(dataset, width) {
	var w = width,
		start,
		end,
		maxX = 0,
		maxY = 0;

	var timeBegin = d3.min(dataset, function(d) {
		return timeConverter(d.origins.useStart)
	});
	var timeEnd = d3.max(dataset, function(d) {
		return timeConverter(d.origins.useEnd)
	})

	var xScale = d3.scaleLinear()
		.domain([timeBegin, timeEnd])
		.range([0, w]);

	for (var i = 0; i < dataset.length; i++) {
		let tempX, 
			tempY,
			start = timeConverter(dataset[i].origins.useStart),
			end = timeConverter(dataset[i].origins.useEnd),
			x = xScale(start),
			y = i * 15;

		tempX = x + xScale(end - start);
		tempY = y + 10;
	
		if ( tempX >= maxX ) { 
			maxX = tempX; 
		}
		if ( tempY >= maxY ) { 
			maxY = tempY; 
		}

	}

	var svg = d3.select('.timeline-filter')
		.append('svg')
		.attr('height', maxY)
		.attr('width', '100%');

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
			return (i * 15);
		})
		.attr('fill', function(d) {
			return d.images.primary;
		})
		.attr('height', 10)
		.attr('width', function(d) {
			start = timeConverter(d.origins.useStart);
			end = timeConverter(d.origins.useEnd);
			return xScale(end - start);
		});
};

d3Timeline.update = function (dataset, width) {

	var timeBegin = d3.min(dataset, function(d) {
		return timeConverter(d.origins.useStart)
	});
	var timeEnd = d3.max(dataset, function(d) {
		return timeConverter(d.origins.useEnd)
	})

	var w = width;

	var xScale = d3.scaleLinear()
		.domain([timeBegin, timeEnd])
		.range([0, w]);

	var start,
		end;

	var resize = function () {
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
	};

	resize();
}

module.exports = d3Timeline;