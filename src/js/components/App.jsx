var React = require('react');

var Link  =require('react-router').Link;

function getActiveClass(path) {
	var current = window.location.hash.slice(1);
	return current === path?'active':'';
}

var App = React.createClass({
	render() {
		return (
			<div>
				<header>
					<Link to='/' className={getActiveClass('/')}>Home</Link>
					<Link to='/devTools' className={getActiveClass('/devTools')}>Enter Data</Link>
				</header>
				<main>
					<h1>App</h1>
					{this.props.children}
				</main>
			</div>
		)
	}
});

module.exports = App;