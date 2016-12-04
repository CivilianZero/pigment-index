var React = require('react');

var SidebarPigmentSheet = React.createClass({
	getInitialState() {
		return{
			pigment: this.props.pigment
		}
	},

	render() {
		var p = this.state.pigment,
			etymology = p.name.etym !== '' ? <li><span>Etymology:</span> {p.name.etym}</li> : null,
			altName = p.name.altNames !== '' ? <li><span>Other Names:</span> {p.name.altNames}</li> : null,
			source = p.origins.source !== '' ? <li><span>Source:</span> {p.origins.source}</li> : null,
			useStart = p.origins.useStart !== '' ? <li><span>Discovery:</span> {p.origins.useStart}</li> : null,
			useEnd = p.origins.useEnd !== '' ? <li><span>End of use:</span> {p.origins.useEnd}</li> : null,
			style = p.name.common === 'Lead white' ? {
				'backgroundColor': p.images.primary, 
				'border': '1px solid black'
				} : 
				{
					'backgroundColor': p.images.primary
				};

		return(
			<section className='sidebar-sheet'>
				<section className='basic-info'>
					<h1>{p.name.common}</h1>
					<div style={style} className='sidebar-color'></div>
					<ul>
						{etymology}
						{altName}
						{source}
						{useStart}
						{useEnd}
					</ul>
					<button onClick={this.props.handleBack}>Go Back</button>
				</section>
			</section>
		);
	}
});

module.exports = SidebarPigmentSheet;