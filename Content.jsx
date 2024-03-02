import React from 'react'
import { Link } from 'react-router-dom';

const Content = (props) => {
    
    let desgin = {
             color: '#ffff00',
    }

  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-$ bg-dark`}>
        <Link ink className="navbar-brand" to="/" style={desgin}>{props.title}</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link"  to="/" style={desgin}>Home</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/about" style={desgin}>{props.about}</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/features" style={desgin}>Features</Link>
                </li>
            </ul>

            <div className={`form-check mr-auto form-switch text-${props.mode ==='light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={desgin}>Enable Mode</label>
            </div>

            {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form> */}

            {/* <button className="f-d text-secondary"></button> */}
        </div>
    </nav>
    </div>
  )
}

export default Content



Content.defaultProps = {
    title: 'Set title here',
    about: 'About text here'
};




