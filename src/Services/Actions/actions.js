import {SET_USER_LOGIN_DETAILS} from '../constants';

export const setUserLoginDetails = (data) =>{
    return {
        type:SET_USER_LOGIN_DETAILS,
        data:data
    }
}