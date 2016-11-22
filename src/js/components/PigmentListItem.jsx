var React = require('react'),
	Link = require('react-router').Link;

var PigmentListItem = React.createClass({

	render() {
		var divColor = {
			backgroundColor: this.props.color
		}
		return(
			<li style={divColor}>
				<Link to={'/pigmentIndex/' + this.props.id}>{this.props.name}</Link>
			</li>
		)
	}
});

module.exports = PigmentListItem;