import React, { Component } from 'react'

 class slider extends Component {
    render() {
        return (
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
        )
    }
}

export default slider
