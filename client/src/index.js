import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

const App = (props) => {
    return (
      <BrowserRouter>
        <Provider store={createStoreWithMiddleware(reducers, applyMiddleware(thunk))}>
          <Routes />
        </Provider>
      </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
