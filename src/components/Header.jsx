import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Layout, Header as HeaderMDL, Drawer, Navigation, Content } from 'react-mdl';

const activeClassName = 'active';

class Header extends Component{
  render() {
    return (<div>
      <Layout>
        <HeaderMDL title="React SaaS" scroll>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
          </Navigation>
        </HeaderMDL>
        <Drawer title="React SaaS">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
          </Navigation>
        </Drawer>
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    </div>);
  }
};

export default Header;
