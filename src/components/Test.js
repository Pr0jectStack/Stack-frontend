import React from 'react'
import SideBar from "./SideBar/SideBar";
function Test(props) {
    // const login=(props.data.login_details);
    return (
        <div>
            <SideBar/>
            <h1>{JSON.stringify(props)}</h1>
        </div>
    )
}

export default Test
