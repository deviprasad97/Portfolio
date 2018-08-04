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
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li className="current"><a className="smoothscroll" href="#aboutme">About Me</a></li>
            </ul>
         </nav>

        
      </header>
      
      </div>
    );
  }
}
 
export default Menu;