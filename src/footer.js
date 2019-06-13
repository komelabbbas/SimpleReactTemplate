import React, { Component } from 'react'

 class footer extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       Name : '' ,
       Email : '' ,
       Message : ''
    }
  }
  
  _Name = (e) => {
    this.setState({
      Name : e.target.value 
    })
  }

  _Email = (e) => {
    this.setState({
      Email : e.target.value 
    })
  }

  _Message = (e) => {
    this.setState({
      Message : e.target.value 
    })
  }

    render() {
        return (
<div>
<footer id="footer">
    <div className="container">
      <div className="row">
        <div className="span5">
        <h3>Contact Form</h3>
        <div>         
          <form className="form-main" name="ajax-form" id="ajax-form" action="" method="post">
            <div id="ajaxsuccess">E-mail was successfully sent.</div> 
            <div className="error" id="err-name">Please enter name</div>
            
            <input name="name" id="name" type="text" value={this.state.Name} onChange={this._Name}/>
            
            <div className="error" id="err-email">Please enter e-mail</div>
		        <div className="error" id="err-emailvld">E-mail is not a valid format</div>
            
            <input  name="email" id="email" type="text" value={this.state.Email} onChange={this._Email}/>

            <div className="error" id="err-message">Please enter message</div>
            <textarea  name="message" id="message" value={this.state.Message} onChange={this._Message}></textarea><br/>
            <div>
            	<div className="error" id="err-form">There was a problem validating the form please check!</div>
            	<div className="error" id="err-timedout">The connection to the server timed out!</div>
            	<div className="error" id="err-state"></div>
            </div>
            <button type="button" id="send" className="btn f-right">Send Message <i className="icon-ok"></i></button>
          </form>
        </div>
        </div>
        <div className="span3 offset3">
          <h3>Address</h3>
          81 Sunnyvale Street<br/>
          Los Angeles, CA 90185<br/>
          United States<br/>
          <br/>
          <i className="icon-phone"></i>+01 880 555 999<br/>
          <i className="icon-envelope"></i><a href="mailto:support@example.com">support@example.com</a><br/>
          <i className="icon-home"></i><a href="#/">www.example.com</a>
          
          <div className="row space40"></div>  

          <a href="#/" className="social-network sn2 behance">.</a>
          <a href="#/" className="social-network sn2 facebook">.</a>
          <a href="#/" className="social-network sn2 pinterest">.</a>
          <a href="#/" className="social-network sn2 flickr">.</a>
          <a href="#/" className="social-network sn2 dribbble">.</a>
          <a href="#/" className="social-network sn2 lastfm">.</a>
          <a href="#/" className="social-network sn2 forrst">.</a>
          <a href="#/" className="social-network sn2 xing">.</a>      
        </div>
      </div>
      
      <div className="row space50"></div>
      <div className="row">
        <div className="span6">
          <div className="logo-footer">
            Design by <a href="https://bytefury.com/" target="_blank">Bytefury</a>
          </div>                       
        </div>
        <div className="span6 right">
          &copy; 2019. All rights reserved.
        </div>
      </div>

    </div>
  </footer>
</div>
        )
    }
}

export default footer
