import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Item from './item';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <div>
    <div className='item-display-area'>
      <Item img="https://res.cloudinary.com/dqaxkucbu/image/upload/v1686901054/AltitudePHImages/coco-brew_owutee.jpg" name="Coco Brew"/>
    </div>
  </div>
);
