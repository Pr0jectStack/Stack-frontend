import {SET_USER_LOGIN_DETAILS} from '../constants';
const intialLoginDetails={
    login_details:{}
}

export const login_details=(state=intialLoginDetails,action)=>{
    switch(action.type){
        case SET_USER_LOGIN_DETAILS:
            return{
                ...state,
                login_details:action.data
            }
        
        default:return state
    }
} 