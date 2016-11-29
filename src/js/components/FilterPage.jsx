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
			pigmentResult,
			d3Bars;

		var filterColor = function(value) {
			var color = value.colorFamily,
				colorObj = {"color":'', "number":0};
			if (colorFamilies.find(function(value) {
				return value.color === color;
			})) {
				colorObj = colorFamilies.find(function(value) {
					return value.color === color;
				})
				colorObj.number++;
			} else {
				colorObj.color = color;
				colorObj.number++;
				colorFamilies.push(colorObj)
			}
			numberOfPigs++;
		};
		this.state.pigments.forEach(filterColor);
		d3Bars = d3Colors.create(colorFamilies, numberOfPigs);

		if(this.state.pigmentId) {
			pigmentResult = <PigmentSheet key={this.state.pigmentId} id={this.state.pigmentId} />;
		}
		return (
			<section>
				<section className='filters'>
					<div className='color-filter'>{d3Bars}</div>
					<div className='timeline-filter'>timeline</div>
				</section>
				<section className='search-results'>
					<div className='list-view'>
						<PigmentIndex passedClick={this.handleSelect} pigments={this.state.pigments}/>
					</div>
					<div className='map-view'>Here there be dragons</div>
					{pigmentResult}
				</section>
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