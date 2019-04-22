import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
;
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import gameDataReducer from './store/reducers/gameData';

axios.interceptors.request.use(request => {
    console.log('[Index.js] request being sent is: ' + request);

    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log('[Index.js] error found on API response: ' + response);

    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

const rootReducer = combineReducers({
    gdr: gameDataReducer
});

const logger = store => {

    // Next will be a function we can execute. Afterwards the dispatch call will be 
    // forwarded on to the reducer
    return next => {

        return action => {
            // Recieve action dispatched as the input
            console.log('[Middleware] Dispatching ', action);

            // Return to the dispatcher with next()
            const result = next(action);

            // Log the state after the dispatcher has updated the content
            console.log('[Middleware] next state ', store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
