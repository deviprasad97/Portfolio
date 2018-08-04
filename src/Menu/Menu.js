import React, { Component } from "react";
import "./Menu.css";
 
class Menu extends Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
       
      {/*generated code*/}
      <header id="home">
         <nav id="nav-wrap">
            <ul id="nav" className="nav">
               <h2 className="current"><a className="smoothscroll" href="#home">Home</a></h2>
               <h2 className="current"><a className="smoothscroll" href="#aboutme">About Me</a></h2>
               <h2 className="current"><a className="smoothscroll" href="#aboutme">Resume</a></h2>
               <h2 className="current"><a className="smoothscroll" href="#aboutme">Projects</a></h2>
               <h2 className="current"><a className="smoothscroll" href="#aboutme">Contact information</a></h2>
            </ul>
         </nav>

        
      </header>
      
      </div>
    );
  }
}
 
export default Menu;