import React, { Component } from 'react'
import {NavLink} from "react-router-dom" ;


 class header extends Component {
    render() {
        return (
<div>
<header id="header">
    <div className="container">
      <div className="row t-container">

        
        <div className="span3">
          <div className="logo">
            
            <NavLink  exact activeClassName="Menuactive" to="/"><img src="img/BytefuryLogo.png" alt="" style={{ height : '170px'}}/> </NavLink>
          </div>            
        </div>

        <div className="span9">
          <div className="row space60"></div>
             <nav id="nav" role="navigation">
               	<a href="#nav" title="Show navigation">Show navigation</a>
	            <a href="#/" title="Hide navigation">Hide navigation</a>
               
	            <ul className="clearfix">
                    
                   {/* <li className="active"><a href="index.htm" title="">Home</a></li>            */}
                   <li><NavLink  exact activeClassName="Menuactive" to="/">Home </NavLink></li>
                   <li><NavLink  exact activeClassName="Menuactive" to="/AboutUs">About Us </NavLink></li>
                   <li><NavLink  exact activeClassName="Menuactive" to="/gallery">Gallery </NavLink></li>
                   <li><NavLink  exact activeClassName="Menuactive" to="/services">Services </NavLink></li>
                   <li><NavLink  exact activeClassName="Menuactive" to="/blog">Blog </NavLink></li>
                   
                {/* <li><a href="about-us.htm" title="">About Us</a></li>                
                <li><a href="gallery.htm" title="">Gallery</a></li>
                <li><a href="services.htm" title="">Services</a></li>
                <li><a href="components.htm" title=""><span>Features</span></a>
  			      <ul>
                      <li><a href="components.htm" title="">Components</a></li>
                      <li><a href="blog.htm" title="">Blog</a></li>
                      <li><a href="blog-detail.htm" title="">Blog Detail</a></li>
                      <li><a href="contact.htm" title="">Contact</a></li>
  		         </ul> 
               </li> */}
	           </ul>
             
          </nav>
         </div> 
      </div> 
       <div className="row space40"></div>
       
       <div id="sliders"></div>
       
  </div> 
</header>
</div>
        )
    }
}

export default header
