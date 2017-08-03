import React, { Component } from 'react'
import './Footer.css';
import FaGlobe from 'react-icons/lib/fa/globe'
import FaGithub from 'react-icons/lib/fa/github'
const iconStyles = {
  marginRight: 8,
};

class Footer extends Component {
    render () {
        return (
          
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Eventinsta</h5>
                <p className="grey-text text-lighten-4">A Product of BVPMOSC</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="http://bvpmosc.tech/"><FaGlobe style={iconStyles} />Visit</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/BVPMOSC"><FaGithub style={iconStyles} />Github</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Copyright Eventinsta
       
            </div>
          </div>
        </footer>
            
        )
    }
}

export default Footer