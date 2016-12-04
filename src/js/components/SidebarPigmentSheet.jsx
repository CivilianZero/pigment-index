var React = require('react');

var SidebarPigmentSheet = React.createClass({
	getInitialState() {
		return{
			pigment: this.props.pigment
		}
	},

	render() {
		var p = this.state.pigment,
			etymology = p.name.etym !== '' ? <li>{p.name.etym}</li> : null,
			altName = p.name.altName !== '' ? <li>{p.name.altName}</li> : null,
			source = p.origins.source !== '' ? <li>{p.origins.source}</li> : null,
			useStart = p.origins.useStart !== '' ? <li>{p.origins.useStart}</li> : null,
			useEnd = p.origins.useEnd !== '' ? <li>{p.origins.useEnd}</li> : null,
			style = p.name.common === 'Lead white' ? {
				'backgroundColor': p.images.primary, 
				'border': '1px solid black',
				'height': '50px',
				'width': '50px'
				} : 
				{
					'backgroundColor': p.images.primary,
					'height': '50px',
					'width': '50px'
				};

		return(
			<section className='sidebar-sheet'>
				<div style={style} className='sidebar-color'></div>
				<h1>{p.name.common}</h1>
				<ul>
					{etymology}
					{altName}
					{source}
					{useStart}
					{useEnd}
				</ul>
			</section>
		);
	}
});

module.exports = SidebarPigmentSheet;