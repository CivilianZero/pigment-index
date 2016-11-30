var d3 = require('d3');

var d3Timeline = {};

d3Timeline.create = function(dataset) {
	var w = 750,
		start,
		end,
		maxX = 0,
		maxY = 0;

	var timePeriods = [
		{'period': 'Prehistoric', 'time': 0},
		{'period': 'Ancient', 'time': 5},
		{'period': 'Middle Ages', 'time': 10},
		{'period': 'Early Modern', 'time': 15},
		{'period': 'Industrial', 'time': 20},
		{'period': 'Contemporary', 'time': 25},
		{'period': '', 'time': 30}
	]

	var convertTime = function(use) {
		var time;
		timePeriods.forEach(function(value) {
			if(use === value.period) {
				time = value.time
			}
		});
		return time
	}

	var timeBegin = d3.min(dataset, function(d) {
		return convertTime(d.origins.useStart)
	});
	var timeEnd = d3.max(dataset, function(d) {
		return convertTime(d.origins.useEnd)
	})

	var xScale = d3.scaleLinear()
		.domain([timeBegin, timeEnd])
		.range([0, w]);

	for (var i = 0; i < dataset.length; i++) {
		let tempX, 
			tempY,
			start = convertTime(dataset[i].origins.useStart),
			end = convertTime(dataset[i].origins.useEnd),
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
		.attr('width', maxX);

	svg.selectAll('rect')
		.data(dataset)
		.enter()
		.append('rect')
		.attr('id', function(d) {
			return d.name.common;
		})
		.attr('x', function(d) {
			start = convertTime(d.origins.useStart)
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
			start = convertTime(d.origins.useStart);
			end = convertTime(d.origins.useEnd);
			return xScale(end - start);
		});
};

module.exports = d3Timeline;