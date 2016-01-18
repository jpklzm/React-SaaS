import React from 'react';
import { Content } from 'react-mdl';

const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

class Home extends React.Component{
  render() {
    return(
      <div>
        <div>
            <div className="mdl-typography--display-1-color-contrast" style={{width: '100%',textAlign: 'center'}}>Dashboard</div>
            <div className="mdl-typography--title-color-contrast" style={{width: '100%',textAlign: 'center'}}>This is your dashboard (or maybe not)</div>
        </div>
      </div>
    );
  }
};

export default Home;
