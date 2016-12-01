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

	// componentWillUnmount() {
	//     d3Timeline.destroy();
	// }

	render() {
		return <div className='timeline-filter'></div>
	}
});

module.exports = TimelineReact;