var React = require('react'),
	$ = require('jquery');

var d3Timeline = require('./d3Timeline');

var TimelineReact = React.createClass({

	getInitialState() {
		var calcWidth = $('.filters').css('width');
		return {
			filteredPigments: this.props.pigments,
			calcWidth: calcWidth,
			hideThis: this.props.hideThis
		}
	},

	componentDidMount() {
		d3Timeline.create(this.state.filteredPigments, this.state.calcWidth);
		if(this.state.hideThis) {
			$('.time-filter').addClass('hidden')
		}
	},

	componentWillMount() {
		window.addEventListener('resize', this.updateSize);
	},

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateSize);
	},

	render() {
		return (
			<section className={'filterShow time-filter'}>
				<div className='timeline-buttons'>
					<button 
						onClick={this.props.handleTimelineFilter} 
						key={'button-PH'} 
						id={'Prehistoric'}>Prehistoric</button>
					<button 
						onClick={this.props.handleTimelineFilter} 
						key={'button-A'} 
						id={'Ancient'}>Ancient</button>
					<button 
						onClick={this.props.handleTimelineFilter} 
						key={'button-MA'} 
						id={'Middle Ages'}>Middle Ages</button>
					<button 
						onClick={this.props.handleTimelineFilter} 
						key={'button-EA'} 
						id={'Early Modern'}>Early Modern</button>
					<button 
						onClick={this.props.handleTimelineFilter} 
						key={'button-I'} 
						id={'Industrial'}>Industrial</button>
					<button 
						onClick={this.props.handleTimelineFilter} 
						key={'button-C'} 
						id={'Contemporary'}>Contemporary</button>
				</div>
				<div className='timeline-filter'>
					
				</div>
			</section>
		)
	},

	updateSize() {
		this.setState({
			calcWidth: $('.filters').css('width')
		});
		d3Timeline.update(this.state.filteredPigments, this.state.calcWidth);
	}
});

module.exports = TimelineReact;