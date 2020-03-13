import React from 'react';
import { NavLink} from 'react-router-dom';

const UserLogin=(props)=>{
    if(props.isLog){
        return <li onClick={props.logout}>Logout</li>
    }
    return  <li><NavLink to="/login">Login</NavLink></li>
    

}

export default React.memo(UserLogin);