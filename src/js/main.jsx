var React = require('react'),
	ReactDOM = require('react-dom'),
	ReactRouter = require('react-router');

var Router = ReactRouter.Router,
	Route = ReactRouter.Route,
	IndexRoute = ReactRouter.IndexRoute,
	hashHistory = ReactRouter.hashHistory; 

var App = require('./components/App.jsx'),
	DataEntry = require('./components/DataEntry.jsx'),
	PigmentData = require('./components/PigmentData.jsx'),
	About = require('./components/About.jsx'),
	FilterPage = require('./components/FilterPage.jsx');

var jsx = (
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={FilterPage} />
			<Route path='/about' component={About} />
			<Route path='/devTools' component={DataEntry} />
			<Route path='/devTools/:id' component={PigmentData} />
		</Route>
	</Router>
);

ReactDOM.render(jsx, document.querySelector('#app'));