import React, { Component } from 'react'
import { BrowserRouter as Router, Route  , NavLink} from "react-router-dom";

 export class Try extends Component {
    render() {
        return (
            <div>
        
        <NavLink  activeClassName="active" to="/">Home </NavLink>
        <NavLink  activeClassName="active" to="/about">About Us </NavLink>
           
        
            </div>
        )
    }
}

export default Try
