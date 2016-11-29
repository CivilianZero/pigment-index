var React = require('react');

var pigmentStore = require('../stores/pigmentStore.js'),
	d3Colors = require('./d3Colors.js'),
	PigmentSheet = require('./PigmentSheet.jsx');

var PigmentIndex = require('./PigmentIndex.jsx');

var FilterPage = React.createClass({
	
	getInitialState() {
		return {
			pigments: pigmentStore.fetch(),
			pigmentId: null
		}
	},

	componentWillMount() {
		var _this = this;
		pigmentStore.on('update', function() {
			_this.setState({
				pigments: pigmentStore.get()
			});
		});
	},

	componentWillUnmount() {
		pigmentStore.off('update');
	},

	render() {
		var colorFamilies = [],
			numberOfPigs = 0,
			filteredPigments = this.state.pigments,
			pigmentResult,
			d3Bars;

		var filterColor = function(value) {
			var color = value.colorFamily,
				colorObj = {"color":'', "number":0};
			if(colorFamilies[0]) {
				colorFamilies.forEach(function(value) {
					if (value.color === color) {
						value.number++;
					} else {
						colorObj.color = color;
						colorObj.number++;
						colorFamilies.push(colorObj)
					}
				});
			} else {
				colorObj.color = color;
				colorObj.number++;
				colorFamilies.push(colorObj)
			}
			numberOfPigs++;
		};
		this.state.pigments.forEach(filterColor);
		if (colorFamilies) {
			d3Bars = d3Colors.create(colorFamilies);
		}

		if(this.state.pigmentId) {
			pigmentResult = <PigmentSheet key={this.state.pigmentId} id={this.state.pigmentId} />;
		}
		return (
			<section>
				<div className='color-filter'>{d3Bars}</div>
				<div className='timeline-filter'>timeline</div>
				<div className='list-view'>
					<PigmentIndex passedClick={this.handleSelect} pigments={filteredPigments}/>
				</div>
				<div className='map-view'>Here there be dragons</div>
				{pigmentResult}
			</section>
		)
	},

	handleSelect(e) {
		this.setState({
			pigmentId: e.target.id
		});
	}
});

module.exports = FilterPage;