var React = require('react');

var d3Timeline = require('./d3Timeline');

var TimelineReact = React.createClass({

	getInitialState() {
		return {
			filteredPigments: this.props.pigments
		}
	},

	componentDidMount() {
		d3Timeline.create(this.state.filteredPigments);
	},

	render() {
		return (
			<section>
				<div onClick={this.props.handleTimelineFilter} className='timeline-buttons'>
					<button id={'Prehistoric'}>Prehistoric</button>
					<button id={'Ancient'}>Ancient</button>
					<button id={'Middle Ages'}>Middle Ages</button>
					<button id={'Early Modern'}>Early Modern</button>
					<button id={'Industrial'}>Industrial</button>
					<button id={'Contemporary'}>Contemporary</button>
				</div>
				<div className='timeline-filter'></div>
			</section>
		)
	}
});

module.exports = TimelineReact;