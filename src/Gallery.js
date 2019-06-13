import React, { Component } from 'react'
import Breadcrumb from './Breadcrumb';

export class Gallery extends Component {
    render() {
        return (
<div>
<section id="titlebar">
	
	<div className="container">
	
		<div className="eight columns">
			<h3 className="left">Gallery</h3>
		</div>
		
		<div className="eight columns">
			<nav id="breadcrumbs">
				<ul>
					<li>You are here:</li>
					<Breadcrumb/>
					<li>Gallery</li>
				</ul>
			</nav>
		</div>

	</div>
	
</section>

  
  <div id="content">
    <div className="container">

      <div className="row">
        <div className="span12">
          <h4>Looking our photo gallery page?</h4>
          <p>Ucorpora photo gallery page ut molestie turpis, elementum tempor metus. Vestibulum non nibh porttitor, eleifend purus eu, pulvinar orci. Quisque a gravida lorem, eu lobortis magna. Nulla auctor urna quis facilisis pretium. Cras facilisis risus sed mauris gravida, id vestibulum erat dictum. Nam in ante massa. Integer ultricies libero lorem, egestas dictum augue aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.</p>

<p>Elementum tempor metus donec ut molestie turpis. Vestibulum non nibh porttitor, eleifend purus eu, pulvinar orci. Quisque a gravida lorem, eu lobortis magna. Nulla auctor urna quis facilisis pretium. Cras facilisis risus sed mauris gravida, id vestibulum erat dictum. Nam in ante massa. Integer ultricies libero lorem.</p>   

      <div className="row">
        <div className="span12">  
  
        		<ul id="portfolio-filter">
        			<li className="active"><a href="#/" className="filter" data-filter="*">All</a></li>
        			<li><a href="#/" className="filter" data-filter=".photography">Photography</a></li>
              <li><a href="#/" className="filter" data-filter=".architecture">Architecture</a></li>
        			<li><a href="#/" className="filter" data-filter=".webdesign">Webdesign</a></li>
              <li><a href="#/" className="filter" data-filter=".technology">Thechnology</a></li>
              <li><a href="#/" className="filter" data-filter=".identity">Identity</a></li>
        		</ul>
    
        		<section className="row" id="portfolio-items">
              <ul className="portfolio">
                
                <li>
                  <article className="span3 project" data-tags="photography">     
                    <a href="#/">
                      <div className="square-1">
                        <div className="img-container">
                          <img src="img/gallery/01.jpg" alt="" />
                          <div className="img-bg-icon"></div>
                        </div>
                        <h3>Photo Ucorpora</h3>
                          More description about photo 
                      </div>
                    </a>
                  </article>
                </li> 
                
                <li>
                  <article className="span3 project" data-tags="webdesign">     
                    <a href="#/">
                      <div className="square-1">
                        <div className="img-container">
                          <img src="img/gallery/02.jpg" alt="" />
                          <div className="img-bg-icon"></div>
                        </div>
                        <h3>Photo Ucorpora</h3>
                          More description about photo 
                      </div>
                    </a>
                  </article>
                </li>  
                
                <li>
                  <article className="span3 project" data-tags="photography,identity">     
                    <a href="#/">
                      <div className="square-1">
                        <div className="img-container">
                          <img src="img/gallery/03.jpg" alt="" />
                          <div className="img-bg-icon"></div>
                        </div>
                        <h3>Photo Ucorpora</h3>
                          More description about photo 
                      </div>
                    </a>
                  </article>
                </li>  
                
                <li>
                  <article className="span3 project" data-tags="identity,architecture">     
                    <a href="#/">
                      <div className="square-1">
                        <div className="img-container">
                          <img src="img/gallery/04.jpg" alt="" />
                          <div className="img-bg-icon"></div>
                        </div>
                        <h3>Photo Ucorpora</h3>
                          More description about photo 
                      </div>
                    </a>
                  </article>
                </li> 
                 
                <li>
                  <article className="span3 project" data-tags="architecture,technology">     
                    <a href="#/">
                      <div className="square-1">
                        <div className="img-container">
                          <img src="img/gallery/05.jpg" alt="" />
                          <div className="img-bg-icon"></div>
                        </div>
                        <h3>Photo Ucorpora</h3>
                          More description about photo 
                      </div>
                    </a>
                  </article>
                </li>
                
                <li>
                  <article className="span3 project" data-tags="technology,webdesign">     
                    <a href="#/">
                      <div className="square-1">
                        <div className="img-container">
                          <img src="img/gallery/06.jpg" alt="" />
                          <div className="img-bg-icon"></div>
                        </div>
                        <h3>Photo Ucorpora</h3>
                          More description about photo 
                      </div>
                    </a>
                  </article>
                </li> 
                 
                <li>
                  <article className="span3 project" data-tags="architecture">     
                    <a href="#/">
                      <div className="square-1">
                        <div className="img-container">
                          <img src="img/gallery/07.jpg" alt="" />
                          <div className="img-bg-icon"></div>
                        </div>
                        <h3>Photo Ucorpora</h3>
                          More description about photo 
                      </div>
                    </a>
                  </article>
                </li>    
                
                <li>
                  <article className="span3 project" data-tags="identity,technology">     
                    <a href="#/">
                      <div className="square-1">
                        <div className="img-container">
                          <img src="img/gallery/08.jpg" alt="" />
                          <div className="img-bg-icon"></div>
                        </div>
                        <h3>Photo Ucorpora</h3>
                          More description about photo 
                      </div>
                    </a>
                  </article>
                </li> 
                 
                <li>
                  <article className="span3 project" data-tags="webdesign, architecture">     
                    <a href="#/">
                      <div className="square-1">
                        <div className="img-container">
                          <img src="img/gallery/09.jpg" alt="" />
                          <div className="img-bg-icon"></div>
                        </div>
                        <h3>Photo Ucorpora</h3>
                          More description about photo 
                      </div>
                    </a>
                  </article>
                </li>      
    
                <li>
                  <article className="span3 project" data-tags="technology,webdesign">     
                    <a href="#/">
                      <div className="square-1">
                        <div className="img-container">
                          <img src="img/gallery/10.jpg" alt="" />
                          <div className="img-bg-icon"></div>
                        </div>
                        <h3>Photo Ucorpora</h3>
                          More description about photo 
                      </div>
                    </a>
                  </article>
                </li> 
                 
                <li>
                  <article className="span3 project" data-tags="architecture,photography">     
                    <a href="#/">
                      <div className="square-1">
                        <div className="img-container">
                          <img src="img/gallery/11.jpg" alt="" />
                          <div className="img-bg-icon"></div>
                        </div>
                        <h3>Photo Ucorpora</h3>
                          More description about photo 
                      </div>
                    </a>
                  </article>
                </li>    
                
                <li>
                  <article className="span3 project" data-tags="technology,identity,architecture">     
                    <a href="#/">
                      <div className="square-1">
                        <div className="img-container">
                          <img src="img/gallery/12.jpg" alt="" />
                          <div className="img-bg-icon"></div>
                        </div>
                        <h3>Photo Ucorpora</h3>
                          More description about photo 
                      </div>
                    </a>
                  </article>
                </li> 
                
              </ul> 
            </section>   
                          
  
  </div> </div> </div> </div> </div> </div> </div>
  

        )
    }
}

export default Gallery
