import createReducer from '../utils/createReducer';
import Constants from '../constants';
import userConstants from '../constants/user.constants'


const initialState = {
    test:'Tested Ok Reducer and action',
    authDetails:{
        token:''
    },
    userDetails: {},    
    invalidUserError : "",
    logout: false

};

export default createReducer(initialState, {
    [Constants.LOGIN](state, payload) {
        return Object.assign({}, state, {
            test: 'Working Fine ok tested',
            
        });
    },
    [Constants.LOGIN_SUCCESS](state, payload) {
        return Object.assign({}, state, {
            userDetails:payload
        });
    },
    [userConstants.LOGIN_FAILURE](state, payload) {
        return Object.assign({}, state, {
            invalidUserError : "Invalid User"
        });
    },
    [userConstants.LOGOUT](state, payload) {
        return Object.assign({}, state, {
            logout : true,
            invalidUserError : ""
        });
    }
})