import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer'
import { composeWithDevtools } from 'redux-devtools-extension';
import reducers from './reducers/rootReducer'
const middleware = [ReduxThunk]


// reducer

// const store = createStore(
//     rootReducer,
//     composeWithDevtools(applyMiddleware(...middleware))
// )

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


