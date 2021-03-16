import React from 'react'
import NavBar from '../NavBar/NavBar';
import GuestNavBar from '../NavBar/GuestNavBar';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
const Navigation = (props) => {
    console.log(props);
    const setUserProfile =props.setUserProfile;
    const logOutUser = () =>{
        setUserProfile({});
        // return <Redirect to="/"/>
    }
    return (
        <div>
            {_.isEmpty(props.data.login_details.login_details)?<GuestNavBar/>:<NavBar logOutUser={logOutUser}/>}
        </div>
    )
}

export default Navigation;
