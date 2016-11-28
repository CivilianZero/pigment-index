// this is the individual information page for each pigment
var React = require('react');

var pigmentStore = require('../stores/pigmentStore.js');

var PigmentSheet = React.createClass({

	getInitialState() {
		var pigmentId = this.props.id
		return{
			pigmentId: pigmentId,
			pigment: pigmentStore.fetch(pigmentId)
		}
	},

	render() {
		var pigment = this.state.pigment;
		return(
			<div className='pigment-sheet'>
				<section>
					<h1>{pigment.name.common}</h1>
					<p>{pigment.descript}</p>
				</section>
				<section>
					<h1>Source</h1>
					<img src={pigment.images.sourceImg} alt='source' />
					<p></p>
					<img alt='map' />
					<p>A paragraph</p>
				</section>
				<section>
					<h1>Manufacture</h1>
					<img />
					<img />
					<p>A paragraph</p>
				</section>
				<section>
					<h1>Example</h1>
					<p>A paragraph</p>
					<img />
				</section>
			</div>
		)
	}
});

module.exports = PigmentSheet;