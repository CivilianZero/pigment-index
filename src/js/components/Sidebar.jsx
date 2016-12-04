var React = require('react');

var timeConverter = require('./timeConverter.js'),
	SidebarPigmentSheet = require('./SidebarPigmentSheet.jsx');

var Sidebar = React.createClass({

	getInitialState() {
		var newFiterList = this.props.colors.concat(this.props.time);
		return{
			filterList: newFiterList,
		}
	},

	render() {
		var sidebarContent,
			_this = this,
			type = 'color-item';

		if (this.props.showSheet) {
			sidebarContent = <SidebarPigmentSheet
				key={this.props.showSheet.id}
				pigment={this.props.showSheet}/>;
		} else if (this.state.filterList.length > 0) {
			sidebarContent = this.state.filterList.map(function(value) {
				if (typeof value === 'number') {
					value = timeConverter(value, 'reverse');
					type = 'time-item'
				}
				return <li 
					key={value} 
					className={type}>
					<img
						onClick={_this.props.handler}
						id={value} 
						src='assets/icons/clear_button.svg'/>
						{value}
					</li>;
			})
		} else {
			sidebarContent = <p>This is a paragraph with some words lorem ipsum is for people who</p>
		}
		return (
			<section className='sidebar'>
				<h1>Explore</h1>
				<ul className='filter-list'>
					{sidebarContent}
				</ul>
			</section>
		)
	}
});

module.exports = Sidebar;