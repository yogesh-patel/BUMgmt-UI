import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';
import createHistory from 'history/createBrowserHistory';

const isProduction = process.env.NODE_ENV === 'production';

const history = createHistory();
let composeList = [],
    middleWares = [thunk,
        routerMiddleware(history)];

if(!isProduction) {
    window.__REDUX_DEVTOOLS_EXTENSION__ && composeList.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    middleWares.push(createLogger());
}

const store = createStore(
    reducers,
    compose(
        applyMiddleware(
            ...middleWares
        ),
        ...composeList
    )
);

export default store;