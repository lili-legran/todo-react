import React from 'react';
import './pin-1.scss';

class FirstPin extends React.Component {
  render() {
    return (
      <div className='first-pin'>
        <img className='first-pin__image' src='./pin-1.png' alt='pin'/>
      </div>
    )
  }
}

export default FirstPin;