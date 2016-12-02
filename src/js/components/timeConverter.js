var timeConverter = function(period, reverse) {
	let timePeriods = [
				{'period': 'Prehistoric', 'time': 0},
				{'period': 'Ancient', 'time': 5},
				{'period': 'Middle Ages', 'time': 10},
				{'period': 'Early Modern', 'time': 15},
				{'period': 'Industrial', 'time': 20},
				{'period': 'Contemporary', 'time': 25},
				{'period': '', 'time': 30}
			],
		convertedTime;

	if(reverse === 'reverse') {
		timePeriods.forEach(function(value) {
			if(period === value.time) {
				convertedTime = value.period
			}
		});
		return convertedTime;
	} else {
		timePeriods.forEach(function(value) {
			if(period === value.period) {
				convertedTime = value.time
			}
		});
		return convertedTime;
	}
};

module.exports = timeConverter;