import React from 'react';
import './menuitem.scss';

const MenuItem = ({title, image, size}) => {
   return (
      <div className={`menu-item ${size}`} style={{backgroundImage: `url(${image})`}}>
         <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Shop Now</span>
         </div>
      </div>
   )
}

export default MenuItem;
