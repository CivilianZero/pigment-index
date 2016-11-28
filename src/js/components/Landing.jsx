// this is the landing page which contains introductory information
var React = require('react'),
	Link = require('react-router').Link;

var Landing = React.createClass({

	render() {
		return (
			<section className='Landing'>
				<div>
					<h1>SITE TITLE</h1>
					<p>An explanation of what pigments are and a brief history.
					A description of the site and an overview of the information
					that the user can find within. An explanation of what pigments are
					and a brief history. A description of the site and an overview
					of the information the user can find within.</p>
				</div>
				<button><Link to='/filter'>Explore</Link></button>
				<span>Or</span>
				<button><Link to='/about'>About</Link></button>
			</section>
		)
	}
});

module.exports = Landing;