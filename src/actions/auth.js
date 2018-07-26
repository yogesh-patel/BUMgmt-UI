import Constants from '../constants';

export const auth = () => dispatch =>{
    dispatch({
        type: Constants.LOGIN
    });
   
}