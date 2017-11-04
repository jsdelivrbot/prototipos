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

import { HashRouter, Route, Switch } from 'react-router-dom';

import _Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      tab: 'Home'
    }
    this.page = this.page.bind(this);
  }

  page(tab){
    this.setState({ tab })
  }
  render() {
    return (
      <HashRouter>
        <div>
            <_Header page = { this.page } />
            <Main tab = { this.state.tab } />
            <Footer />
        </div>
      </HashRouter>
    )
  }
}

export default App;