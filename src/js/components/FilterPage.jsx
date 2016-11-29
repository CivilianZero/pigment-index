var React = require('react'),
	$ = require('jquery');

var pigmentStore = require('../stores/pigmentStore.js'),
	d3Colors = require('./d3Colors.js'),
	PigmentSheet = require('./PigmentSheet.jsx');

var PigmentIndex = require('./PigmentIndex.jsx');

var FilterPage = React.createClass({
	
	getInitialState() {
		var pigments = pigmentStore.fetch();
		return {
			pigments: pigments,
			pigmentId: null,
			filteredPigments: pigments
		}
	},

	componentDidMount() {
		var filterList = [],
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
			if(filterList.indexOf(e.target.id) === -1){
				filterList.push(e.target.id);
			} else {
				filterList.splice(filterList.indexOf(e.target.id), 1)
			}

			if (filterList.length === 0) {
				_this.setState({
					filteredPigments: _this.state.pigments
				});
			} else {
				_this.setState({
					filteredPigments: findByColor(...filterList)
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
			pigmentResult,
			d3Bars;

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
		d3Bars = d3Colors.create(colorFamilies, numberOfPigs);

		if(this.state.pigmentId) {
			pigmentResult = <PigmentSheet key={this.state.pigmentId} id={this.state.pigmentId} />;
		}

		return (
			<section>
				<section className='filters'>
					<div className='color-filter'>{d3Bars}</div>
					<div className='timeline-filter'>timeline</div>
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
			pigmentId: e.target.id
		});
	}
});

module.exports = FilterPage;