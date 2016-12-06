var React = require('react'),
	$ = require('jquery'),
	TweenMax = require('gsap');

var pigmentStore = require('../stores/pigmentStore.js'),
	d3Colors = require('./d3Colors.js'),
	PigmentSheet = require('./PigmentSheet.jsx'),
	PigmentIndex = require('./PigmentIndex.jsx'),
	TimelineReact = require('./TimelineReact.jsx'),
	Sidebar = require('./Sidebar.jsx'),
	timeConverter = require('./timeConverter.js'),
	filterEverything = require('./filterEverything.js'),
	SidebarPigmentSheet = require('./SidebarPigmentSheet.jsx');

var FilterPage = React.createClass({
	
	getInitialState() {
		var pigments = pigmentStore.fetch();
		return {
			pigments: pigments,
			selectPigment: null,
			filteredPigments: pigments,
			timeFilters: [],
			colorFilters: [],
			hideTime: true,
			hideColor: true
		}
	},

	componentDidMount() {
		var _this = this;

		$('.color-filter').on('click', '.bar', function(e) {
			$(e.target).toggleClass('selected');

			filterEverything.call(_this, 'color', e.target.id);
		});
	},

	componentWillMount() {
		var _this = this;
		pigmentStore.on('update', function() {
			_this.setState({
				pigments: pigmentStore.get(),
				filteredPigments: pigmentStore.get(),
				colorBackup: pigmentStore.get(),
				timelineBackup: pigmentStore.get(),
				selectPigment: null
			});
		});
	},

	componentWillUnmount() {
		pigmentStore.off('update');
	},

	render() {

		var colorFamilies = [],
			numberOfPigs = 0,
			sidebar,
			pigmentResult,
			buttonsButtons;

		var makesTheColorBars = function(value) {
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
		
		this.state.pigments.forEach(makesTheColorBars);
		d3Colors.create(colorFamilies, numberOfPigs);

		if(this.state.selectPigment) {
			pigmentResult = <PigmentSheet 
				key={this.state.selectPigment.id}
				pigment={this.state.selectPigment} 
				id={this.state.selectPigment.id} />;
			sidebar = <SidebarPigmentSheet
				key={this.state.selectPigment.id}
				pigment={this.state.selectPigment}/>;
			buttonsButtons = <div className='show-hide'>
					<button className='back-button' onClick={this.handleBack}>&lt; Back To Pigments</button>
			</div>
		} else {
			pigmentResult = (
					<PigmentIndex 
						key={this.state.filteredPigments.length}
						passedClick={this.handleSelect} 
						pigments={this.state.filteredPigments}/>
			);
			sidebar = <Sidebar
				showSheet={this.state.selectPigment}
				key={this.state.colorFilters + this.state.timeFilters}
				handler={this.handleRemoveFilter} 
				colors={this.state.colorFilters} 
				time={this.state.timeFilters}/>
			buttonsButtons = <div className='show-hide'>
				<button
					className={'desktop-buttons'}
					onClick={this.handleHide} 
					id='show-color'>Filter By Color</button>
				<button
					className={'desktop-buttons'}
					onClick={this.handleHide}
					id='show-time'>Filter By Period</button>
			</div>
		}

		if (this.state.hideTime && this.state.hideColor) {
			$('div.bar, .color-filter, .time-filter').addClass('hidden');
			$('#collapse-color').addClass('hidden');
		} else if (this.state.hideColor) {
			$('div.bar, .color-filter').addClass('hidden');
			$('#collapse-color').addClass('hidden');
			$('.time-filter').removeClass('hidden');
		} else if (this.state.hideTime) {
			$('.time-filter').addClass('hidden');
			$('div.bar, .color-filter').removeClass('hidden');
			$('#collapse-color').removeClass('hidden');
		}

		return (
			<section className='explore'>
				{sidebar}
				<section className='main-content'>
					<section className='search-results'>
						{buttonsButtons}
						<section className='filters'>
							<div className='filterShow'>
								<div className='color-filter'></div>
								<button 
									id = 'collapse-color'
									onClick={this.handleHide}>collapse
								</button>
							</div>
							<TimelineReact
								collapse={this.handleHide}
								hideThis={this.state.hideTime}
								handleTimelineFilter={this.handleTimelineFilter}
								key={this.state.filteredPigments + this.state.timeFilters} 
								pigments={this.state.filteredPigments} />
						</section>
						<div className='list-view'>
							{pigmentResult}
						</div>
					</section>
				</section>
			</section>
		)
	},

	handleHide(e) {
		if (e.target.id === 'show-color' || 
			e.target.id === 'collapse-color') {
				this.setState({
					hideColor: !this.state.hideColor,
					hideTime: true
				});
		} 
		if (e.target.id === 'show-time' || 
			e.target.id === 'collapse-time' || 
			e.target.id === 'collapse-time-mobile') {
				this.setState({
					hideTime: !this.state.hideTime,
					hideColor: true
				});
		}
	},

	handleBack() {
		this.setState({
			selectPigment: null,
		})
	},

	handleSelect(e) {
		this.setState({
			selectPigment: pigmentStore.get(e.target.id),
			hideTime: true,
			hideColor: true
		});
	},

	handleTimelineFilter(e) {
		var cTime = timeConverter(e.target.id);

		filterEverything.call(this, 'time', cTime);
	},

	handleRemoveFilter(e) {
		var colorFilters = this.state.colorFilters,
			timeFilters = this.state.timeFilters;

		$('div#' + e.target.id).removeClass('selected');
		if (colorFilters.indexOf(e.target.id) > -1){
			filterEverything.call(this, 'color', e.target.id);
		}
		if (timeFilters.indexOf(timeConverter(e.target.id)) > -1){
			filterEverything.call(this, 'time', timeConverter(e.target.id));
		}
	}
});

module.exports = FilterPage;