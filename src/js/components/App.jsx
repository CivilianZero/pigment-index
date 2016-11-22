// this has the nav bar
var React = require('react'),
	Link  = require('react-router').Link;

function getActiveClass(path) {
	var current = window.location.hash.slice(1);
	return current === path?'active':'';
}

var App = React.createClass({
	
	render() {
		return (
			<div>
				<header>
					<nav>
						<Link to='/' className={getActiveClass('/')}>Home</Link>
						<Link to='/devTools' className={getActiveClass('/devTools')}>Enter Data</Link>
						<Link to='/pigmentIndex' className={getActiveClass('/pigmentIndex')}>Pigments</Link>
					</nav>	
				</header>
				<main>
					{this.props.children}
				</main>
				<footer>
					<nav>
						<Link to='/' className={getActiveClass('/')}>Home</Link>
						<Link to='/devTools' className={getActiveClass('/devTools')}>Enter Data</Link>
						<Link to='/pigmentIndex' className={getActiveClass('/pigmentIndex')}>Pigments</Link>
					</nav>
				</footer>
			</div>
		)
	}
});

module.exports = App;