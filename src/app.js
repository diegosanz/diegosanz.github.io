import React from 'react'
import ReactDOM from 'react-dom'

import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import {Route} from 'react-router'

import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'

import reducers from './reducers'

import router from './router/router'

import bulma from 'bulma'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
	combineReducers({...reducers, router: routerReducer}),
	composeEnhancers(applyMiddleware(middleware))
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			{ router() }
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)
