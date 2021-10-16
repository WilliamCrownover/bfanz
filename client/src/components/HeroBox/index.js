import * as React from 'react';
import hero from '../../assets/hero.jpg'

class HeroBox extends React.Component {
  render () {
    return (
      <>
        <img src={hero} alt="Hero" />
      </>
    );
  }
}

export default HeroBox;