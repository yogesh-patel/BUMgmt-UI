import createReducer from '../utils/createReducer';
import Constants from '../constants';

const initialState = {
    test:'Tested Ok Reducer and action'
};

export default createReducer(initialState, {
    [Constants.LOGIN](state, payload) {
        return Object.assign({}, state, {
            test: 'Working Fine ok tested',
        });
    }
})