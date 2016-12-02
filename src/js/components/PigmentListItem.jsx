var React = require('react'),
	Link = require('react-router').Link;

var PigmentListItem = React.createClass({

	render() {
		var divColor = {
			backgroundColor: this.props.color
		}
		return(
			<li onClick={this.props.passedClick} id={this.props.id} style={divColor}>
				<img id={this.props.id} src={this.props.icon}/>
				<div id={this.props.id}>{this.props.name}</div>
			</li>
		)
	}
});

module.exports = PigmentListItem;