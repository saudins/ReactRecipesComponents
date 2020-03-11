import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return(
                <ul className="navbar">
                    <div className="logo">
                        <li><a href="#">Recipe App</a></li> 
                    </div>
                    <div className="navbar-right">
                        <li><a href="#">New Recipe</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </div>
                    
                </ul> 
        )
    }
}

export default Navbar;