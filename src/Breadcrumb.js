import React from 'react'
import {NavLink} from "react-router-dom" ;

function Breadcrumb() {
    return (
        
             <li><NavLink  exact activeClassName="Menuactive" to="/">Home</NavLink></li>
        
    )
}

export default Breadcrumb
