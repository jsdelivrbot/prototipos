import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

let tab_name = null;
class _Header extends Component {
    constructor(props){
        super(props);
        tab_name = this.props.page;
    }
    
    tab_name(tab){
        var tabs = tab.target.parentNode.parentNode.children;
        for(var i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active");
        }
        tab.target.parentNode.classList = 'active item';
        tab_name(tab.target.innerText);      
    }
    render() {
        return (
            <div style = {{ position: 'fixed', width: '100%', zIndex: '10000'}}>
                <Segment
                    inverted
                    textAlign='center'
                    /* style={{ minHeight: 700, padding: '1em 0em' }} */
                    style={{ padding: '1em 0em' }}
                    vertical
                >
                    <Container>
                        <Menu inverted pointing secondary size='large'>
                            <Menu.Item as='div' active style={{width: "25%"}} onClick = { this.tab_name }><Link to = '/'>Home</Link></Menu.Item>
                            <Menu.Item as='div' style={{width: "25%"}} onClick = { this.tab_name }><Link to = '/about'>About</Link></Menu.Item>
                            <Menu.Item as='div' style={{width: "25%"}} onClick = { this.tab_name }><Link to = '/services'>Services</Link></Menu.Item>
                            <Menu.Item as='div' style={{width: "25%"}} onClick = { this.tab_name }><Link to = '/contact'>Contact</Link></Menu.Item>
                        </Menu>
                    </Container>
                </Segment>    
            </div>
        )
    }
}

export default _Header
