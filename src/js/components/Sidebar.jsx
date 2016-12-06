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
		var sidebarContent,
			_this = this,
			type = 'color-item',
			divColor;

		if (this.state.filterList.length > 0) {
			sidebarContent = this.state.filterList.map(function(value) {
				if (typeof value === 'number') {
					value = timeConverter(value, 'reverse');
					type = 'time-item'
				}
				if(value === 'white') {
					divColor = {
						backgroundColor: value,
						border: '1px solid black'
					};
				} else {
					divColor = {
						backgroundColor: value
					};
				}
				return <li 
					key={value} 
					className={type}>
					<img
						onClick={_this.props.handler}
						id={value} 
						src='assets/icons/clear_button.svg'/>
						<div style={divColor}></div>
						{value}
					</li>;
			})
		} else {
			sidebarContent = <div>
								<p>Since before recorded history, humans have been 
									producing colors from natural origins. Through the years, 
									artists and scientists have continued to develop pigments 
									and dyes from an increasing number of sources, 
									and through ever evolving methods.</p>
								<p className='directions'>Use Filter By Color to narrow 
									your search by color and Filter By Period to narrow 
									your search by period of discovery</p>
							</div>
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