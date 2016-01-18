import React from 'react';
import ReactDOM from 'react-dom'
import Router from 'react-router';
import { IndexRoute, Link, Route } from 'react-router';
import ReactMDL from 'react-mdl';
import { Layout , Header as HeaderMDL, Drawer, Navigation, Content } from 'react-mdl';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import Footer from './components/Footer.jsx'

class App extends React.Component{
  render() {
    return (
      <div>
        <div className="big-content" style={{height: '1000px', position: 'relative'}}>
          <Header>
            { this.props.children }
          </Header>
        </div>
        <Footer/>
      </div>
    )	;
  }
};

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="login" component={Login}/>
    <Route path="dashboard" component={Dashboard}/>
  </Route>
);

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'))
