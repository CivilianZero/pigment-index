var React = require('react');

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
            editingDescriptValue: '',
            editingSourceValue: '',
            editingLocationValue: '',
            editingProductionValue: '',
            editingUseStartValue: '',
            editingUseEndValue: '',
            editingAnecdoteValue: '',
            editingIconImgValue: '',
            editingSourceImgValue: '',
            editingPigImgValue: '',
            editingColorCodeValue: '',
            editingExampleValue: ''
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
                            <dt>Common:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='Common'
                                    value={this.state.editingCommonValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Pronunc:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='Pronunc'
                                    value={this.state.editingPronuncValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Etym:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='Etym'
                                    value={this.state.editingEtymValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>AltNames:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='AltNames'
                                    value={this.state.editingAltNamesValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Descript:</dt>
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
                            <dt>Production:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='Production'
                                    value={this.state.editingProductionValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>UseStart:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='UseStart'
                                    value={this.state.editingUseStartValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>UseEnd:</dt>
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
                            <dt>IconImg:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='IconImg'
                                    value={this.state.editingIconImgValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>SourceImg:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='SourceImg'
                                    value={this.state.editingSourceImgValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>PigImg:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='PigImg'
                                    value={this.state.editingPigImgValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>ColorCode:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='ColorCode'
                                    value={this.state.editingColorCodeValue}
                                    onChange={this.handleEditingChange}
                                    />
                            </dd>
                            <dt>Example:</dt>
                            <dd>
                                <input
                                    type="text"
                                    ref='Example'
                                    value={this.state.editingExampleValue}
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
                            <dt>common:</dt>
                            <dd>{pigment.name.common}</dd>
                            <dt>pronunc:</dt>
                            <dd>{pigment.name.pronunc}</dd>
                            <dt>etym:</dt>
                            <dd>{pigment.name.etym}</dd>
                            <dt>altNames:</dt>
                            <dd>{pigment.name.altNames}</dd>
                            <dt>descript:</dt>
                            <dd>{pigment.descript}</dd>
                            <dt>source:</dt>
                            <dd>{pigment.origins.source}</dd>
                            <dt>location:</dt>
                            <dd>{pigment.origins.location}</dd>
                            <dt>production:</dt>
                            <dd>{pigment.origins.production}</dd>
                            <dt>useStart:</dt>
                            <dd>{pigment.origins.useStart}</dd>
                            <dt>useEnd:</dt>
                            <dd>{pigment.origins.useEnd}</dd>
                            <dt>anecdote:</dt>
                            <dd>{pigment.anecdote}</dd>
                            <dt>iconImg:</dt>
                            <dd>{pigment.images.iconImg}</dd>
                            <dt>sourceImg:</dt>
                            <dd>{pigment.images.sourceImg}</dd>
                            <dt>pigImg:</dt>
                            <dd>{pigment.images.pigImg}</dd>
                            <dt>colorCode:</dt>
                            <dd>{pigment.images.colorCode}</dd>
                            <dt>example:</dt>
                            <dd>{pigment.example}</dd>
                        </dl>
                        <button onClick={this.handleEditClick}>Edit</button>
                        <button onClick={this.handleDeleteClick}>Delete</button>
                    </div>
                );
            }
        } else {
            content = 'Loading...';
        }
        return <div className="Animal">{content}</div>;
    },

    handleStoreChange: function () {
        var pigment = pigmentStore.get(this.state.pigmentId);
        this.setState({
            pigment: pigment,
            editingCommonValue: pigment ? pigment.name.common : '',
            editingPronuncValue: pigment ? pigment.name.pronunc : '',
            editingEtymValue: pigment ? pigment.name.etym : '',
            editingAltNamesValue: pigment ? pigment.name.altNames : '',
            editingDescriptValue: pigment ? pigment.descript : '',
            editingSourceValue: pigment ? pigment.origins.source : '',
            editingLocationValue: pigment ? pigment.origins.location : '',
            editingProductionValue: pigment ? pigment.origins.production : '',
            editingUseStartValue: pigment ? pigment.origins.useStart : '',
            editingUseEndValue: pigment ? pigment.origins.useEnd : '',
            editingAnecdoteValue: pigment ? pigment.anecdote : '',
            editingIconImgValue: pigment ? pigment.images.iconImg : '',
            editingSourceImgValue: pigment ? pigment.images.sourceImg : '',
            editingPigImgValue: pigment ? pigment.images.pigImg : '',
            editingColorCodeValue: pigment ? pigment.images.colorCode : '',
            editingExampleValue: pigment ? pigment.example : '',
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
            editingDescriptValue: this.refs.Descript.value,
            editingSourceValue: this.refs.Source.value,
            editingLocationValue: this.refs.Location.value,
            editingProductionValue: this.refs.Production.value,
            editingUseStartValue: this.refs.UseStart.value,
            editingUseEndValue: this.refs.UseEnd.value,
            editingAnecdoteValue: this.refs.Anecdote.value,
            editingIconImgValue: this.refs.IconImg.value,
            editingSourceImgValue: this.refs.SourceImg.value,
            editingPigImgValue: this.refs.PigImg.value,
            editingColorCodeValue: this.refs.ColorCode.value,
            editingExampleValue: this.refs.Example.value
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
            this.state.editingDescriptValue,
            this.state.editingSourceValue,
            this.state.editingLocationValue,
            this.state.editingProductionValue,
            this.state.editingUseStartValue,
            this.state.editingUseEndValue,
            this.state.editingAnecdoteValue,
            this.state.editingIconImgValue,
            this.state.editingSourceImgValue,
            this.state.editingPigImgValue,
            this.state.editingColorCodeValue,
            this.state.editingExampleValue
        );
    },

    handleDeleteClick: function () {
        hashHistory.push('/devTools');
        pigmentStore.delete(this.state.pigment.id);
    }

});

module.exports = PigmentData;