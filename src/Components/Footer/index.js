import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import './Footer.css';
import FaGlobe from 'react-icons/lib/fa/globe'
import FaGithub from 'react-icons/lib/fa/github'
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
import { Header ,Segment,Divider} from 'semantic-ui-react'
const iconStyles = {
  marginRight: 8,
  fontSize: 16
};

const activeItem = 'home'
class Footer extends Component {
  render() {
    return (
        <div>
            <Menu fixed="bottom" pointing inverted>
                <Menu.Item position="left" name='home'> A Product of <a href="http://bvpmosc.tech">&nbsp; <u>BVPMOSC</u> </a> </Menu.Item>
                <Menu.Item> <FaGithub/> </Menu.Item>
                <Menu.Item> <FaFacebookSquare/> </Menu.Item>
                <Menu.Item> <FaGlobe/> </Menu.Item>
            </Menu>
        </div>
    )
  }
}

export default Footer