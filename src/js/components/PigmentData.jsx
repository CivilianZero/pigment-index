var React = require('react'),
    Link = require('react-router').Link;

var hashHistory = require('react-router').hashHistory;

var DataEntry = require('./DataEntry.jsx');
var pigmentStore = require('../stores/pigmentStore.js');

var PigmentData = React.createClass({

    getInitialState: function () {
        var pigmentId = this.props.params.id;
        return {
            pigmentId: pigmentId,
            pigment: pigmentStore.fetch(pigmentId),
            editing: false,
            editingCommonValue: '',
            editingPronuncValue: '',
            editingEtymValue: '',
            editingAltNamesValue: '',
            editingShortDescriptValue: '',
            editingDescriptValue: '',
            editingSourceValue: '',
            editingLocationValue: '',
            editingSourceDescriptValue: '',
            editingProductionValue: '',
            editingUseStartValue: '',
            editingUseEndValue: '',
            editingAnecdoteValue: '',
            editingAuthorValue: '',
            editingIconImgValue: '',
            editingSourceImgValue: '',
            editingPigImgValue: '',
            editingProdImgValue: '',
            editingPrimaryValue: '',
            editingColorFamilyValue: ''
        };
    },

    componentWillMount: function () {
        pigmentStore.on('update', this.handleStoreChange);
    },

    // Don't forget to remove your event handlers!
    componentWillUnmount: function () {
        pigmentStore.off('update', this.handleStoreChange);
    },

    render: function () {
        var pigment = this.state.pigment;
        var content;
        if (pigment) {
            if (this.state.editing) {
                content = (
                    <div className="pigment-details">
                        <dl>
                            <dt>Common Name:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='Common'
                                    value={this.state.editingCommonValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Pronunciation:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='Pronunc'
                                    value={this.state.editingPronuncValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Etymology:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='Etym'
                                    value={this.state.editingEtymValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Alternate Names:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='AltNames'
                                    value={this.state.editingAltNamesValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Short Description:</dt>
                            <dd>
                                <textarea
                                    ref='ShortDescript'
                                    value={this.state.editingShortDescriptValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Description:</dt>
                            <dd>
                                <textarea
                                    ref='Descript'
                                    value={this.state.editingDescriptValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Source:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='Source'
                                    value={this.state.editingSourceValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Location:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='Location'
                                    value={this.state.editingLocationValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Source Description:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='SourceDescript'
                                    value={this.state.editingSourceDescriptValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Production:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='Production'
                                    value={this.state.editingProductionValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Use Start:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='UseStart'
                                    value={this.state.editingUseStartValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Use End:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='UseEnd'
                                    value={this.state.editingUseEndValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Anecdote:</dt>
                            <dd>
                                <textarea
                                    ref='Anecdote'
                                    value={this.state.editingAnecdoteValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Anecdote Author:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='Author'
                                    value={this.state.editingAuthorValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Icon Image:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='IconImg'
                                    value={this.state.editingIconImgValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Source Image:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='SourceImg'
                                    value={this.state.editingSourceImgValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Pigment Image:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='PigImg'
                                    value={this.state.editingPigImgValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Production Image:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='ProdImg'
                                    value={this.state.editingProdImgValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Primary Hex Color:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='Primary'
                                    value={this.state.editingPrimaryValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Color Family:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='ColorFamily'
                                    value={this.state.editingColorFamilyValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                        </dl>
                        <button onClick={this.handleSaveClick}>Save</button>
                    </div>
                );
            } else {
                content = (
                    <div className="Animal-details">
                        <dl>
                            <dt>Common Name:</dt>
                            <dd>{pigment.name.common}</dd>
                            <dt>Pronunciation:</dt>
                            <dd>{pigment.name.pronunc}</dd>
                            <dt>Etymology:</dt>
                            <dd>{pigment.name.etym}</dd>
                            <dt>Alternate Names:</dt>
                            <dd>{pigment.name.altNames}</dd>
                            <dt>Short Description:</dt>
                            <dd>{pigment.shortDescript}</dd>
                            <dt>Description:</dt>
                            <dd>{pigment.descript}</dd>
                            <dt>Source:</dt>
                            <dd>{pigment.origins.source}</dd>
                            <dt>Location:</dt>
                            <dd>{pigment.origins.location}</dd>
                            <dt>Source Description:</dt>
                            <dd>{pigment.origins.sourceDescript}</dd>
                            <dt>Production:</dt>
                            <dd>{pigment.origins.production}</dd>
                            <dt>Use Start:</dt>
                            <dd>{pigment.origins.useStart}</dd>
                            <dt>Use End:</dt>
                            <dd>{pigment.origins.useEnd}</dd>
                            <dt>Anecdote:</dt>
                            <dd>{pigment.anecdote}</dd>
                            <dt>Anecdote Author:</dt>
                            <dd>{pigment.author}</dd>
                            <dt>Icon Image:</dt>
                            <dd>{pigment.images.iconImg}</dd>
                            <dt>Source Image:</dt>
                            <dd>{pigment.images.sourceImg}</dd>
                            <dt>Pigment Image:</dt>
                            <dd>{pigment.images.pigImg}</dd>
                            <dt>Primary Hex Color:</dt>
                            <dd>{pigment.images.primary}</dd>
                            <dt>Color Family:</dt>
                            <dd>{pigment.colorFamily}</dd>
                        </dl>
                        <button><Link to='/devTools'>Back</Link></button>
                        <button onClick={this.handleEditClick}>Edit</button>
                        <button onClick={this.handleDeleteClick}>Delete</button>
                    </div>
                );
            }
        } else {
            content = 'Loading...';
        }
        return <div className="Pigment">{content}</div>;
    },

    handleStoreChange: function () {
        var pigment = pigmentStore.get(this.state.pigmentId);
        this.setState({
            pigment: pigment,
            editingCommonValue: pigment ? pigment.name.common : '',
            editingPronuncValue: pigment ? pigment.name.pronunc : '',
            editingEtymValue: pigment ? pigment.name.etym : '',
            editingAltNamesValue: pigment ? pigment.name.altNames : '',
            editingShortDescriptValue: pigment ? pigment.shortDescript : '',
            editingDescriptValue: pigment ? pigment.descript : '',
            editingSourceValue: pigment ? pigment.origins.source : '',
            editingLocationValue: pigment ? pigment.origins.location : '',
            editingSourceDescriptValue: pigment ? pigment.origins.sourceDescript : '',
            editingProductionValue: pigment ? pigment.origins.production : '',
            editingUseStartValue: pigment ? pigment.origins.useStart : '',
            editingUseEndValue: pigment ? pigment.origins.useEnd : '',
            editingAnecdoteValue: pigment ? pigment.anecdote : '',
            editingAuthorValue: pigment ? pigment.author : '',
            editingIconImgValue: pigment ? pigment.images.iconImg : '',
            editingSourceImgValue: pigment ? pigment.images.sourceImg : '',
            editingPigImgValue: pigment ? pigment.images.pigImg : '',
            editingProdImgValue: pigment ? pigment.images.prodImg : '',
            editingPrimaryValue: pigment ? pigment.images.primary : '',
            editingColorFamilyValue: pigment ? pigment.colorFamily : ''
        });
    },

    handleEditClick: function () {
        this.setState({
            editing: true
        });
    },

    handleEditingChange: function () {
        this.setState({
            editingCommonValue: this.refs.Common.value,
            editingPronuncValue: this.refs.Pronunc.value,
            editingEtymValue: this.refs.Etym.value,
            editingAltNamesValue: this.refs.AltNames.value,
            editingShortDescriptValue: this.refs.ShortDescript.value,
            editingDescriptValue: this.refs.Descript.value,
            editingSourceValue: this.refs.Source.value,
            editingLocationValue: this.refs.Location.value,
            editingSourceDescriptValue: this.refs.SourceDescript.value,
            editingProductionValue: this.refs.Production.value,
            editingUseStartValue: this.refs.UseStart.value,
            editingUseEndValue: this.refs.UseEnd.value,
            editingAnecdoteValue: this.refs.Anecdote.value,
            editingAuthorValue: this.refs.Author.value,
            editingIconImgValue: this.refs.IconImg.value,
            editingSourceImgValue: this.refs.SourceImg.value,
            editingPigImgValue: this.refs.PigImg.value,
            editingProdImgValue: this.refs.ProdImg.value,
            editingPrimaryValue: this.refs.Primary.value,
            editingColorFamilyValue: this.refs.ColorFamily.value
        });
    },

    handleSaveClick: function () {
        this.setState({
            editing: false
        });
        pigmentStore.edit(
            this.state.pigment.id, 
            this.state.editingCommonValue,
            this.state.editingPronuncValue,
            this.state.editingEtymValue,
            this.state.editingAltNamesValue,
            this.state.editingShortDescriptValue,
            this.state.editingDescriptValue,
            this.state.editingSourceValue,
            this.state.editingLocationValue,
            this.state.editingSourceDescriptValue,
            this.state.editingProductionValue,
            this.state.editingUseStartValue,
            this.state.editingUseEndValue,
            this.state.editingAnecdoteValue,
            this.state.editingAuthorValue,
            this.state.editingIconImgValue,
            this.state.editingSourceImgValue,
            this.state.editingPigImgValue,
            this.state.editingProdImgValue,
            this.state.editingPrimaryValue,
            this.state.editingColorFamilyValue
        );
    },

    handleDeleteClick: function () {
        hashHistory.push('/devTools');
        pigmentStore.delete(this.state.pigment.id);
    }

});

module.exports = PigmentData;