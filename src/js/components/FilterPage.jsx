var React = require('react');

var pigmentStore = require('../stores/pigmentStore.js'),
	dsColors = require('./d3Colors.js');

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
		var filteredPigments = this.state.pigments;
		return (
			<section>
				<div className='color-filter'>color</div>
				<div className='timeline-filter'>timeline</div>
				<div className='list-view'>
					<PigmentIndex passedClick={this.handleSelect} pigments={filteredPigments}/>
				</div>
				<div className='map-view'>Here there be dragons</div>
				<PigmentSheet />
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