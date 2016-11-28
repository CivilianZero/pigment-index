var React = require('react');

var pigmentStore = require('../stores/pigmentStore.js'),
	dsColors = require('./d3Colors.js'),
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
		var filteredPigments = this.state.pigments,
			pigmentResult;
		if(this.state.pigmentId) {
			pigmentResult = <PigmentSheet id={this.state.pigmentId} />;
		}
		return (
			<section>
				<div className='color-filter'>color</div>
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