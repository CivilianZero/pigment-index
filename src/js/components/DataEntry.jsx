var React = require('react'),
	Link = require('react-router').Link;

var pigmentStore = require('../stores/pigmentStore.js'),
	PigmentData = require('./PigmentData.jsx');

var DataEntry = React.createClass({

	getInitialState() {
		return {
			pigments: pigmentStore.fetch(),
			commonValue: '',
			pronuncValue: '',
			etymValue: '',
			altNamesValue: '',
			shortDescriptValue: '',
			descriptValue: '',
			sourceValue: '',
			locationValue: '',
			sourceDescriptValue: '',
			productionValue: '',
			useStartValue: '',
			useEndValue: '',
			anecdoteValue: '',
			iconImgValue: '',
			sourceImgValue: '',
			pigImgValue: '',
			prodImgValue: '',
			primaryValue: '',
			secondaryValue: '',
			tertiaryValue: '',
			quarterValue: '',
			exampleValue: '',
			exTitleValue: '',
			exArtistValue: '',
			exMediumValue: '',
			exDateValue: '',
			exDescriptValue: '',
			colorFamilyValue: ''
		}
	},

	componentWillMount() {
		pigmentStore.on('update', this.handleStoreChange)
	},

	componentWillUnmount() {
		pigmentStore.off('update', this.handleStoreChange)
	},

	render() {
		var links = this.state.pigments.map(function (p) {
            return (
                <li key={p.id}>
                    <Link to={'/devTools/' + p.id}>{p.name.common}</Link>
                </li>
            );
        });
		return (
			<section>
				<input 
					type='text'
					ref='common' 
					value={this.state.commonValue} 
					placeholder='common' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='pronunc' 
					value={this.state.pronuncValue} 
					placeholder='pronunc' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='etym' 
					value={this.state.etymValue} 
					placeholder='etym'
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='altNames' 
					value={this.state.altNamesValue} 
					placeholder='altNames' 
					onChange={this.handleChange} />
				<textarea 
					ref='shortDescript' 
					value={this.state.shortDescriptValue} 
					placeholder='shortDescript' 
					onChange={this.handleChange} />
				<textarea 
					ref='descript' 
					value={this.state.descriptValue} 
					placeholder='descript' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='source' 
					value={this.state.sourceValue} 
					placeholder='source' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='location' 
					value={this.state.locationValue} 
					placeholder='location' 
					onChange={this.handleChange} />
				<textarea 
					type='text'
					ref='sourceDescript' 
					value={this.state.sourceDescriptValue} 
					placeholder='sourceDescript' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='production' 
					value={this.state.productionValue} 
					placeholder='production' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='useStart' 
					value={this.state.useStartValue} 
					placeholder='useStart' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='useEnd' 
					value={this.state.useEndValue} 
					placeholder='useEnd' 
					onChange={this.handleChange} />
				<textarea 
					ref='anecdote' 
					value={this.state.anecdoteValue} 
					placeholder='anecdote' 
					onChange={this.handleChange} />
				<input 
					ref='iconImg' 
					value={this.state.iconImgValue} 
					placeholder='iconImg' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='sourceImg' 
					value={this.state.sourceImgValue} 
					placeholder='sourceImg' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='pigImg' 
					value={this.state.pigImgValue} 
					placeholder='pigImg' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='prodImg' 
					value={this.state.prodImgValue} 
					placeholder='prodImg' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='primary' 
					value={this.state.primaryValue} 
					placeholder='primary' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='secondary' 
					value={this.state.secondaryValue} 
					placeholder='secondary' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='tertiary' 
					value={this.state.tertiaryValue} 
					placeholder='tertiary' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='quarter' 
					value={this.state.quarterValue} 
					placeholder='quarter' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='example' 
					value={this.state.exampleValue} 
					placeholder='example' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='exTitle' 
					value={this.state.exTitleValue} 
					placeholder='exTitle' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='exArtist' 
					value={this.state.exArtistValue} 
					placeholder='exArtist' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='exMedium' 
					value={this.state.exMediumValue} 
					placeholder='exMedium' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='exDate' 
					value={this.state.exDateValue} 
					placeholder='exDate' 
					onChange={this.handleChange} />
				<textarea 
					ref='exDescript' 
					value={this.state.exDescriptValue} 
					placeholder='exDescript' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='colorFamily' 
					value={this.state.colorFamilyValue} 
					placeholder='colorFamily' 
					onChange={this.handleChange} />
				<button onClick={this.handleClick}>Submit</button>
				<ul>{links}</ul>
			</section>
		)
	},

	handleClick() {
		if(
			this.state.commonValue,
			this.state.shortDescriptValue,
			this.state.descriptValue,
			this.state.sourceValue,
			this.state.sourceDescriptValue,
			this.state.useStartValue,
			this.state.useEndValue,
			this.state.iconImgValue,
			this.state.sourceImgValue,
			this.state.pigImgValue
		) 
		{
			pigmentStore.add(
				this.state.commonValue,
				this.state.pronuncValue,
				this.state.etymValue,
				this.state.altNamesValue,
				this.state.shortDescriptValue,
				this.state.descriptValue,
				this.state.sourceValue,
				this.state.locationValue,
				this.state.sourceDescriptValue,
				this.state.productionValue,
				this.state.useStartValue,
				this.state.useEndValue,
				this.state.anecdoteValue,
				this.state.iconImgValue,
				this.state.sourceImgValue,
				this.state.pigImgValue,
				this.state.prodImgValue,
				this.state.primaryValue,
				this.state.secondaryValue,
				this.state.tertiaryValue,
				this.state.quarterValue,
				this.state.exampleValue,
				this.state.exTitleValue,
				this.state.exArtistValue,
				this.state.exMediumValue,
				this.state.exDateValue,
				this.state.exDescriptValue,
				this.state.colorFamilyValue
			)
			this.setState({
				commonValue: '',
				pronuncValue: '',
				etymValue: '',
				altNamesValue: '',
				shortDescriptValue: '',
				descriptValue: '',
				sourceValue: '',
				locationValue: '',
				sourceDescriptValue: '',
				productionValue: '',
				useStartValue: '',
				useEndValue: '',
				anecdoteValue: '',
				iconImgValue: '',
				sourceImgValue: '',
				pigImgValue: '',
				prodImgValue: '',
				primaryValue: '',
				secondaryValue: '',
				tertiaryValue: '',
				quarterValue: '',
				exampleValue: '',
				exTitleValue: '',
				exArtistValue: '',
				exMediumValue: '',
				exDateValue: '',
				exDescriptValue: '',
				colorFamilyValue: ''
			});
		} else {
			alert('You missed something essential');
		}
	},

	handleChange() {
		this.setState({
			commonValue: this.refs.common.value,
			pronuncValue: this.refs.pronunc.value,
			etymValue: this.refs.etym.value,
			altNamesValue: this.refs.altNames.value,
			shortDescriptValue: this.refs.shortDescript.value,
			descriptValue: this.refs.descript.value,
			sourceValue: this.refs.source.value,
			locationValue: this.refs.location.value,
			sourceDescriptValue: this.refs.sourceDescript.value,
			productionValue: this.refs.production.value,
			useStartValue: this.refs.useStart.value,
			useEndValue: this.refs.useEnd.value,
			anecdoteValue: this.refs.anecdote.value,
			iconImgValue: this.refs.iconImg.value,
			sourceImgValue: this.refs.sourceImg.value,
			pigImgValue: this.refs.pigImg.value,
			prodImgValue: this.refs.prodImg.value,
			primaryValue: this.refs.primary.value,
			secondaryValue: this.refs.secondary.value,
			tertiaryValue: this.refs.tertiary.value,
			quarterValue: this.refs.quarter.value,
			exampleValue: this.refs.example.value,
			exTitleValue: this.refs.exTitle.value,
			exArtistValue: this.refs.exArtist.value,
			exMediumValue: this.refs.exMedium.value,
			exDateValue: this.refs.exDate.value,
			exDescriptValue: this.refs.exDescript.value,
			colorFamilyValue: this.refs.colorFamily.value
		});
	},

	handleStoreChange: function () {
        this.setState({
            pigments: pigmentStore.get()
        });
    },
});

module.exports = DataEntry;