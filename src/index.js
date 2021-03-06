import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './store/reducer';
import {BrowserRouter} from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(
	app,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
