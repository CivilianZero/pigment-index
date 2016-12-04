// this is the individual information page for each pigment
var React = require('react');

var pigmentStore = require('../stores/pigmentStore.js');

var PigmentSheet = React.createClass({

	getInitialState() {
		// var pigment = this.props.pigment
		return{
			pigment: this.props.pigment
		}
	},

	render() {
		var pigment = this.state.pigment;

		if (pigment.origins.sourceDescript) {
			var pigmentSource = <section>
									<h1>Source</h1>
									<p>{pigment.origins.sourceDescript}</p>
								</section>
		}

		if (pigment.origins.production) {
			if (pigment.images.prodImg) {
				var prodImg = <img src={pigment.images.prodImg}/>
			}
			var pigmentProd = <section>
									<h1>Manufacture</h1>
									<p>{pigment.origins.production}</p>
								</section>
		}

		if (pigment.anecdote) {
			var pigmentQuote = <div className='quote'>
									<p>{pigment.anecdote}</p>
								</div>
		}

		return(
			<div className='pigment-sheet'>
				<section>
					<h1>Description</h1>
					<p>{pigment.descript}</p>
				</section>
				{pigmentQuote}
				{pigmentSource}
				{pigmentProd}	
			</div>
		)
	}
});

module.exports = PigmentSheet;