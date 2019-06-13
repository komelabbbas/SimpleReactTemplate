import React, { Component } from 'react'
import { BrowserRouter as Router, Route  , NavLink} from "react-router-dom" ;

export class HeaderSlider extends Component {
    render() {
        return (
<div>
<header id="header">
    <div className="container">
      <div className="row t-container">

        
        <div className="span3">
          <div className="logo">
            <a href="index.htm"><img src="img/logo-header.png" alt="" /></a>
          </div>            
        </div>

        <div className="span9">
          <div className="row space60"></div>
             <nav id="nav" role="navigation">
               	<a href="#nav" title="Show navigation">Show navigation</a>
	            <a href="#" title="Hide navigation">Hide navigation</a>
               
	            <ul className="clearfix">
                    
                   {/* <li className="active"><a href="index.htm" title="">Home</a></li>            */}
                   <li><NavLink  activeClassName="active" to="/">Home </NavLink></li>
                   <li><NavLink  activeClassName="active" to="/AboutUs">About Us </NavLink></li>
                   
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
       <div className ="slider1 flexslider">
                 <ul className ="slides">
                    <li>
    	    	    <img src="img/slider/1.jpg" alt="" />
    	    		</li>
    	    		<li>
    	    	    <img src="img/slider/2.jpg" alt="" />
    	    		</li>
    	    		<li>
    	    	    <img src="img/slider/3.jpg" alt="" />
    	    		</li>
                    <li>
    	    	    <img src="img/slider/4.jpg" alt="" />
    	    		</li>
            </ul>
            </div>
  </div> 
</header>
</div>
        )
    }
}

export default HeaderSlider
