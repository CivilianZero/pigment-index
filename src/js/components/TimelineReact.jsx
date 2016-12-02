var React = require('react'),
	$ = require('jquery');

var d3Timeline = require('./d3Timeline');

var TimelineReact = React.createClass({

	getInitialState() {
		var calcWidth = $('.filters').css('width')
		return {
			filteredPigments: this.props.pigments,
			calcWidth: calcWidth
		}
	},

	componentDidMount() {
		d3Timeline.create(this.state.filteredPigments, this.state.calcWidth);
	},

	componentWillMount() {
		window.addEventListener('resize', this.updateSize);
	},

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateSize);
	},

	render() {
		return (
			<section id='color-sect' className={'filterShow hidden time-filter'}>
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
	},

	updateSize() {
		this.setState({
			calcWidth: $('#color-sect').css('width')
		});
		d3Timeline.update(this.state.filteredPigments, this.state.calcWidth);
	}
});

module.exports = TimelineReact;