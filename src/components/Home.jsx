import React from 'react';
import Slider from 'react-slick'
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
        <Slider {...sliderSettings}>
            <div><img src="http://placehold.it/1360x500"></img></div>
        </Slider>
        <div>
            <div className="mdl-typography--display-1-color-contrast" style={{width: '100%',textAlign: 'center'}}>React SaaS</div>
            <div className="mdl-typography--title-color-contrast" style={{width: '100%',textAlign: 'center'}}>An awesome boilerplate made with React</div>
        </div>
      </div>
    );
  }
};

export default Home;
