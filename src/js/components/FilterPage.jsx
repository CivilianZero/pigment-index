var React = require('react'),
	$ = require('jquery');

var pigmentStore = require('../stores/pigmentStore.js'),
	d3Colors = require('./d3Colors.js'),
	PigmentSheet = require('./PigmentSheet.jsx'),
	PigmentIndex = require('./PigmentIndex.jsx'),
	TimelineReact = require('./TimelineReact.jsx');

var FilterPage = React.createClass({
	
	getInitialState() {
		var pigments = pigmentStore.fetch();
		return {
			pigments: pigments,
			selectPigment: null,
			filteredPigments: pigments,
			timeFilters: null,
		}
	},

	componentDidMount() {
		var colorFilterList = [],
			_this = this;

		var findByColor = function (p1, p2, p3, p4, p5, p6, p7, p8) {
			return _this.state.pigments.filter(function (p) {
				return p.colorFamily === p1 ||
					p.colorFamily === p2 ||
					p.colorFamily === p3 ||
					p.colorFamily === p4 ||
					p.colorFamily === p5 ||
					p.colorFamily === p6 ||
					p.colorFamily === p7 ||
					p.colorFamily === p8;
			});
		}

		$('.color-filter').on('click', '.bar', function(e) {
			$(e.target).toggleClass('selected');
			if(colorFilterList.indexOf(e.target.id) === -1){
				colorFilterList.push(e.target.id);
			} else {
				colorFilterList.splice(colorFilterList.indexOf(e.target.id), 1)
			}

			if (colorFilterList.length === 0) {
				_this.setState({
					filteredPigments: _this.state.pigments
				});
			} else {
				_this.setState({
					filteredPigments: findByColor(...colorFilterList)
				});
			}
		});
	},

	componentWillMount() {
		var _this = this;
		pigmentStore.on('update', function() {
			_this.setState({
				pigments: pigmentStore.get(),
				filteredPigments: pigmentStore.get()
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
		d3Colors.create(colorFamilies, numberOfPigs);

		if(this.state.selectPigment) {
			pigmentResult = <PigmentSheet 
				key={this.state.selectPigment.id}
				pigment={this.state.selectPigment} 
				id={this.state.selectPigment.id} />;
		}

		return (
			<section className='explore'>
				<section className='filters'>
					<div className='color-filter'></div>
					<TimelineReact 
						handleTimelineFilter={this.handleTimelineFilter}
						key={this.state.filteredPigments.length} 
						pigments={this.state.filteredPigments} />
				</section>
				<section className='search-results'>
					<div className='list-view'>
						<PigmentIndex passedClick={this.handleSelect} pigments={this.state.filteredPigments}/>
					</div>
					<div className='map-view'>Here there be dragons</div>
					{pigmentResult}
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
		var time = e.target.id,
			_this = this,
			timePeriods = [
			{'period': 'Prehistoric', 'time': 0},
			{'period': 'Ancient', 'time': 5},
			{'period': 'Middle Ages', 'time': 10},
			{'period': 'Early Modern', 'time': 15},
			{'period': 'Industrial', 'time': 20},
			{'period': 'Contemporary', 'time': 25},
			{'period': '', 'time': 30}
		];

		var convertTime = function(use) {
			let convertedTime;
			timePeriods.forEach(function(value) {
				if(use === value.period) {
					convertedTime = value.time
				}
			});
			return convertedTime
		};

		console.log('Time: ' + convertTime(time));

		var findByTime = function(time) {
			let newTime = convertTime(time);
			return _this.state.filteredPigments.filter(function(p) {
				let start = convertTime(p.origins.useStart),
					end = convertTime(p.origins.useEnd);
					console.log('start: ' + start + ' end: ' + end);
				if (start <= newTime && newTime <= end) {
					console.log('pigment: ' + p);
					return p
				}
			})
		};

		this.setState({
			filteredPigments: findByTime(time)
		});
		console.log('click ran, filteredPigments: ' + this.state.filteredPigments);
	}
});

module.exports = FilterPage;