// this is the landing page which contains introductory information
var React = require('react'),
	Link = require('react-router').Link;

var Landing = React.createClass({

	render() {
		return (
			<section className='Landing'>
				<div>
					<h1>Heading</h1>
					<p></p>
				</div>
				<button><Link to='/pigmentIndex'>Letsa Go!</Link></button>
			</section>
		)
	}
});

module.exports = Landing;