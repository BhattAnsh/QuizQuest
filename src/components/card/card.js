import * as React from 'react';
import '../card/card.css'

export default function CustomCard(props) {
  return (
    <div className='card-main-body'>
      <div className='card-head'>
        <div className='icon-container material-icons'>{props.iname}</div>
      </div>
      <div className='card-body'>
        <h2 className='card-heading'>{props.cardHeading}</h2>
        <p className='card-body-text'>{props.cardBody}</p>
      </div>
    </div>
  );
}
