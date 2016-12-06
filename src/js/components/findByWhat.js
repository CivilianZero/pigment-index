var timeConverter = require('./timeConverter.js');

var findByWhat = function(what, stateChose) {

	var args = Array.prototype.slice.call(arguments);

	if (what === 'color') {
		return stateChose.filter(function (p) {
			return p.colorFamily === args[2] ||
				p.colorFamily === args[3] ||
				p.colorFamily === args[4] ||
				p.colorFamily === args[5] ||
				p.colorFamily === args[6] ||
				p.colorFamily === args[7] ||
				p.colorFamily === args[8] ||
				p.colorFamily === args[9] ||
				p.colorFamily === args[10];
		});
	} 

	if (what === 'time') {
		return stateChose.filter(function(p) {
			let isBetween = false,
				start = timeConverter(p.origins.useStart);
			for (var i = 2; i < args.length; i++) {
				if (start === args[i]) {
					isBetween = true;
					break;
				} else {
					isBetween = false;
				}
			}
			if (isBetween) {
				return p;
			}
		});
	}

}

module.exports = findByWhat;