import React, { Component } from 'react'
import Breadcrumb from './Breadcrumb';

export class Blog extends Component {
    render() {
        return (
<div>
<section id="titlebar">
	
	<div className="container">
	
		<div className="eight columns">
			<h3 className="left">Blogs</h3>
		</div>
		
		<div className="eight columns">
			<nav id="breadcrumbs">
				<ul>
					<li>You are here:</li>
          <Breadcrumb/>
					
					<li>Blogs</li>
				</ul>
			</nav>
		</div>

	</div>
	
</section>

  
  <div id="content">
    <div className="container">
          <div className="row">
            <div className="span12">
            <h3>&nbsp;</h3>
            </div>
            
            <div className="span9">
  
              
              <div className="row">
                <div className="span1">
  
                  <div className="blog-icon">
                    <i className="icon-camera"></i><br/>
                    <h5>Gallery Post</h5>                  
                  </div>
                     
                </div>
                <div className="span8">
                  <a href="blog-detail.htm"><img src="img/blog/1.jpg" alt=""/></a>
          
                  <div className="row">
                    <div className="span8 post-d-info">
                      <a href="blog-detail.htm"><h3>Ancient Timbuktu Texts in Danger?</h3></a>
                      <div className="blue-dark">
                      <i className="icon-user"></i> By Admin <i className="icon-tag"></i> Photography | Portrait <i className="icon-comment-alt"></i> With 12 Comments
                      </div>
                      <p>
                      Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.Pie wafer wypas candy canes toffee. Cookie icing candy jelly oat cake chupa chups bear claw.
                      </p>
                    </div>
          
                  </div>
                </div>
              </div>
              
              
              <div className="row space40"></div>   
              
              
              <div className="row">
                <div className="span1">
  
                  <div className="blog-icon">
                    <i className="icon-film"></i><br/>
                    <h5>Video Post</h5>                  
                  </div>
                     
                </div>
                <div className="span8">
                  <a href="blog-detail.htm"><img src="img/blog/2.jpg" alt=""/></a>
          
                  <div className="post-d-info">
                    <a href="blog-detail.htm"><h3>Ancient Timbuktu Texts in Danger?</h3></a>
                    <div className="blue-dark">
                    <i className="icon-user"></i> By Admin <i className="icon-tag"></i> Photography | Portrait <i className="icon-comment-alt"></i> With 12 Comments
                    </div>
                    <p>
                    Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.Pie wafer wypas candy canes toffee. Cookie icing candy jelly oat cake chupa chups bear claw.
                    </p>
                  </div>
  
                </div>
              </div>
              
              
              <div className="row space40"></div>   
              
              
              <div className="row">
                <div className="span1">
  
                  <div className="blog-icon">
                    <i className="icon-quote-right"></i><br/> 
                    <h5>Single Post</h5>                  
                  </div>
                     
                </div>
                <div className="span8">
                  <a href="blog-detail.htm"><img src="img/blog/3.jpg" alt=""/></a>
  
                  <div className="post-d-info">
                    <a href="blog-detail.htm"><h3>Ancient Timbuktu Texts in Danger?</h3></a>
                    <div className="blue-dark">
                    <i className="icon-user"></i> By Admin <i className="icon-tag"></i> Photography | Portrait <i className="icon-comment-alt"></i> With 12 Comments
                    </div>
                    <p>
                      Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.Pie wafer wypas candy canes toffee. Cookie icing candy jelly oat cake chupa chups bear claw.
                    </p>
                  </div>
  
                </div>
              </div>
              
  
              <div className="row space30"></div>   
  
              
              <div className="row">
                <div className="span9">
                  <a href="#/" className="paging">&#62;</a>
                  <a href="#/" className="paging">84</a>
                  <a href="#/" className="paging">83</a>
                  <a href="#/" className="paging">82</a>
                  <a href="#/" className="paging">...</a>
                  <a href="#/" className="paging">3</a>
                  <a href="#/" className="paging">2</a>
                  <a href="#/" className="paging">1</a>
                  <a href="#/" className="paging">&#60;</a>
                </div>
              </div> 
              
              
              <div className="row space40"></div>   

            </div>
          
          
          <div className="span3">
              
            <h3 className="p-t-0">Search</h3>
            <div className="search-box">
              <a href="#/" className="search-icon"><i className="icon-search"></i></a>
              {/* <input className="search" name="" value="Search"> */}
            </div>  

            <h3>Categories</h3>
            <ul className="list-c">
              <li><i className="icon-chevron-right"></i><a href="#/">Business Plan</a></li>
              <li><i className="icon-chevron-right"></i><a href="#/">Entertainment</a></li>
              <li><i className="icon-chevron-right"></i><a href="#/">News & Politics</a></li>
              <li><i className="icon-chevron-right"></i><a href="#/">Social Media Networks</a></li>
              <li><i className="icon-chevron-right"></i><a href="#/">Technology & Innovation</a></li>              
            </ul>                   

            <h3>Tags</h3>          
            <a href="#/"><div className="tag">WordPress</div></a>
            <a href="#/"><div className="tag">Webdesign</div></a>
            <a href="#/"><div className="tag">Post-processing</div></a>
            <a href="#/"><div className="tag">Tourism</div></a>
            <a href="#/"><div className="tag">Rendering</div></a>
            <a href="#/"><div className="tag">Photography</div></a>

            <h3>Latest Tweets</h3>
            <i className="icon-twitter"></i> Saying "Wow, You're cool." when you see someone doing something stupid. <a href="#/" rel="external">http://t.co/YywnqBb8</a><br/> 
            6 minutes ago
            <br/> <br/> 
            <i className="icon-twitter"></i> Are you getting ready to work on a new project, take off on a sales trip. 
            <a href="#/" rel="external">http://pic.witt.com.co/Uyoyyk#sp</a><br/> 
            33 minutes ago

            <h3>Photos From Flickr</h3>
            <div className="flickr-widget">
              <div className="photo-stream">
                <img src="img/stream/01.jpg" alt=""/>
              </div>
              <div className="photo-stream">
                <img src="img/stream/02.jpg" alt=""/>
              </div>
              <div className="photo-stream">
                <img src="img/stream/03.jpg" alt=""/>
              </div>
              <div className="photo-stream">
                <img src="img/stream/04.jpg" alt=""/>
              </div>
              <div className="photo-stream">
                <img src="img/stream/05.jpg" alt=""/>
              </div>
              <div className="photo-stream">
                <img src="img/stream/06.jpg" alt=""/>
              </div>
            </div>

            <h3>Text Widget</h3>
            Amet, consectetur adipisicing elit, sedure doriatlor in fugiat nulla  deserunt mollit anim id est laborum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit orn.
                       
          <div className="row space50"></div>  
        </div>
      </div>
    </div>
  </div>
</div>
        )
    }
}

export default Blog
