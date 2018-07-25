import {checkHttpStatus }from '../utils/apiUtils.js'
import dashboardConstants from '../constants/dashboardConstants'
import Axios from 'axios'
import history from '../history';
import { Redirect } from 'react-router-dom'

export const dashboardData = {
    getDashboardData
    // logout,
    // register,
    // getAll,
    // delete: _delete
}

export function getDashboardData() {
    return dispatch => {
        const accessToken  = localStorage.getItem('token');
        const token = {
            'headers': {
              'Authorization': accessToken
            }
          }        
        Axios.get("http://localhost:8080/api/dashboard/data",token)        
        .then(checkHttpStatus)
         .then(response => {
              var response = response.data;
              dispatch({ 
                type: dashboardConstants.DASHBOARD_DATA_SUCCESS, 
                payload: response
            })
          })                
        .catch(error => {
            if(checkHttpStatus === 401 || checkHttpStatus === 403){
                history.push('/login-page')
            }           
            console.log(error.message)
            dispatch({ 
                type: dashboardConstants.DASHBOARD_DATA_FAILURE, 
                payload: error.message 
            })
            
            // throw error;
            history.push('/login-page')
        });            
            
    };

}
