import React, { Component } from "react"
import {Link} from "react-router-dom"
import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";

class Navbar extends Component {
    state = {
        clicked : false,
    }

    handleClick = () => {
        this.setState({
            clicked :!this.state.clicked,
        })

    }

    render(){
        return(
            <nav className="NavbarItem">
                <h1 className="Navbarlogo">
                    Trippy
                </h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index} >
                                <Link to={item.url} className={item.cName}>
                                    <i  className={item.icon} />
                                    {item.title}  
                                </Link>
                            </li>  
                        )
                    })}     
                    <button >Sign in</button>            
                </ul>
            </nav>
        )
    }
}

export default Navbar;

