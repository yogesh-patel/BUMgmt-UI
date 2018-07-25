import userConstants from '../constants/user.constants'

import { alertActions } from './';
import history from '../history';
import { Redirect } from 'react-router-dom'
import Axios from 'axios'
import {checkHttpStatus }from '../utils/apiUtils.js'
import constants from '../constants';

export const userActions = {
    login,
    logout    
};

export function login(username, password) {
    return dispatch => {
        var obj = {
            'username':username,
            'password':password
        }
        Axios.post("http://localhost:8080/auth/",obj)       
        .then(checkHttpStatus)
        .then(response => {
            localStorage.setItem('token', response.headers.authorization)            
            dispatch({ 
                type: constants.LOGIN_SUCCESS, 
                payload: response.data 
            })
            history.push('/dashboard');
        })       
        
        .catch(error => {
            console.log(error.message)
            dispatch({ 
                type: userConstants.LOGIN_FAILURE, 
                payload: error.message 
            })
            throw error;
        });
           
    };

    // function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    // function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    // function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

export function logout() {
    return dispatch => {
    localStorage.removeItem('token')
    dispatch({ 
        type: userConstants.LOGOUT, 
        payload: "LOGOUT request"
    });
    history.push('/login-page')    
    }     
}


