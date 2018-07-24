import createReducer from '../utils/createReducer';
import dashboardConstants from '../constants/dashboardConstants';


const initialState = {
    billingStatus: {},
    errors:""

};

export default createReducer(initialState, {
    [dashboardConstants.DASHBOARD_DATA_SUCCESS](state, payload) {
        return Object.assign({}, state, {
            billingStatus: payload
        });
    },
    [dashboardConstants.DASHBOARD_DATA_FAILURE](state, payload) {        
        return Object.assign({}, state, {
            errors:payload
        });
    },
   
})