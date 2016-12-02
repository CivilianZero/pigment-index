var React = require('react'),
	$ = require('jquery');

var pigmentStore = require('../stores/pigmentStore.js'),
	d3Colors = require('./d3Colors.js'),
	PigmentSheet = require('./PigmentSheet.jsx'),
	PigmentIndex = require('./PigmentIndex.jsx'),
	TimelineReact = require('./TimelineReact.jsx'),
	Sidebar = require('./Sidebar.jsx'),
	timeConverter = require('./timeConverter.js'),
	filterEverything = require('./filterEverything.js');

var FilterPage = React.createClass({
	
	getInitialState() {
		var pigments = pigmentStore.fetch();
		return {
			pigments: pigments,
			selectPigment: null,
			filteredPigments: pigments,
			timeFilters: [],
			colorFilters: []
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
				timelineBackup: pigmentStore.get()
			});
		});
	},

	componentWillUnmount() {
		pigmentStore.off('update');
	},

	render() {
		var colorFamilies = [],
			numberOfPigs = 0,
			pigmentResult;

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
		}

		return (
			<section className='explore'>
				<Sidebar 
					key={this.state.colorFilters + this.state.timeFilters}
					handler={this.handleRemoveFilter} 
					colors={this.state.colorFilters} 
					time={this.state.timeFilters}/>
				<section className='main-content'>
					<section className='filters'>
						<div className='color-filter'></div>
						<TimelineReact 
							handleTimelineFilter={this.handleTimelineFilter}
							key={this.state.filteredPigments + this.state.timeFilters} 
							pigments={this.state.filteredPigments} />
					</section>
					<section className='search-results'>
						<div className='list-view'>
							<PigmentIndex 
								key={this.state.filteredPigments.length}
								passedClick={this.handleSelect} 
								pigments={this.state.filteredPigments}/>
						</div>
						<div className='map-view'>Here there be dragons</div>
						{pigmentResult}
					</section>
				</section>
			</section>
		)
	},

	handleSelect(e) {
		this.setState({
			selectPigment: pigmentStore.get(e.target.id)
		});
	},

	handleTimelineFilter(e) {
		var cTime = timeConverter(e.target.id);

		$('#' + e.target.id).toggleClass('selected');
		filterEverything.call(this, 'time', cTime)
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