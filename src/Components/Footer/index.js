import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './Footer.css';
import FaGlobe from 'react-icons/lib/fa/globe'
import FaGithub from 'react-icons/lib/fa/github'
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'

class Footer extends Component {
  render() {
    return (
        <div>
            <Menu fixed="bottom" pointing className='black' inverted >
                <Menu.Item position="left" name='home'> A Product of <a href="http://bvpmosc.tech" className='opensan' >&nbsp; <u>BVPMOSC</u> </a> </Menu.Item>
                <Menu.Item> <a href="https://github.com/BVPMOSC" target="_blank" rel="noopener noreferrer"> <FaGithub/> </a> </Menu.Item>
                <Menu.Item> <a href="https://www.facebook.com/BVPMOSC/" target="_blank" rel="noopener noreferrer"> <FaFacebookSquare/> </a> </Menu.Item>
                <Menu.Item> <a href="http://bvpmosc.tech/" target="_blank" rel="noopener noreferrer" > <FaGlobe/> </a> </Menu.Item>
            </Menu>
        </div>
    )
  }
}

export default Footer