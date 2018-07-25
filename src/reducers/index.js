import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import dashboardData from './dashboardData'

const rootReducer = combineReducers({
    auth, 
    dashboardData,
    routing: routerReducer
}); 

export default rootReducer;