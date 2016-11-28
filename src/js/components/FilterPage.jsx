var React = require('react');

var pigmentStore = require('../stores/pigmentStore.js'),
	dsColors = require('./d3Colors.js');

var PigmentIndex = require('./PigmentIndex.jsx');

var FilterPage = React.createClass({
	
	getInitialState() {
		return {
			pigments: pigmentStore.fetch()
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
		var filteredPigments = this.state.pigments;
		return (
			<section>
				<div className='color-filter'></div>
				<div className='timeline-filter'></div>
				<div className='list-view'>
					<PigmentIndex pigments={filteredPigments}/>
				</div>
				<div className='map-view'>Here there be dragons</div>
			</section>
		)
	}
});

module.exports = FilterPage;