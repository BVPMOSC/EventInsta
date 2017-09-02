import React, { Component } from 'react'
import './Footer.css';
import FaGlobe from 'react-icons/lib/fa/globe'
import FaGithub from 'react-icons/lib/fa/github'
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
import { Header ,Segment,Divider} from 'semantic-ui-react'
const iconStyles = {
  marginRight: 8,
  fontSize: 16
};

class Footer extends Component {
  render() {
    return (


      <div >
         <Divider horizontal>“A product of BVPMOSC”</Divider>
    <Header as='h4' floated='right'>
     <a href=""> About Us</a>
    </Header>
  
    <Header as='h4' floated='left'>
     <a href="">Privacy policy </a>
    </Header>
    <Header as='h2' textAlign='center'>
    <FaGithub/><FaFacebookSquare/><FaGlobe/>
    </Header>
  </div>
        



    )
  }
}

export default Footer