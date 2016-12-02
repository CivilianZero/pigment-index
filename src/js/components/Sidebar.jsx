var React = require('react');

var timeConverter = require('./timeConverter.js');

var Sidebar = React.createClass({

	getInitialState() {
		var newFiterList = this.props.colors.concat(this.props.time);
		return{
			filterList: newFiterList,
		}
	},

	render() {
		var filterListItems,
			_this = this,
			type = 'color-item';
		if (this.state.filterList.length > 0) {
			filterListItems = this.state.filterList.map(function(value) {
				if (typeof value === 'number') {
					value = timeConverter(value, 'reverse');
					type = 'time-item'
				}
				return <li 
					key={value} 
					className={type}
					onClick={_this.props.handler} 
					><img id={value} src='assets/icons/clear_button.svg'/>{value}</li>;
			})
		} else {
			filterListItems = <p>This is a paragraph with some words lorem ipsum is for people who</p>
		}
		return (
			<section className='sidebar'>
				<h1>Explore</h1>
				<ul className='filter-list'>
					{filterListItems}
				</ul>
			</section>
		)
	}
});

module.exports = Sidebar;