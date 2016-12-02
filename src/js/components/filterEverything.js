var findByWhat = require('./findByWhat.js'),
	timeConverter = require('./timeConverter.js');

var filterEverything = function(what, target) {
	var colorFilterList = this.state.colorFilters,
		timeFilterList = this.state.timeFilters,
		tempList,
		filteredList;

	if (what === 'color') {
		if(colorFilterList.indexOf(target) === -1){
			colorFilterList.push(target);
		} else {
			colorFilterList.splice(colorFilterList.indexOf(target), 1)
		}
	}

	if (what === 'time') {
		if(timeFilterList.indexOf(target) === -1){
			timeFilterList.push(target);
		} else {
			timeFilterList.splice(timeFilterList.indexOf(target), 1)
		}
	}

	if (timeFilterList.length > 0 && colorFilterList.length > 0) {
		tempList = findByWhat('time', this.state.pigments, ...timeFilterList);
		filteredList = findByWhat('color', tempList, ...colorFilterList);
	} else if (colorFilterList.length > 0 && timeFilterList.length === 0) {
		filteredList = findByWhat('color', this.state.pigments, ...colorFilterList);
	} else if (timeFilterList.length > 0 && colorFilterList.length === 0) {
		filteredList = findByWhat('time', this.state.pigments, ...timeFilterList);
	}

	if (timeFilterList.length === 0 && colorFilterList.length === 0) {
		this.setState({
			filteredPigments: this.state.pigments
		});
	} else {
		this.setState({
			filteredPigments: filteredList,
		});
	}
};

module.exports = filterEverything;