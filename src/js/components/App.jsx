// this has the nav bar
var React = require('react'),
	Link  = require('react-router').Link;

function getActiveClass(path) {
	var current = window.location.hash.slice(1);
	return current === path?'active':'';
}

var App = React.createClass({
	
	getInitialState() {
		return {
			reveal: false
		}
	},

	render() {
		var devTools,
			_this = this;
		document.onkeydown = function(e) {
			e = e || window.event;
			if (e.ctrlKey && e.keyCode == 72) {
				_this.setState({
					reveal: !_this.state.reveal
				});
			}
		};
		if (this.state.reveal) {
			devTools = <Link to='/devTools' className={getActiveClass('/devTools')}>Enter Data</Link>;
		}
		return (
			<div>
				<header>
					<nav>
						<Link to='/' className={getActiveClass('/')}>Home</Link>
						{devTools}
						<Link to='/about' className={getActiveClass('/about')}>About</Link>
					</nav>	
				</header>
				<main>
					{this.props.children}
				</main>
				<footer>
					<nav>
						<Link to='/' className={getActiveClass('/')}>Home</Link>
						{devTools}
						<Link to='/about' className={getActiveClass('/about')}>About</Link>
					</nav>
				</footer>
			</div>
		)
	}
});

module.exports = App;