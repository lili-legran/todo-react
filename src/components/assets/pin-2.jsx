import React from 'react';
import './pin-2.scss';

class SecondPin extends React.Component {
  render() {
    return (
      <div className='second-pin'>
        <img className='second-pin__image' src='./pin-2.png' alt='pin'/>
      </div>
    )
  }
}

export default SecondPin;