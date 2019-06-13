import React, { Component } from 'react'
import Breadcrumb from './Breadcrumb';

 class about extends Component {
    render() {
        return (
<div>


<section id="titlebar">
	
	<div className="container">
	
		<div className="eight columns">
			<h3 className="left">About</h3>
		</div>
		
		<div className="eight columns">
			<nav id="breadcrumbs">
				<ul>
					<li>You are here:</li>
					<Breadcrumb/>
					<li>About</li>
				</ul>
			</nav>
		</div>

	</div>
	
</section>

  
  <div id="content">
    <div className="container">

      <div className="row">
        <div className="span12">
          <h4>Who We Are?</h4>
          <p>Ucorpora ut molestie turpis, elementum tempor metus. Vestibulum non nibh porttitor, eleifend purus eu, pulvinar orci. Quisque a gravida lorem, eu lobortis magna. Nulla auctor urna quis facilisis pretium. Cras facilisis risus sed mauris gravida, id vestibulum erat dictum. Nam in ante massa. Integer ultricies libero lorem, egestas dictum augue aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.</p>

<p>Elementum tempor metus donec ut molestie turpis. Vestibulum non nibh porttitor, eleifend purus eu, pulvinar orci. Quisque a gravida lorem, eu lobortis magna. Nulla auctor urna quis facilisis pretium. Cras facilisis risus sed mauris gravida, id vestibulum erat dictum. Nam in ante massa. Integer ultricies libero lorem.</p>   
          
          <h3>Our Team</h3>
                
          <div  className="slider2 team flexslider">
            <ul className="slides">
              <li>
                <div className="row">
                                  
                  <a href="#/">
                    <div className="span3 square-1">
                      <div className="img-container">
                        <img src="img/our-team/1.jpg" alt="" />
                        <div className="img-bg-icon"></div>
                      </div>
                      <h4>John Smith</h4>
                        managing director  
                    </div>
                  </a>
                  
                  <a href="#/">
                    <div className="span3 square-1">
                      <div className="img-container">
                        <img src="img/our-team/2.jpg" alt="" />
                        <div className="img-bg-icon"></div>
                      </div>
                      <h4>Jokey Holid</h4>
                        designer
                    </div>
                  </a>
                  
                  <a href="#/">
                    <div className="span3 square-1">
                      <div className="img-container">
                        <img src="img/our-team/3.jpg" alt="" />
                        <div className="img-bg-icon"></div>
                      </div>
                      <h4>Graham Bill</h4>
                        project manager 
                    </div>
                  </a>
                  
                  <a href="#/">
                    <div className="span3 square-1">
                      <div className="img-container">
                        <img src="img/our-team/4.jpg" alt="" />
                        <div className="img-bg-icon"></div>
                      </div>
                      <h4>Kenny Delak </h4>
                        developer
                    </div>
                  </a>
                  
                </div> 
              </li>
              <li>
                <div className="row">
                
                  <a href="#/">
                    <div className="span3 square-1">
                      <div className="img-container">
                        <img src="img/our-team/3.jpg" alt="" />
                        <div className="img-bg-icon"></div>
                      </div>
                      <h4>Joe Ganesha</h4>
                        founder
                    </div>
                  </a>
                  
                  <a href="#/">
                    <div className="span3 square-1">
                      <div className="img-container">
                        <img src="img/our-team/4.jpg" alt="" />
                        <div className="img-bg-icon"></div>
                      </div>
                      <h4>Mario Balio</h4>
                        programmer 
                    </div>
                  </a>
                  
                  <a href="#/">
                    <div className="span3 square-1">
                      <div className="img-container">
                        <img src="img/our-team/1.jpg" alt="" />
                        <div className="img-bg-icon"></div>
                      </div>
                      <h4>Jane Buckler</h4>
                        junior designer
                    </div>
                  </a>
                  
                  <a href="#/">
                    <div className="span3 square-1">
                      <div className="img-container">
                        <img src="img/our-team/2.jpg" alt="" />
                        <div className="img-bg-icon"></div>
                      </div>
                      <h4>Zeda Junar</h4>
                        analyst
                    </div>
                  </a>
                  
                </div> 
              </li>
            </ul>
          </div>
         
          <div className="row t-row">
         
            <div className="span12"><hr/></div>
            <div className="span9">
              <h2>We have become the fastest growing</h2>
            </div>
            <div className="span3">
            
              <div className="btn btn-blue f-right">
            
                <h3><i className="icon-signin hidden-tablet"></i> More Info</h3>
              </div>
            </div>
            <div className="space30 visible-phone"></div>
            
            <div className="span12"><hr/></div>
          </div>
          

          <div className="row space10"></div>  

          <div className="row">
         
            <div className="span4"> 
              <h3>List</h3>
              <ul className="list-a">
                <li>Le Aorem Ipsum ainsi obtenu ne seeng elit.</li>
                <li>Contrairement à Lorem n'est aliquet mollis.</li>
                <li>On sait depuis travailler cotà une opinion.</li>
                <li>Al contrario di quaon enodio, quis fringilla.</li>
                <li>Sopravvissuto non solo velor iaculis.</li>
                <li>Sait depuis longtendue gravida porttitor.</li>
              </ul>   
            </div>
            
            <div className="span4">
              <h3>Progress Bar</h3>
              <div className="progress">
                <div className="bar" style={{ width: '73%' }}>HTML/CSS 73%</div>
              </div>  
              <div className="progress">
                <div className="bar" style={{ width: '100%' }}>Web Design 100%</div>
              </div>  
              <div className="progress">
                <div className="bar" style={{ width: '78%' }}>Photography 78%</div>
              </div>  
              <div className="progress">
                <div className="bar" style={{ width: '80%' }}>Sound Design 80%</div>
              </div>  
              <div className="progress">
                <div className="bar" style={{ width: '63%' }}>Party 63%</div>
              </div>  
            </div>
            
            <div className="span4">
              <h3>Client Says</h3> 
              <div className="client-says">            
                “Claritas est etiam processus dynamicus, qui sur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas. Aliquam at erat in purus aliquet mollis. Fusce elementum velit vel dolor iaculis egestas. posuere vel vitae  elementum velit nibh.”
              </div>
              <div className="client-says-2">
                <div className="quotes">
                  <i className="icon-quote-right"></i>John Doe, Everton Inc.
                </div>  
              </div> 
            </div>
            
          </div> 
                                   
          <div className="row space50"></div>  
        </div>
      </div>
    </div>
  </div>
  



</div>
        )
    }
}

export default about
