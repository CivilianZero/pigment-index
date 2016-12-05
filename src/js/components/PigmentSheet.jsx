// this is the individual information page for each pigment
var React = require('react');

var PigmentSheet = React.createClass({

	getInitialState() {
		return{
			pigment: this.props.pigment
		}
	},

	render() {
		var pigment = this.state.pigment;

		if (pigment.origins.sourceDescript) {
			var pigmentSource = <section>
									<div className='info'>
									<h1>Source</h1>
									<p>{pigment.origins.sourceDescript}</p>
									</div>
									<img src={pigment.images.sourceImg}/>
								</section>
		}

		if (pigment.origins.production) {
			if (pigment.images.prodImg) {
				var prodImg = <img src={pigment.images.prodImg}/>
			}
			var pigmentProd = <section>
									{prodImg}
									<div className='info'>
									<h1>Manufacture</h1>
									<p>{pigment.origins.production}</p>
									</div>
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
					<img src={pigment.images.pigImg}/>
					<div className='info'>
					<h1>Description</h1>
					<p>{pigment.descript}</p>
					</div>
				</section>
				{pigmentQuote}
				{pigmentSource}
				{pigmentProd}	
			</div>
		)
	}
});

module.exports = PigmentSheet;