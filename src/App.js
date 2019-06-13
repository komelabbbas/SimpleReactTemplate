import React, { Component } from 'react'
import { BrowserRouter as Router, Route  } from "react-router-dom";
import IndexContent from './index_content';
import About from './AboutUs';
import Header from './header' ;
import Footer from './footer' ;
 import './App.css';
import Gallery from './Gallery';
import { Services } from './Services';
import { Blog } from './Blog';



export class App extends Component {

   constructor(props) {
     super(props)
   
   }
   
   componentDidMount(){
     
   }


  render() {

      
    
    return (
      <div className="App">
       <Router>
        
       <Header />
           
           <Route  exact path="/"  component={IndexContent} />
           <Route exact path="/AboutUs"  component={About} />
           <Route exact path="/gallery"  component={Gallery} />
           <Route exact path="/services"  component={Services} />
           <Route exact path="/blog"  component={Blog} />
        </Router>
      <Footer />
    </div>
    )
  }
}






export default App;
