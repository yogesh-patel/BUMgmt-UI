import Constants from '../constants';
import history from '../history';
export const auth = () => dispatch =>{
    dispatch({
        type: Constants.LOGIN
    });
    history.push('/user');
}