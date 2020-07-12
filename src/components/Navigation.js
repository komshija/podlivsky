import React from 'react'
import { Navbar,NavbarBrand,NavLink, NavItem } from 'react-bootstrap';
import Brand from '../images/brand-small.png';
import 'bootstrap/js/src/collapse.js';
import { BrowserRouter,Switch,Route,Link } from "react-router-dom";

import HomePage  from './HomePage/HomePage';
import VideoGrid  from './Music/VideoGrid';
import VideoPage  from './Music/VideoPage';
import Contact from './Contact/Contact';
import About from './About/About';


const Navigation = () => {
    return (
    <BrowserRouter>

    <nav className="navbar navbar-expand-lg pt-4 pb-4 navbar-dark">
      <Link className="navbar-brand nav-link" to="/">
          <img  src={Brand} alt="brand"  width="150"
        height="35"/>        
      </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" 
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>

            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item ml-1 mr-1">
                  <Link className="nav-link text-light" to="/music">
                    Music
                  </Link>
                </li>
                <li className="nav-item  ml-1 mr-1">
                  <Link className="nav-link disabled text-light" to="/#">
                    Merch
                  </Link>
                </li>
                <li className="nav-item  ml-1 mr-1">
                  <Link className="nav-link disabled text-light" to="/#">
                    Korpica
                  </Link>
                </li>
                <li className="nav-item  ml-1 mr-1">
                  <Link className="nav-link text-light" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item ml-1 mr-1">
                  <Link className="nav-link text-light" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              
            </div>
    </nav>


    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/music" component={VideoGrid} />
        <Route path="/video/:id" component={VideoPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
)
}

export default Navigation
