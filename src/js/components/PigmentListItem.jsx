var React = require('react'),
	Link = require('react-router').Link;

var PigmentListItem = React.createClass({

	render() {
		var divColor = {
			backgroundColor: this.props.color
		}
		return(
			<li onClick={this.props.passedClick} id={this.props.id} style={divColor}>
				<img src={this.props.icon}/>
				{this.props.name}
			</li>
		)
	}
});

module.exports = PigmentListItem;