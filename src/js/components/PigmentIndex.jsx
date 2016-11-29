// this is shown after the landing page and is the basic 'index' of pigments
var React = require('react');

var PigmentListItem = require('./PigmentListItem.jsx');

var PigmentIndex = React.createClass({

	render() {
		var passedClick = this.props.passedClick,
			pigmentList = this.props.pigments.map(function(p){
				return <PigmentListItem 
					key={p.id}
					id={p.id}
					name={p.name.common}
					color={p.images.colorCode}
					passedClick={passedClick}
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