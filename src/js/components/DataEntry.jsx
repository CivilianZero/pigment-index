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
			descriptValue: '',
			sourceValue: '',
			locationValue: '',
			productionValue: '',
			useStartValue: '',
			useEndValue: '',
			anecdoteValue: '',
			iconImgValue: '',
			sourceImgValue: '',
			pigImgValue: '',
			colorCodeValue: '',
			exampleValue: ''
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
					ref='colorCode' 
					value={this.state.colorCodeValue} 
					placeholder='colorCode' 
					onChange={this.handleChange} />
				<input 
					type='text'
					ref='example' 
					value={this.state.exampleValue} 
					placeholder='example' 
					onChange={this.handleChange} />
				<button onClick={this.handleClick}>Submit</button>
				<ul>{links}</ul>
			</section>
		)
	},

	handleClick() {
		if(
			this.state.commonValue,
			this.state.descriptValue,
			this.state.sourceValue,
			this.state.productionValue,
			this.state.useStartValue,
			this.state.useEndValue,
			this.state.iconImgValue,
			this.state.sourceImgValue,
			this.state.pigImgValue,
			this.state.colorCodeValue
		) 
		{
			pigmentStore.add(
				this.state.commonValue,
				this.state.pronuncValue,
				this.state.etymValue,
				this.state.altNamesValue,
				this.state.descriptValue,
				this.state.sourceValue,
				this.state.locationValue,
				this.state.productionValue,
				this.state.useStartValue,
				this.state.useEndValue,
				this.state.anecdoteValue,
				this.state.iconImgValue,
				this.state.sourceImgValue,
				this.state.pigImgValue,
				this.state.colorCodeValue,
				this.state.exampleValue
			)
			this.setState({
				commonValue: '',
				pronuncValue: '',
				etymValue: '',
				altNamesValue: '',
				descriptValue: '',
				sourceValue: '',
				locationValue: '',
				productionValue: '',
				useStartValue: '',
				useEndValue: '',
				anecdoteValue: '',
				iconImgValue: '',
				sourceImgValue: '',
				pigImgValue: '',
				colorCodeValue: '',
				exampleValue: ''
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
			descriptValue: this.refs.descript.value,
			sourceValue: this.refs.source.value,
			locationValue: this.refs.location.value,
			productionValue: this.refs.production.value,
			useStartValue: this.refs.useStart.value,
			useEndValue: this.refs.useEnd.value,
			anecdoteValue: this.refs.anecdote.value,
			iconImgValue: this.refs.iconImg.value,
			sourceImgValue: this.refs.sourceImg.value,
			pigImgValue: this.refs.pigImg.value,
			colorCodeValue: this.refs.colorCode.value,
			exampleValue: this.refs.example.value
		});
	},

	handleStoreChange: function () {
        this.setState({
            pigments: pigmentStore.get()
        });
    },
});

module.exports = DataEntry;