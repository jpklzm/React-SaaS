import React, { Component } from 'react';
import { Footer as FooterMDL } from 'react-mdl';

const year = new Date().getFullYear();

class Footer extends Component {
  render() {
    return (<FooterMDL size="mini">
              <div style={{width: '100%',textAlign: 'center'}}>
                React SaaS - Made with coffee by <a href='https://github.com/jpklzm'>Jean Menezes</a> &copy; { year }
              </div>
           </FooterMDL>
  );
  }
}

export default Footer;
