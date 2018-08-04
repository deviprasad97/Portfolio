import React,{Component} from "react"
import MenuButton from "./MenuButton/MenuButton"
import Menu from "./Menu/Menu"
class MenuContainer extends Component{
    constructor(props,context){
        super(props,context);
    this.state={
        visible:false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu=this.toggleMenu.bind(this);
}
handleMouseDown(e)
{
    this.toggleMenu();
    console.log("clicked");
    e.stopPropagation();
}
toggleMenu(){
    this.setState({
        visible:!this.state.visible
    });
}
    render()
    {
        
        
    return(
        
        <div>
            <div>
            <MenuButton handleMouseDown={this.handleMouseDown}/>
        <Menu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

            </div>
        </div>
    );
}
}
export default MenuContainer;