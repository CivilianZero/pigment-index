// this is shown after the landing page and is the basic 'index' of pigments
var React = require('react');

var PigmentListItem = require('./PigmentListItem.jsx'),
	pigmentStore = require('../stores/pigmentStore.js');

var PigmentIndex = React.createClass({

	getInitialState() {
		return {
			pigments: pigmentStore.fetch()
		}
	},

	componentWillMount() {
		var _this = this;
		pigmentStore.on('update', function() {
			_this.setState({
				pigments: pigmentStore.get(),
			});
		});
	},

	render() {
		var pigmentList = this.state.pigments.map(function(p){
			return <PigmentListItem 
				key={p.id}
				id={p.id}
				name={p.name.common}
				color={p.images.colorCode}
				/>
		})
		return (
			<section className='pigment-index'>
				<ul>{pigmentList}</ul>
			</section>
		)
	}
});

module.exports = PigmentIndex;