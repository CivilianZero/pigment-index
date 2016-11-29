var d3 = require('d3');

var d3Colors = [];

d3Colors.create = function(dataset) {
	var barPadding = 1;
	d3.select('body').selectAll('div')
        .data(dataset)
        .enter()
        .append('div')
        .attr({
            'class': 'bar',
            'id': function(d) {
                return d.color
            }
        })
        .style('width', function(d) {
            return (d.number / numberOfPigs) * 100 - barPadding + '%';
        });
};

module.exports = d3Colors;