import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export function validateEmail(data){
    let errors ={};    
     if( ! Validator.isEmail(data)){
        errors.username ='Email is invalid'
    } 
     return{
        errors,
        isValid: isEmpty(errors)
    }   

}


export function validateInputData(data){
    let errors ={};
    if(Validator.isEmpty(data.username)){
        errors.username ='This field is required'
    }   
    else if( ! Validator.isEmail(data.username)){
        errors.username ='Email is invalid'
    }    

    if(Validator.isEmpty(data.password)){
        errors.password ='This field is required'
    }
    return{
        errors,
        isValid: isEmpty(errors)
    }   

}
